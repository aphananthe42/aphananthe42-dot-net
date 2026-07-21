import { defineConfig, fontProviders } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import sitemap from "@astrojs/sitemap";
import rlc from 'remark-link-card'
import rehypeRaw from 'rehype-raw'
import rehypeExternalLinks from 'rehype-external-links'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: "https://aphananthe42.net",
  redirects: {
    "/en/": "/",
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    processor: unified({
      remarkPlugins: [
        [
          rlc,
          { shortenUrl: true },
        ],
      ],
      rehypePlugins: [
        rehypeRaw,
        [
          rehypeExternalLinks,
          { target: '_blank' },
        ],
      ],
    }),
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Roboto",
      cssVariable: "--font-roboto",
      weights: [400, 700, 900],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Noto Sans JP",
      cssVariable: "--font-notosansjp",
      weights: [400, 700, 900],
    },
  ],
});
