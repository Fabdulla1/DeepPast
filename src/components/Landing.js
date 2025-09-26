import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useColorMode } from "@docusaurus/theme-common";

import "../css/custom.scss";

export function LeftShadow() {
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
      className="absolute inset-0 z-10 pointer-events-none"
      style={{
        background: colorMode === "dark" ? darkShadow : lightShadow,
      }}
    />
  );
}

export function Hero() {
  const { colorMode } = useColorMode();

  return (
    <div className="mainTitle mx-auto z-20 w-full max-w-screen-2xl relative mb-12">
      <div className="md:pt-20 pt-8 mb-4">
        <h1 className="text-5xl md:text-7xl font-black !mb-4 tracking-tight mix-blend-exclusion !leading-[110%] transition-opacity">
          <div className="max-w-3xl">Unearth Ancient Voices</div>
          <div
            className={`flex flex-col text-3xl max-w-2xl md:text-5xl drop-shadow-lg py-3 space-y-2 ${
              colorMode === "dark"
                ? "dark-title-gradient"
                : "light-title-gradient"
            }`}
          >
            <span>Discover, Translate, and</span>
            <span>Reimagine the Past</span>
          </div>
        </h1>
      </div>

      <div className="pt-8 mb-4">
        
        {/* Subtle visual enhancement - key stats */}
        <div className="flex flex-wrap gap-6 mt-8 max-w-lg">
          <div className="opacity-60">
            <div className={`text-2xl font-bold ${
              colorMode === "dark" ? "text-yellow-400" : "text-amber-700"
            }`}>22,000+</div>
            <div className="text-sm tracking-wide">Ancient Tablets</div>
          </div>
          <div className="opacity-60">
            <div className={`text-2xl font-bold ${
              colorMode === "dark" ? "text-yellow-400" : "text-amber-700"
            }`}>4,000</div>
            <div className="text-sm tracking-wide">Years Old</div>
          </div>
          <div className="opacity-60">
            <div className={`text-2xl font-bold ${
              colorMode === "dark" ? "text-yellow-400" : "text-amber-700"
            }`}>50%</div>
            <div className="text-sm tracking-wide">Untranslated</div>
          </div>
        </div>
      </div>
      <p className="max-w-lg md:text-xl text-lg font-medium mb-8 !leading-[110%] tracking-tight">
          <span id="our-story" className=" opacity-80 md:opacity-60">
            About ↓
          </span>
          <span className="ml-4 opacity-80 md:opacity-60">
            <a href="#our-team" className="hover:opacity-100 transition-opacity">
              Team ↓
            </a>
          </span>
          <span className="ml-4 opacity-80 md:opacity-60">
            <a href="#our-partners" className="hover:opacity-100 transition-opacity">
              Partners ↓
            </a>
          </span>
        </p>
    </div>
  );
}

export default function Landing() {
  const { colorMode } = useColorMode();

  const lightGradient = `
      linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 95%, rgba(255, 255, 255, 1) 100%),
      linear-gradient(90deg, rgba(0, 0, 0, 0.2) 20%, rgba(255, 255, 255, 0.1) 80%)
    `;

  const darkGradient = `
      linear-gradient(to bottom, rgba(28, 26, 29, 0.1) 0%, rgba(28, 26, 29, 0.1) 95%, #1C1A1D 100%),
      linear-gradient(90deg, rgba(28, 26, 29, 0.6) 20%, rgba(28, 26, 29, 0.1) 80%)
    `;

  return (
    <>
      <section
        className={`relative h-[100vh] px-6 ${
          colorMode === "dark" ? "text-white" : "text-black"
        }`}
        style={{
          backgroundImage: `
              ${colorMode === "dark" ? darkGradient : lightGradient},
              url(${useBaseUrl("/img/bg_image.jpg")})
            `,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Hero />
        <LeftShadow />
      </section>
      {/* About Section */}
      
      <About />
    </>
  );
}

// About section component styled like the Story component
export function About() {
  return (
    <section className="mb-24 md:mb-36 px-6 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900">
      <div className="w-full max-w-screen-2xl mx-auto z-30 relative">
        <div className="flex flex-col pt-8 md:pt-16">
          <h1 className="text-3xl md:text-6xl font-black !mb-5 leading-none tracking-tighter mb">
            About the Initiative
            <br />
          </h1>
          <div className="max-w-6xl md:text-xl text-lg font-medium !mb-8 md:w-full !leading-[110%] tracking-tight opacity-60">
            <span className="text-2xl text-yellow-500 dark:text-yellow-500 font-bold">
              The Deep Past Initiative deploys modern technologies towards the study of ancient societies
            </span>
            <br />
            <br />
            
            {/* Enhanced visual presentation of key points */}
            <div className="space-y-4 my-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>discovering, deciphering and publishing ancient data in easily accessible formats for scholars 
                as well as the general public</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>hosting scholars, collecting, and curating existing datasets aiding the study of the deep past</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>challenging coders through competitions to develop machine learning tools that deciphers and reads the largest 
                written dataset surviving from the ancient world - clay tablets, inscribed in the world's first system of writing, the cuneiform script</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>assisting existing projects devoted to the exploration of the deep past with infrastructural 
                and financial support for extraordinary, limited, one-time undertakings, where time is of essence, and for which 
                ordinary means of backing are inaccessible.</p>
              </div>
            </div>
            <br />
            In a joint effort by experts in ancient history and machine learning, DPI pushes the 
            limits of current AI capabilities by using ancient records as a test-case for machine learning. 
            There is no harder script than cuneiform for a computer to decipher. Teaching them to read and 
            translate this three-dimensional, multi-valent script used to write more than a dozen languages with 
            conventions dependent on genre and rapidly evolving over its +3500-year history across the Middle East 
            would mean that there is no other language or script in the world the technology can't master.
            <br />
            <br />
            <span className="font-bold">Reading cuneiform is the ultimate computational frontier.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
