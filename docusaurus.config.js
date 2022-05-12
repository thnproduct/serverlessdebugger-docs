// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Serverless Debugger',
  tagline: 'Serverless Debugger',
  url: 'https://frogate.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'thundra', // Usually your GitHub org/user name.
  projectName: 'Serverless Debugger', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    
    ({
      navbar: {
        logo: {
          alt: ' ',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Changelog', position: 'left'},
          // {
          //   href: 'https://github.com/thundra-io/thundra-vscode-issues/',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Introduction',
        //         to: '/',
        //       },
        //       {
        //         label: 'Examples',
        //         to: '/examples',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Extensions',
        //     items: [
        //       {
        //         label: 'VS Code',
        //         to: '/extensions/vscode',
        //       },
        //       {
        //         label: 'IntelliJ',
        //         to: '/extensions/intellij',
        //       },
        //       {
        //         label: 'WebStorm',
        //         to: '/extensions/webstorm',
        //       },
        //       {
        //         label: 'Eclipse',
        //         to: '/extensions/eclipse',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Slack',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Thundra, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    

    plugins: [
       './plugins/tailwind-config.js',
       './plugins/heap.js'
     ], 
    
};

module.exports = config;
