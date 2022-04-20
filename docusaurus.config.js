// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Shardeum Docs',
  tagline: 'Explore Shardeum Docs',
  url: 'https://docs.shardeum.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Shardeum', // Usually your GitHub org/user name.
  projectName: 'shardeum-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/shardeum/shardeum-docs',
        },
        blog:false,
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Shardeum',
        hideOnScroll: true,
        logo: {
          alt: 'Shardeum Docs Logo',
          src: 'img/shardeum-logo-dark.png',
        },
        items: [
          {
            href: 'https://github.com/shardeum/shardeum-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'General',
            items: [
              {
                label: 'Home',
                to: 'https://shardeum.org',
              },
              {
                label: 'Super Shardians',
                to: 'https://github.com/Shardeum/super-shardeum',
              },
              {
                label: 'Blog',
                to: 'https://shardeum.org/blog',
              },
              {
                label: 'Languages',
                to: 'https://shardeum.org/languages',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                to: 'https://t.me/shardeum',
              },
              {
                label: 'Discord',
                to: 'https://discord.gg/gx2SFZDDSM',
              },
              {
                label: 'Twitter',
                to: 'https://twitter.com/shardeum',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Litepaper',
                to: 'https://shardeum.org/wp-content/uploads/2022/03/Shardeum-Litepaper.pdf',
              },
              {
                label: 'FAQs',
                to: 'https://shardeum.org/faq/',
              },
              {
                label: 'Brand Assets Page',
                to: 'https://drive.google.com/drive/folders/1jdjJNMajHG_QDu_uAXTRrqpXW3AUuiJu',
              },
              {
                label: 'Public Drive link',
                to: 'https://drive.google.com/drive/folders/1zal5vN3f67Ql-Q8jiSYsp6Nf0xoJuqNI',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'General Inquiries',
                to: 'mailto:hi@shardeum.org',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/shardeum',
              },
            ],
          },
        ],
        logo: {
          alt: 'Shardeum Logo',
          src: 'img/shardeum_logo_light_square.png',
          href: 'https://github.com/shardeum',
          height: 100,
          width: 100
        },
        copyright: `Copyright © Shardeum ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false
      }
    }),
  plugins: ['docusaurus-plugin-sass']
};

module.exports = config;
