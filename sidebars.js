// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  // But you can create a sidebar manually
  mainSideBar: [
    "intro",
    {
      type: "category",
      label: "Data",
      items: [
        { type: "doc", id: "data/akkadian" },
        { type: "doc", id: "data/english" },
        { type: "doc", id: "data/unicode" },
        { type: "doc", id: "data/photos" },
      ],
    },
    { type: "doc", id: "faq" },
    {
      type: "link",
      label: "Discord",
      href: "https://discord.gg/XtCMyTrVCF",
    },
  ],
};

export default sidebars;
