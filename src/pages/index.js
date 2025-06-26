import React from "react";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";

import "../css/custom.scss";
import Highlight from "../components/Highlight";
import HeroSection from "../components/Hero";

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
