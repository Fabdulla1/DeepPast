import React from "react";
import NavBtn from "./NavBtn";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useColorMode } from "@docusaurus/theme-common";

const Highlight = ({ title, subtitle, desc, link, imageUrl }) => {
  const { colorMode } = useColorMode();

  return (
    <div className="group relative max-w-screen-2xl my-20 md:mx-auto mx-4 md:w-full overflow-hidden rounded-2xl shadow-2xl">
      
      <div 
        className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950 dark:via-orange-950 dark:to-yellow-950"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
            url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${colorMode === "dark" ? "d97706" : "f59e0b"}' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-8 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm16 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z'/%3E%3C/g%3E%3C/svg%3E")
          `,
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          backgroundImage: `url(${useBaseUrl("/img/tablet-cover.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent dark:from-black/80 dark:via-black/60 dark:to-black/20" />
      
      <div className="absolute inset-0 rounded-2xl border-2 border-amber-300/30 dark:border-amber-600/30" />
    
      <div className="relative flex flex-row flex-wrap justify-around p-8 md:p-12 gap-x-10 gap-y-10 min-h-[400px]">
        <div className="relative flex flex-col text-center md:justify-start md:text-left md:max-w-md">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <div className="relative">
              <span className="text-4xl mr-3 filter drop-shadow-lg">🏛️</span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-ping"></div>
            </div>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            {title}
          </h3>
          
          <h4 className="mb-6 text-2xl md:text-3xl font-bold drop-shadow-lg"
            style={{
              background: "linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #f59e0b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            {subtitle}
          </h4>
          
          <p className="text-lg text-gray-200 dark:text-gray-300 max-w-md mb-8 leading-relaxed drop-shadow-md">
            {desc}
          </p>
          
          <div className="mt-auto">
            <NavBtn
              text="Get Started"
              subtitle="Work with real tablet data to uncover the Past!"
              to={link}
            />
          </div>
        </div>
        <div className="relative w-full md:w-2/5 h-80 md:h-96">
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-transparent rounded-xl" />
          <img 
            className="w-full h-full object-cover rounded-xl shadow-2xl" 
            src={imageUrl} 
            alt={title}
          />
          
          <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-400/60 dark:border-amber-500/60 opacity-70" />
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-400/60 dark:border-amber-500/60 opacity-70" />
        </div>
      </div>
    </div>
  );
};

export default Highlight;
