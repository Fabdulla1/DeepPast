import React from "react";
import Link from "@docusaurus/Link";

const NavBtn = ({ text, subtitle, to }) => {
  return (
    <Link
      to={to}
      className="group inline-block no-underline rounded-xl bg-black/40 dark:bg-black/20 px-8 py-4 border-2 border-gray-600 hover:bg-black/60 dark:hover:bg-black/40 transition ease-in-out duration-500"
    >
      <div className="text-left">
        <div className="flex items-center gap-2 text-yellow-300 dark:text-yellow-500 font-semibold text-lg md:text-xl mb-2">
          <span>{text}</span>
          <svg
            className="w-5 h-5 mt-0.5 transform transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        {subtitle && (
          <div className="text-sm text-gray-100 dark:text-gray-400 opacity-80 -mt-1">
            {subtitle}
          </div>
        )}
      </div>
    </Link>
  );
};

export default NavBtn;
