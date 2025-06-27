import React from "react";
import Link from "@docusaurus/Link";

const sidebarLinks = [
  {
    to: "/challenge/overview",
    title: "🧩 Overview",
    desc: "Get an overview of the Deep Past Challenge and its objectives.",
  },
  {
    to: "/challenge/data/akkadian",
    title: "📊 Data",
    desc: "Explore the datasets available for the challenge, including images and metadata.",
  },
  {
    to: "/challenge/tutorials/dataset_accessibility",
    title: "🪜 Tutorials",
    desc: "Learn how to use the tools and techniques for the challenge through our tutorials.",
  },
  {
    to: "/challenge/FAQ",
    title: "💭 FAQ",
    desc: "Find answers to frequently asked questions about the challenge and participation.",
  },
];

function SidebarLink({ to, title, desc }) {
  return (
    <Link
      to={to}
      className="text-lg font-semibold w-60 h-48 bg-gray-400 bg-opacity-70 dark:bg-gray-800 rounded-lg px-5 py-5"
    >
      <h2 className="text-lg font-semibold text-black dark:text-white">
        {title}
      </h2>
      <p className="text-base text-gray-500 dark:text-gray-500">{desc}</p>
    </Link>
  );
}

export default function SidebarLinks() {
  return (
    <div className="relative rounded-lg p-y-4 z-10">
      <h2 className="text-xl font-bold mb-4">Get Started</h2>
      <div className="flex flex-wrap gap-4">
        {sidebarLinks.map((link) => (
          <SidebarLink key={link.to} {...link} />
        ))}
      </div>
    </div>
  );
}
