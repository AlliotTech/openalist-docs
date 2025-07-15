import { navbar } from "vuepress-theme-hope";

export const en = navbar([
  // "/",
  { text: "Guide", icon: "iconfont icon-creative", link: "/guide/" },
  { text: "Config", icon: "iconfont icon-config", link: "/config/" },
  { text: "FAQ", icon: "iconfont icon-question", link: "/faq/" },
  // { text: "Tool", icon: "tool", link: "/tool/" },
  {
    text: "Community",
    icon: "iconfont icon-community",
    children: [
      {
        text: "Discussion",
        link: "https://github.com/AlliotTech/openalist/discussions",
      }
    ],
  },
  {
    text: "Github",
    icon: "iconfont icon-github",
    link: "https://github.com/AlliotTech/openalist",
  },
]);
