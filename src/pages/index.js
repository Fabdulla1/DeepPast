import React from "react";
import Layout from "@theme/Layout";

import "../css/custom.css";

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

const team = {
  challenge: [
    {
      name: "Adam Anderson",
      title: "Challenge Creator",
      href: "https://example.com/",
    },
    {
      name: "James Dinh",
      title: "Web Developer",
      href: "https://jamesdinh.me/",
    },
    {
      name: "Farhan Abdulla",
      title: "Data Scientist & ML Engineer",
      href: "https://www.linkedin.com/in/farhan-abdulla/",
    },
    {
      name: "Ishan",
      title: "Research Fellow",
      href: "https://example.com/",
    },
    {
      name: "Taha",
      title: "Research Fellow",
      href: "https://example.com/",
    },
  ],
};

const Link = ({ link }) => (
  <div>
    <a className="hover:no-underline inline-block fit-content" href={link.href}>
      <h3 className="mb-0 text-xl font-medium transition-opacity duration-200 hover:opacity-70">
        {link.name}&nbsp;&nbsp;
        <span className="opacity-70">{link.title}</span>
      </h3>
    </a>
  </div>
);

export default function Home() {
  return (
    <Layout>
      <div className="">
        <div className="z-20 relative">
          {/* Hero */}
          <section
            className="relative h-[100vh] mb-24 md:mb-36 text-white"
            style={{
              backgroundImage: `
                linear-gradient(to bottom, rgba(28, 26, 29, 0.3) 0%, #1C1A1D 90%),
                linear-gradient(90deg, rgba(28, 26, 29, 0.8) 20%, rgba(28, 26, 29, 0) 80%),
                url('/img/tower_of_babel.png')
              `,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container mx-auto z-20 relative mb-12">
              <div className="md:pt-20 pt-8 mb-4">
                <h1 className="text-5xl md:text-7xl font-black !mb-4 tracking-tight mix-blend-exclusion !leading-[90%] transition-opacity">
                  <div className="max-w-3xl">
                    Unearth the voices of ancient merchants. Translate the
                    archives of Mesopotamia.
                  </div>
                  <span
                    className="text-3xl md:text-5xl drop-shadow-lg"
                    style={{
                      background:
                        "radial-gradient(53.44% 245.78% at 13.64% 46.56%, #f5d13f 0%, #d57617 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textFillColor: "transparent",
                    }}
                  >
                    <span className="whitespace-nowrap">Win Prizes.&nbsp;</span>
                    <span className="whitespace-nowrap">
                      Make History.&nbsp;
                    </span>
                  </span>
                </h1>
                <p className="max-w-lg md:text-xl text-lg font-medium mb-8 !leading-[110%] tracking-tight">
                  <span className="opacity-80 md:opacity-60">
                    The Deep Past Challenge is a machine learning and language
                    translation competition unlocking the 4,000-year-old trade
                    records of Assyrian merchants. Thousands of cuneiform texts
                    remain untranslated—help us bring their stories to light.
                  </span>
                  <br />
                </p>
              </div>

              <div className="pt-8 mb-4">
                <p className="max-w-lg md:text-xl text-lg font-medium mb-8 !leading-[110%] tracking-tight">
                  <span id="our-story" className=" opacity-80 md:opacity-60">
                    Our story ↓
                  </span>
                </p>
              </div>
            </div>
            {/* Left shadow */}
            <div
              className="absolute inset-0 h-[90vh] z-10"
              style={{
                background:
                  "linear-gradient(90deg, rgba(28, 26, 29, 0.8) 20%, rgba(28, 26, 29, 0) 80%),linear-gradient(0deg, #1C1A1D 1%, rgba(28, 26, 29, 0) 30%)",
              }}
            />
          </section>
          {/* Story */}
          <section className="mb-24 md:mb-36">
            <div className="container mx-auto z-30 relative">
              <div className="flex flex-col py-8 md:py-16 ">
                <h1 className="text-3xl md:text-6xl font-black !mb-5 leading-none tracking-tighter mb">
                  Our Story
                  <br />
                </h1>
                <div className="max-w-6xl md:text-xl text-lg font-medium !mb-8 md:w-full w-4/5  !leading-[110%] tracking-tight opacity-60">
                  <span
                    className="text-2xl font-bold"
                    style={{
                      background:
                        "radial-gradient(53.44% 245.78% at 13.64% 46.56%, #f5d13f 0%, #d59c17 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textFillColor: "transparent",
                    }}
                  >
                    4000 years ago, the world's first commercial civilization
                    was thriving. Now, it's time to let their voices speak
                    again.
                  </span>
                  <br />
                  <br />
                  In the early second millennium BCE, long before Rome or
                  Athens, merchants from the city of Aššur built a vast trade
                  network stretching across Mesopotamia and Anatolia. They left
                  behind over 25,000 clay tablets at the site of ancient
                  Kanesh—contracts, letters, loans, receipts—each etched in
                  cuneiform, each bearing witness to a living world of commerce,
                  conflict, and kinship.
                  <br />
                  <br />
                  These are not myths. These are ledgers. Courtroom testimonies.
                  Heated arguments between fathers and sons. Tender messages
                  between husbands and wives. Each tablet records a moment in
                  the life of real people:
                  <ul className="list-disc pl-6 mt-5">
                    {tablets.map((tablet) => (
                      <li className="mb-3" key={tablet.title}>
                        <span className="font-bold">{tablet.title}</span>,{" "}
                        {tablet.desc}
                      </li>
                    ))}
                  </ul>
                  Their world was connected by caravans and sealed with
                  trust—but also plagued by debt, distance, and disputes.
                  Through their tablets, we glimpse negotiations, betrayals,
                  reconciliations, and even rebellion. One family's rift could
                  destabilize an entire economic alliance.
                  <br />
                  <br />
                  And yet… most of these voices remain unread.
                  <br />
                  <br />
                  Only a fraction of the tablets have been translated. The vast
                  majority lie untranslated in museum storerooms or digitized in
                  unreadable formats—waiting. Not because they are unimportant,
                  but because there are fewer than twenty people alive today who
                  can translate them.
                  <br />
                  <br />
                  That's where you come in.
                  <br />
                  <br />
                  <span className="font-bold">
                    The Deep Past Challenge
                  </span>{" "}
                  invites you to build machine translation systems that can
                  unlock this archive. Every word you help translate brings us
                  closer to understanding how ancient trade, law, family, and
                  technology once intertwined.
                  <br />
                  <br />
                  This isn't just a language task. It's the recovery of a lost
                  world.
                  <br />
                  Join us—
                  <span className="font-bold">help history speak again.</span>
                </div>
              </div>
            </div>
          </section>
          {/* Team */}
        </div>
      </div>
    </Layout>
  );
}
