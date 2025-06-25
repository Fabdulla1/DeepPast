import React from "react";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useColorMode } from "@docusaurus/theme-common";

import "../css/custom.scss";
import Highlight from "../components/Highlight";

function LeftShadow() {
  const { colorMode } = useColorMode();

  // const lightShadow = `
  //   linear-gradient(90deg, rgba(198, 198, 198, 0.8) 0%, rgba(255, 255, 255, 0) 80%),
  //   linear-gradient(0deg, #ffffff 1%, rgba(255, 255, 255, 0) 30%)
  // `;
  const lightShadow = `
    linear-gradient(
      225deg,
      rgba(198, 198, 198, 0.8) 0%,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0) 60%,
      #ffffff 100%
    )
  `;

  const darkShadow = `
    linear-gradient(90deg, rgba(28, 26, 29, 0.8) 20%, rgba(28, 26, 29, 0) 80%),
    linear-gradient(0deg, #1C1A1D 1%, rgba(28, 26, 29, 0) 30%)
  `;

  return (
    <div
      className="absolute inset-0 h-[90vh] z-10 pointer-events-none"
      style={{
        background: colorMode === "dark" ? darkShadow : lightShadow,
      }}
    />
  );
}

function HeroSection() {
  const { colorMode } = useColorMode();

  const lightGradient = `
    linear-gradient(to bottom, rgba(198, 198, 198, 0.3) 0%, #ffffff 90%),
    linear-gradient(90deg, rgba(255, 255, 255, 0.8) 20%, rgba(255, 255, 255, 0) 80%)
  `;

  const darkGradient = `
    linear-gradient(to bottom, rgba(28, 26, 29, 0.3) 0%, #1C1A1D 90%),
    linear-gradient(90deg, rgba(28, 26, 29, 0.8) 20%, rgba(28, 26, 29, 0) 80%)
  `;

  return (
    <section
      className={`relative h-[100vh] mb-24 md:mb-36 ${
        colorMode === "dark" ? "text-white" : "text-black"
      }`}
      style={{
        backgroundImage: `
          ${colorMode === "dark" ? darkGradient : lightGradient},
          url(${useBaseUrl("/img/tower_of_babel.png")})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mainTitle container mx-auto z-20 relative mb-12">
        <div className="md:pt-20 pt-8 mb-4">
          <h1 className="text-5xl md:text-7xl font-black !mb-4 tracking-tight mix-blend-exclusion !leading-[90%] transition-opacity">
            <div className="max-w-3xl">Unearth the Ancient Voices</div>
            <div
              className={`flex flex-col text-3xl md:text-5xl drop-shadow-lg py-3 space-y-3 ${
                colorMode === "dark"
                  ? "dark-title-gradient"
                  : "light-title-gradient"
              }`}
            >
              <p className="whitespace-nowrap m-0">Discover, Translate, and </p>
              <p className="whitespace-nowrap m-0">Reimagine the Past&nbsp;</p>
            </div>
          </h1>
          <p className="max-w-lg md:text-xl text-lg font-medium mb-8 !leading-[110%] tracking-tight">
            <span className="opacity-80 md:opacity-60">
              The Deep Past Challenge is a machine learning and language
              translation competition unlocking the 4,000-year-old trade records
              of Assyrian merchants. Thousands of cuneiform texts remain
              untranslated—help us bring their stories to light.
            </span>
            <br />
          </p>
        </div>

        <div className="pt-8 mb-4">
          <p className="max-w-lg md:text-xl text-lg font-medium mb-8 !leading-[110%] tracking-tight">
            <span id="our-story" className=" opacity-80 md:opacity-60">
              About ↓
            </span>
          </p>
        </div>
      </div>

      {/* Left shadow */}
      <LeftShadow />
    </section>
  );
}

export default function Home() {
  return (
    <Layout>
      <div className="">
        <div className="z-20 relative">
          {/* Hero */}
          <HeroSection />
          {/* Story */}
          <Highlight
            title="Deep Past Challenge"
            description="Unlock the deep past of Mesopotamia"
            link="/challenge/intro"
            imageUrl={useBaseUrl("/img/tablet.jpg")}
          />
        </div>
      </div>
    </Layout>
  );
}
