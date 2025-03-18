// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';
  
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Thumbnailer Documentation',
  tagline: 'Thumbnailer Documentation',
  url: 'https://thubmaniler.eeldev.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/eeldev_icon.png',
  organizationName: 'eeldev-ue4', // Usually your GitHub org/user name.
  projectName: 'doc.thumbnailer', // Usually your repo name.
  plugins: [require.resolve("docusaurus-plugin-image-zoom")],
  deploymentBranch: 'deployment',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        
        //blog: {
        //  showReadingTime: true,
        //  sortPosts: 'ascending'
        //  // Please change this to your repo.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },
      navbar: {
        title: 'Documentation',
        logo: {
          alt: 'My Site Logo',
          src: 'img/eeldev_icon.png',
        },
        items: [ 
          /*
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          */
          //{to: '/blog', label: 'Changelogs', position: 'left'},
          { href: 'https://eeldev.com', label: 'eeldev.com' },
          { href: 'https://www.unrealengine.com/marketplace/slug/e6cff6f9f12f4fb699af2012fab767ee', label: 'Unreal Marketplace' },
          { href: 'https://www.youtube.com/channel/UC6Rhr_F5BxwfTtcADVPUNYA', label: 'YouTube', position: 'right' },
          { href: 'https://discord.gg/3Yu7pEy', label: 'Discord', position: 'right'},
          { href: 'https://twitter.com/dryeeldev', label: 'Twitter', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          /** 
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          */
         /*
          {
            title: 'Community',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UC6Rhr_F5BxwfTtcADVPUNYA',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/3Yu7pEy',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/dryeeldev',
              },
            ],
          },
          */


          /*
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
          */
        ],
        copyright: `Copyright © ${new Date().getFullYear()} eelDev AB`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      
    }
    ),
};

export default config;