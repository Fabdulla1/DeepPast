// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Deep Past Initiative",
  tagline: "Win Prizes. Make History.",
  favicon: "img/babel-icon.png",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://Fabdulla1.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/deeppast",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Fabdulla1", // Usually your GitHub org/user name.
  projectName: "DeepPast", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Fabdulla1/DeepPast/tree/main",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Fabdulla1/DeepPast/tree/main",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light", // Force light mode by default
        disableSwitch: false, // Allow users to toggle if you want
        respectPrefersColorScheme: false, // Don't auto-detect dark mode from system
      },
      // Replace with your project's social card
      image: "img/babel-icon.png",
      navbar: {
        title: "Deep Past Initiative",
        logo: {
          alt: "Deep Past Logo",
          src: "img/babel-icon.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "mainSideBar",
            position: "left",
            label: "Challenge",
          },
          {
            position: "left",
            label: "Team",
            to: "/team",
          },
          {
            href: "https://discord.gg/XtCMyTrVCF",
            label: "Discord",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Pages",
            items: [
              {
                label: "Challenge",
                to: "/docs/intro",
              },
              {
                label: "Team",
                to: "/team",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/XtCMyTrVCF",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Fabdulla1/DeepPast/tree/main",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Deep Past Initiative`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
