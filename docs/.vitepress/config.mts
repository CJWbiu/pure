import { defineConfig } from 'vitepress';
import fs from 'fs';
import path from 'path';
import postcssLit from 'rollup-plugin-postcss-lit';

const COMPONENT_SIDE_ITEMS = (() => {
  return fs
    .readdirSync(path.resolve(__dirname, '../components'))
    .filter(fileName => fileName !== 'index.md')
    .map(fileName => {
      return {
        text: fileName.replace(/\b(\w)(\w*)(\.md)$/, ($0, $1, $2) => {
          return $1.toLocaleUpperCase() + $2;
        }),
        link: `/components/${fileName.slice(0, -3)}`,
      };
    });
})();

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Pure UI',
  description: '一个基于Web Component的UI组件库',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/index' },
    ],

    sidebar: {
      '/components/': [
        {
          text: '组件',
          items: COMPONENT_SIDE_ITEMS,
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => tag.startsWith('pu-'),
      },
    },
  },
  vite: {
    plugins: [postcssLit()],
  },
});
