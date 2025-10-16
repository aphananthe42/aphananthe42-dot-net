import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import rlc from 'remark-link-card'
import rehypeRaw from 'rehype-raw'
import rehypeExternalLinks from 'rehype-external-links'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: "https://aphananthe42.net",
  integrations: [sitemap()],
  markdown: {
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
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
