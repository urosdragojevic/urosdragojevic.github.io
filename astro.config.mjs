import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

import rehypeCitation from 'rehype-citation';
import tailwindcss from '@tailwindcss/vite';

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
    rehypePlugins: [[rehypeCitation, { bibliography: [] }]]
  },

  plugins: [tailwindcss()],
  integrations: [mdx()],

  redirects: {
    '/': '/en/'
  },

  site: 'https://blog.urosdragojevic.com',

  vite: {
    plugins: [tailwindcss()]
  }
});