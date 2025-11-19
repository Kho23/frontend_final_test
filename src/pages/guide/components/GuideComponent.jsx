import React from "react";

const GuideComponent = ({ cleanHtml, finalName, Createddate }) => {
  return (
    <div className="bg-white">
      <div className="max-w-5xl flex gap-10 py-4 px-4">
        <main className="flex-1">
          <nav className="text-sm text-gray-500 mb-6">
            홈 &gt; 이용안내 &gt; {finalName}
          </nav>

          <div className="flex items-end justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">
              {finalName} 안내
            </h1>

            <span className="text-gray-500 text-sm">
              작성일 : {Createddate}
            </span>
          </div>

          <div className="border-b-2 border-gray-400 mb-6" />

          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 min-h-[300px]">
            <article
              className="
                prose max-w-none 
                prose-h2:text-xl
                prose-h3:text-lg
                prose-p:text-gray-700
                prose-li:text-gray-700
              "
              dangerouslySetInnerHTML={{ __html: cleanHtml }}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default GuideComponent;
