import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";
import rehypeCitation from 'rehype-citation';

const setPostLayout = () => {
  return function (_, file) {
    if (!file.data.astro.frontmatter.draft) {
      if (file.data.astro.frontmatter.categories) {
        file.data.astro.frontmatter.layout =
          file.data.astro.frontmatter.layout || "@layouts/PostLayout.astro";
      }
    }
  };
};

export default defineConfig({
  markdown: {
    remarkPlugins: [setPostLayout],
    rehypePlugins: [[rehypeCitation, {
      bibliography: []
    }
    ]
    ]
  },
  integrations: [
    mdx(), tailwind()],
  redirects: {
    '/': '/en/'
  },
  site: 'https://blog.urosdragojevic.com',
});