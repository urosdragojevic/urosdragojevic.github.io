import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

const setPostLayout = () => {
  return function (_, file) {
    if (!file.data.astro.frontmatter.draft) {
      file.data.astro.frontmatter.layout =
        file.data.astro.frontmatter.layout || "@layouts/PostLayout.astro";
    }
  };
};

export default defineConfig({
  markdown: {
    remarkPlugins: [setPostLayout]
  },
  integrations: [mdx(), tailwind()],
  redirects: {
    '/': '/en/'
  },
});