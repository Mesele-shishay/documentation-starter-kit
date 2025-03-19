// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  theme: {
    code: {
      copy: true, // Enable copy button globally
    },
  },
};

import { createRequire } from "module";
const require = createRequire(import.meta.url);

import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra(nextConfig);
