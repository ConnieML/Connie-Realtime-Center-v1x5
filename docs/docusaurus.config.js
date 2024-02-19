// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { github: lightCodeTheme, dracula: darkCodeTheme } = require("prism-react-renderer").themes;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Connie RTC Documents",
  tagline: "Connie Professional Services",
  favicon: "img/logos/connie-teams.png",

  // Set the production url of your site here
  url: "https://connieml.github.io/Connie-Realtime-Center-v1.5",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/connie-rtc-project-template/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "connie-professional-services", // Usually your GitHub org/user name.
  projectName: "connie-rtc-project-template", // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/", // Serve the docs at the site's root
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
          //docsRouteBaseBath: "/",
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        toExtensions: ["html"],
      },
    ],
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options here
        indexDocs: true,
        indexBlog: false,
        language: "en",
      },
    ],
    'docusaurus-plugin-sass'
  ],
  
  stylesheets: [
    'https://assets.twilio.com/public_assets/paste-fonts/1.5.1/fonts.css',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Connie RTC Project Template",
        logo: {
          alt: "Connie RTC Logo",
          src: "img/logos/connie-teams.png",
        },
        items: [
          {
            href: "https://twilio-professional-services.github.io",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Connie RTC Docs",
            items: [
              {
                label: "Connie RTC Developer Docs",
                href: "https://twilio-professional-services.github.io",
              },
              {
                label: "Connie RTC User Docs",
                href: "https://twilio-professional-services.github.io",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://twilio-professional-services.github.io",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} American Society On Aging, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  themes: ['@docusaurus/theme-mermaid'],
    // In order for Mermaid code blocks in Markdown to work,
    // you also need to enable the Remark plugin with this option
    markdown: {
      mermaid: true,
    },
};

module.exports = config;
