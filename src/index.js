import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "../src/store/store";
import { CookiesProvider } from "react-cookie";
import React from "react";
import { getCookie } from "./util/cookieUtil";
import axios from "axios";
import { logout } from "./store/auth/authSlice";

// [수정] 현재 실제 사용 중인 AWS 서버 IP인 13.238.88.253으로 변경합니다.
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL || "http://13.238.88.253:8080";
axios.defaults.headers.common["Content-Type"] = "application/json";
// [추가] CORS 환경에서 쿠키와 인증 헤더를 주고받기 위해 필수
axios.defaults.withCredentials = true; 

axios.interceptors.request.use(
  (config) => {
    const cookie = getCookie("member");
    if (cookie && cookie.accessToken) {
      config.headers["Authorization"] = `Bearer ${cookie.accessToken}`;
    }
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("토큰이 만료되어 로그아웃됩니다.");
      store.dispatch(logout());
      alert("토큰이 만료되었습니다. 다시 로그인해주세요.");
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CookiesProvider>
);