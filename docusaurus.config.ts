import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'NET Partners User Guide',
  tagline: 'Hướng dẫn sử dụng hệ thống Nhà Cộng',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://xonevn-ai.github.io', // Your GitHub Pages URL
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/nhacong-final/', // Your repository name

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xonevn-ai', // Your GitHub org/user name.
  projectName: 'nhacong-final', // Your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/xonevn-ai/user-guide/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/xonevn-ai/user-guide/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'NET Partners',
      logo: {
        alt: 'NET Partners Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Cẩm nang sử dụng',
        },
        { to: '/blog', label: 'Cộng đồng', position: 'left' },
        {
          href: 'https://nhacong.com.vn',
          label: 'Website',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Dành cho đối tác',
          items: [
            {
              label: 'Chủ nhà (Host)',
              to: '/docs/host/overview/buildings',
            },
            {
              label: 'Cộng tác viên (Agent)',
              to: '/docs/agent/dashboard/overview',
            },
          ],
        },
        {
          title: 'Dành cho cư dân',
          items: [
            {
              label: 'Trải nghiệm cư dân',
              to: '/docs/customer/dashboard/overview',
            },
            {
              label: 'Ví định danh',
              to: '/docs/customer/profile/wallet',
            },
          ],
        },
        {
          title: 'Khác',
          items: [
            {
              label: 'Tìm phòng & Dịch vụ',
              to: '/docs/public/search-360',
            },
            {
              label: 'Website Chính thức',
              href: 'https://nhacong.com.vn',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NET Partners. Nền tảng quản lý bất động sản chuyên nghiệp.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

};

export default config;
