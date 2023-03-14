// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from "vitepress/theme";
import "./style.css";
import mjLayout from "./mjLayout.vue";

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "aside-outline-before": () => h(mjLayout),
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
};
