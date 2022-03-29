// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'frogate',
  tagline: 'Serverless Debugger',
  url: 'https://frogate.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'thundra', // Usually your GitHub org/user name.
  projectName: 'frogate', // Usually your repo name.

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
        title: 'frogate',
        logo: {
          alt: ' ',
          src: 'img/alogo.svg',
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    plugins: [
      // 'docusaurus-tailwindcss',
       async function myPlugin(context, options) {
         return {
           name: "docusaurus-tailwindcss",
           configurePostCss(postcssOptions) {
             // Appends TailwindCSS and AutoPrefixer.
             postcssOptions.plugins.push(require("tailwindcss"));
             postcssOptions.plugins.push(require("autoprefixer"));
             return postcssOptions;
           },
         };
       },
       async function addHeap(context, options) {
         return {
           name: "add-heap",
           injectHtmlTags() {      
            return {
              headTags: [
                {
                  tagName: "link",
                  attributes: {
                    rel: "preconnect",
                  }
                },
                {
                  tagName: "script",
                  innerHTML: `
                    window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
                    heap.load("3444801310");
                  `
                }
              ]
            };
          }
         };
       },
     ], 
    
};

module.exports = config;
