import { defineConfig } from "vitepress";
import { head, sidebar, nav } from "./configs";

export default defineConfig({
  title: "MJJH-BLOG",
  description: "你好世界",
  head,
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    nav,
    sidebar,
    socialLinks: [{ icon: "github", link: "https://github.com/mjjh1717" }],
    footer: {
      message: "如有转载或 CV 的请标注本站原文地址 浙ICP备2022016698号-1",
      copyright: "Copyright © 2022-present mjjh",
    },

    lastUpdatedText: "上次更新",

    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
  },
});
