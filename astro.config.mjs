import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import rlc from 'remark-link-card'
import rehypeRaw from 'rehype-raw'
import rehypeExternalLinks from 'rehype-external-links'

export default defineConfig({
  site: "https://aphananthe42.net",
  integrations: [sitemap(), tailwind()],
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
});
