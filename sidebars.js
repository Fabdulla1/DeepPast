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
    { type: "doc", id: "intro" },
    { type: "doc", id: "overview" },
    {
      type: "category",
      label: "Data",
      items: [
        { type: "doc", id: "data/akkadian" },
        { type: "doc", id: "data/english" },
        { type: "doc", id: "data/unicode" },
        { type: "doc", id: "data/images" },
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      items: [
        { type: "doc", id: "tutorials/dataset_accessibility" },
        { type: "doc", id: "tutorials/sparql_queries" },
        { type: "doc", id: "tutorials/dataset_conversion" },
        { type: "doc", id: "tutorials/format_conversion_tools" },
        { type: "doc", id: "tutorials/hugging_face_models" },
        { type: "doc", id: "tutorials/text_annotation" },
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
