import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

import "../css/custom.scss";
import NavBtn from "./NavBtn";

const tablets = [
  {
    title: "Aššur-nāda",
    desc: "a headstrong son navigating the pressures of trade in Kanesh.",
  },
  {
    title: "Aššur-idi",
    desc: "his aging father in Aššur, torn between temple duties and family expectations.",
  },
  {
    title: "Ištar-lamassi",
    desc: "a daughter and diplomatic bridge, married into another merchant dynasty.",
  },
  {
    title: "Puzur-Ištar",
    desc: "her husband, carrying his father's legacy into a new generation of trade.",
  },
];

export default function Intro() {
  return (
    <section className="mb-24 md:mb-36">
      <div className="container w-full px-0 mx-auto z-30 relative">
        <div className="flex flex-col pt-8 md:pt-16">
          <h1 className="text-3xl md:text-6xl font-black !mb-5 leading-none tracking-tighter mb">
            Our Story
            <br />
          </h1>
          <div className="max-w-6xl md:text-xl text-lg font-medium !mb-8 md:w-full w-4/5  !leading-[110%] tracking-tight opacity-60">
            <span className="text-2xl text-yellow-500 dark:text-yellow-500 font-bold">
              4000 years ago, the world's first commercial civilization was
              thriving. Now, it's time to let their voices speak again.
            </span>
            <br />
            <br />
            In the early second millennium BCE, long before Rome or Athens,
            merchants from the city of Aššur built a vast trade network
            stretching across Mesopotamia and Anatolia. They left behind over
            25,000 clay tablets at the site of ancient Kanesh—contracts,
            letters, loans, receipts—each etched in cuneiform, each bearing
            witness to a living world of commerce, conflict, and kinship.
            <br />
            <br />
            These are not myths. These are ledgers. Courtroom testimonies.
            Heated arguments between fathers and sons. Tender messages between
            husbands and wives. Each tablet records a moment in the life of real
            people:
            <ul className="list-disc pl-6 mt-5">
              {tablets.map((tablet) => (
                <li className="mb-3" key={tablet.title}>
                  <span className="font-bold">{tablet.title}</span>,{" "}
                  {tablet.desc}
                </li>
              ))}
            </ul>
            Their world was connected by caravans and sealed with trust—but also
            plagued by debt, distance, and disputes. Through their tablets, we
            glimpse negotiations, betrayals, reconciliations, and even
            rebellion. One family's rift could destabilize an entire economic
            alliance.
            <br />
            <br />
            And yet… most of these voices remain unread.
            <br />
            <br />
            Only a fraction of the tablets have been translated. The vast
            majority lie untranslated in museum storerooms or digitized in
            unreadable formats—waiting. Not because they are unimportant, but
            because there are fewer than twenty people alive today who can
            translate them.
            <br />
            <br />
            That's where you come in.
            <br />
            <br />
            <span className="font-bold">The Deep Past Challenge</span> invites
            you to build machine translation systems that can unlock this
            archive. Every word you help translate brings us closer to
            understanding how ancient trade, law, family, and technology once
            intertwined.
            <br />
            <br />
            This isn't just a language task. It's the recovery of a lost world.
            <br />
            Join us—
            <span className="font-bold">help history speak again.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
