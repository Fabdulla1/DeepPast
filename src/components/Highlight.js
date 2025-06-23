import React from "react";
import Link from "@docusaurus/Link";
import NavBtn from "./NavBtn"; 

const Highlight = ({ title, description, link, imageUrl }) => {
  return (
    <div
      className="group relative flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 overflow-hidden"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60 dark:bg-black/60 pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center w-full">
        <h3 className="text-3xl font-bold text-white dark:text-gray-100 mb-2">
          {title}
        </h3>
        <p className="mb-4 text-center text-2xl font-bold"
            style={{
                background: "radial-gradient(53.44% 245.78% at 13.64% 46.56%, #f5d13f 0%, #d59c17 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent"
                }}
        > 
          {description}
        </p>
        <NavBtn
          text="Get Started!"
          subtitle="Uncover the Past"
          to={link}
        />
      </div>
    </div>
  );
}

export default Highlight;