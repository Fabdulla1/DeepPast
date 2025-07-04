import React from "react";
import Link from "@docusaurus/Link";

const NavBtn = ({ text, subtitle, to }) => {
  return (
    <Link
      to={to}
      className="group inline-block no-underline rounded-xl bg-black/40 dark:bg-black/60 px-8 py-4 border-2 border-gray-600 hover:bg-black/60 dark:hover:bg-black/40 hover:border-amber-400/60 dark:hover:border-amber-500/60 hover:shadow-2xl hover:shadow-amber-500/30 dark:hover:shadow-amber-400/20 transition-all ease-in-out duration-500"
    >
      <div className="text-left">
        <div className="flex items-center gap-2 text-yellow-300 dark:text-yellow-500 group-hover:text-amber-300 dark:group-hover:text-amber-400 font-semibold text-lg md:text-xl mb-2 transition-colors duration-300">
          <span>{text}</span>
          <svg
            className="w-5 h-5 mt-1 group-hover:translate-x-1 transition-transform duration-300"
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
          <div className="text-sm max-w-lg text-gray-100 dark:text-gray-400 group-hover:text-gray-50 dark:group-hover:text-gray-300 opacity-80 group-hover:opacity-100 -mt-1 transition-all duration-300">
            {subtitle}
          </div>
        )}
      </div>
    </Link>
  );
};

export default NavBtn;
