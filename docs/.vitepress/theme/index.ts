// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import PreviewBox from '../components/preview-box.vue';
import './style.css';
import '@pure-ui/themes/lib/default/index.css';
import '@pure-ui/components';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.component('PreviewBox', PreviewBox);
  },
} satisfies Theme;
