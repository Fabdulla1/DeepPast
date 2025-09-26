import React from "react";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";

import "../css/custom.scss";
import Highlight from "../components/Highlight";
import Landing from "../components/Landing";
import Team, { Partners } from "../components/Team";
import StructuredData from "../components/StructuredData";

export default function Home() {
  return (
    <Layout
      title="Deep Past Initiative - Ancient Document Digitization Challenge"
      description="Join the global challenge to digitize 22,000+ ancient cuneiform tablets. Win prizes while preserving human history through crowdsourcing technology."
    >
      <StructuredData />
      <div className="">
        <div className="z-20 relative">
          {/* Hero and About */}
          <Landing />
          {/* Highlight Section */}
          <Highlight
            title="Deep Past Challenge"
            subtitle="Unlock the deep past of Mesopotamia"
            desc="The Deep Past Challenge is a machine learning and language translation competition unlocking the 4,000-year-old trade records of Assyrian vendors."
            link="/challenge/intro"
            imageUrl={useBaseUrl("/img/cuneiform-tablet-highlight-card.png")}
          />
          {/* Team Section */}
          <Team />
          {/* Partners Section */}
          <Partners />
        </div>
      </div>
    </Layout>
  );
}
