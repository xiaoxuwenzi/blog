import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "随心",
  description: "随心的博客网站",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
