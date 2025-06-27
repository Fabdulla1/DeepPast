import React from "react";
import NavBtn from "./NavBtn";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useColorMode } from "@docusaurus/theme-common";

const Highlight = ({ title, subtitle, desc, link, imageUrl }) => {
  const { colorMode } = useColorMode();

  const lightShadow = `
    linear-gradient(90deg, rgba(28, 26, 29, 0.8) 40%, rgba(28, 26, 29, 0.2) 60%),
    linear-gradient(0deg, #1C1A1D 1%, rgba(28, 26, 29, 0) 30%)
  `;

  const darkShadow = `
    linear-gradient(90deg, rgba(28, 26, 29, 0.8) 40%, rgba(28, 26, 29, 0.2) 60%),
    linear-gradient(0deg, #1C1A1D 1%, rgba(28, 26, 29, 0) 30%)
  `;

  return (
    <div
      className="highlightContainer group max-w-screen-2xl my-20 md:mx-auto mx-4 md:w-full relative flex flex-row flex-wrap justify-around p-6 rounded-lg shadow-lg gap-x-10 gap-y-10"
      style={{
        backgroundImage: `
          ${colorMode === "dark" ? darkShadow : lightShadow},
          url(${useBaseUrl("/img/tablet-cover.jpg")})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative flex flex-col text-center md:justify-start md:text-left">
        <h3 className="text-3xl font-bold mb-2 text-white">{title}</h3>
        <h4
          className="mb-4 text-2xl font-bold"
          style={{
            background:
              "radial-gradient(53.44% 245.78% at 13.64% 46.56%, #f5d13f 0%, #d59c17 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          {subtitle}
        </h4>
        <p className="text-base text-gray-300 max-w-sm">{desc}</p>
        <NavBtn
          text="Get Started"
          subtitle="Work with real tablet data to uncover the Past!"
          to={link}
        />
      </div>
      <div className="relative w-full md:w-2/5 h-full shadow-lg">
        <img className="w-full h-full m-auto rounded-lg" src={imageUrl} />
      </div>
    </div>
  );
};

export default Highlight;
