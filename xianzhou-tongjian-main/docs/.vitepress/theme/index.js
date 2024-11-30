import DefaultTheme from "vitepress/theme";
import "element-plus/dist/index.css";
import './color.css'
import { h } from 'vue'
import elementplus from "element-plus"
import loading from '../../../components/interface/loading.vue'
import not_found from '../../../components/interface/not_found.vue'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
      app.use(elementplus);
  },
  Layout: not_found
};