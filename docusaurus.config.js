// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Deep Past Initiative - Ancient Document Digitization Challenge",
  tagline: "Win Prizes. Make History. Join the Global Challenge to Digitize Ancient Cuneiform Tablets.",
  favicon: "img/dpi_logo.JPG",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://www.deeppast.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Deep Past Initiative", // Usually your GitHub org/user name.
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
          routeBasePath: "challenge",
          sidebarPath: "./sidebars.js",
          breadcrumbs: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/Fabdulla1/DeepPast/tree/main",
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
          customCss: "./src/css/custom.scss",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // SEO Metadata
      metadata: [
        {
          name: 'description', 
          content: 'Join the Deep Past Initiative to help digitize 22,000+ ancient cuneiform tablets. Compete globally, win prizes, and contribute to preserving human history through innovative crowdsourcing technology.'
        },
        {
          name: 'keywords',
          content: 'cuneiform tablets, ancient history, digitization, crowdsourcing, archaeology, mesopotamia, babylonian, assyrian, historical preservation, global challenge, academic research'
        },
        {
          name: 'author',
          content: 'Deep Past Initiative'
        },
        {
          name: 'robots',
          content: 'index, follow'
        },
        {
          name: 'googlebot',
          content: 'index, follow, snippet, archive'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:site_name',
          content: 'Deep Past Initiative'
        },
        {
          property: 'og:title',
          content: 'Deep Past Initiative - Ancient Document Digitization Challenge'
        },
        {
          property: 'og:description',
          content: 'Join the global challenge to digitize 22,000+ ancient cuneiform tablets. Win prizes while preserving human history through crowdsourcing technology.'
        },
        {
          property: 'og:url',
          content: 'https://www.deeppast.org'
        },
        {
          property: 'og:image',
          content: 'https://www.deeppast.org/img/dpi_logo.JPG'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:site',
          content: '@deeppast'
        },
        {
          name: 'twitter:title',
          content: 'Deep Past Initiative - Ancient Document Digitization Challenge'
        },
        {
          name: 'twitter:description',
          content: 'Join the global challenge to digitize ancient cuneiform tablets. Win prizes while preserving human history.'
        },
        {
          name: 'twitter:image',
          content: 'https://www.deeppast.org/img/dpi_logo.JPG'
        }
      ],
      colorMode: {
        defaultMode: "dark", // Start in dark mode by default
        disableSwitch: false, // Allow users to toggle between modes
        respectPrefersColorScheme: false, // Don't auto-detect from system, use our default
      },
      // Replace with your project's social card
      image: "img/dpi_logo.JPG",
      navbar: {
        title: "Deep Past Initiative",
        logo: {
          alt: "Deep Past Logo",
          src: "img/dpi_logo.JPG",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "mainSideBar",
            position: "left",
            label: "Challenge",
          },
          {
            href: "https://discord.gg/XtCMyTrVCF",
            label: "Community",
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
                to: "/challenge/intro",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "Team",
                href: "https://www.deeppast.org/#team",
              },
              {
                label: "Partners",
                href: "https://www.deeppast.org/#partners",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "Email",
                href: "mailto:awl@deeppast.org",
              },
              {
                label: "234 Front st, New Haven CT 06513",
                href: "https://www.google.com/maps/search/?api=1&query=234+Front+st,+New+Haven+CT+06513",
              },
            ],
          },
          {
            title: "Community/Social Media",
            items: [
              {
                html: `
                  <a href="https://discord.gg/XtCMyTrVCF" target="_blank" rel="noopener noreferrer" class="footer__link-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" style="margin-right: 8px; vertical-align: middle;">
                      <path fill="currentColor" d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"/>
                    </svg>
                    Discord
                  </a>
                `,
              },
              {
                html: `
                  <a href="https://www.linkedin.com/company/deep-past-initiative" target="_blank" rel="noopener noreferrer" class="footer__link-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" style="margin-right: 8px; vertical-align: middle;">
                      <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                `,
              },
              {
                html: `
                  <a href="https://twitter.com/DeepPastAI" target="_blank" rel="noopener noreferrer" class="footer__link-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" style="margin-right: 8px; vertical-align: middle;">
                      <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    Twitter
                  </a>
                `,
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
  plugins: ["docusaurus-plugin-sass"],
};

export default config;
