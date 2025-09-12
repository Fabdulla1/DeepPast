import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import Link from "@docusaurus/Link";

const sidebarLinks = [
  {
    to: "https://www.kaggle.com",
    title: "🏛️ Overview",
    desc: "Embark on a journey through time to unlock the secrets of ancient Mesopotamian trade records and help decode 4,000-year-old mysteries!",
    accent: "amber",
    pattern: "cuneiform"
  },
];

function BottomLink({ to, title, desc }) {
  const { colorMode } = useColorMode();
  
  return (
    <Link
      to={to}
      className="group relative w-80 h-64 overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25 dark:hover:shadow-amber-400/20"
    >
      {/* Background with ancient tablet texture */}
      <div 
        className={`absolute inset-0 ${
          colorMode === "dark" 
            ? "bg-gradient-to-br from-amber-950 via-orange-950 to-yellow-950"
            : "bg-gradient-to-br from-amber-200 via-orange-200 to-yellow-200"
        }`}
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(251, 191, 36, ${colorMode === "dark" ? "0.1" : "0.2"}) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(245, 158, 11, ${colorMode === "dark" ? "0.1" : "0.2"}) 0%, transparent 50%),
            url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${colorMode === "dark" ? "d97706" : "b45309"}' fill-opacity='${colorMode === "dark" ? "0.05" : "0.1"}'%3E%3Cpath d='M20 20c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-8 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm16 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z'/%3E%3C/g%3E%3C/svg%3E")
          `,
        }}
      />
      
      {/* Glowing border effect */}
      <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 ${
        colorMode === "dark"
          ? "border-amber-600/30 group-hover:border-amber-500/60"
          : "border-amber-500/50 group-hover:border-amber-600/80"
      }`} />
      
      {/* Content */}
      <div className="relative h-full p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-4">
            <div className="relative">
              <span className="text-3xl mr-3 group-hover:animate-pulse filter drop-shadow-lg">🏛️</span>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full animate-ping group-hover:animate-bounce"></div>
            </div>
            <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-100 group-hover:text-amber-700 dark:group-hover:text-amber-200 transition-colors duration-300">
              Overview
            </h2>
          </div>
          <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed mb-4 line-clamp-4">
            {desc}
          </p>
        </div>
        
        {/* Call to action */}
        <div className="mt-auto">
          <div className="flex items-center justify-between text-amber-700 dark:text-amber-300 text-sm font-semibold group-hover:text-amber-600 dark:group-hover:text-amber-200 transition-colors duration-300">
            <span className="flex items-center">
              <span className="mr-2">🔍</span>
              Begin Your Quest
            </span>
            <span className="text-xl group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300">⚡</span>
          </div>
          
          {/* Progress bar effect */}
          <div className="mt-3 w-full bg-amber-200/50 dark:bg-amber-800/50 rounded-full h-1">
            <div className="bg-gradient-to-r from-amber-400 to-orange-400 h-1 rounded-full w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-400/60 dark:border-amber-500/60 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-400/60 dark:border-amber-500/60 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-amber-100/20 via-transparent to-transparent dark:from-amber-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Link>
  );
}

export default function BottomLinks() {
    const { colorMode } = useColorMode();
  return (
    <div className="relative rounded-lg p-y-4 z-10">
      <h2 className={`flex flex-col text-3xl max-w-2xl md:text-5xl drop-shadow-lg py-3 space-y-2 ${
              colorMode === "dark"
                ? "dark-title-gradient"
                : "light-title-gradient"
            }`}
          >Challenge Accepted!</h2>
      <div className="flex flex-wrap gap-4">
        {sidebarLinks.map((link) => (
          <BottomLink key={link.to} {...link} />
        ))}
      </div>
    </div>
  );
}
