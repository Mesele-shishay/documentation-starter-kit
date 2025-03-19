import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Mpesa PHP SDK</span>,
  project: {
    link: "https://github.com/Mesele-shishay/PhpMpesaSDK",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/Mesele-shishay/PhpMpesaSDK",
  footer: {
    text: "Mpesa PHP SDK",
  },
  code: {
    copy: true,
    highlight: true,
  },
};

export default config;
