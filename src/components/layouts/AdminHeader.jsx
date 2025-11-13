import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineManageAccounts } from "react-icons/md";
import { adminAllMenuItems } from "../../util/adminData";

const AdminHeader = () => {
  const location = useLocation();
  const [hoveredMenuId, setHoveredMenuId] = useState(null);

  return (
    <header className="bg-white text-black shadow-md border-b border-gray-300">
      <div className="flex justify-between items-center px-8 py-5">
        <div className="flex items-center gap-3">
          <MdOutlineManageAccounts className="w-10 h-10 fill-black" />
          <div className="text-2xl font-bold text-black tracking-wide">
            그린체육관 [관리자페이지]
          </div>
        </div>

        <Link to="/" className="hover:underline">
          로그아웃
        </Link>
      </div>
    </header>
  );
};

export default AdminHeader;
