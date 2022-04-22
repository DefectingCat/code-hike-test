import remarkFrontmatter from 'remark-frontmatter';
import mdx from '@next/mdx';
import composePlugins from 'next-compose-plugins';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { remarkCodeHike } from '@code-hike/mdx';
import { createRequire } from 'module'; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const theme = require('shiki/themes/nord.json');

const composedConfig = composePlugins([
  mdx({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [
        remarkFrontmatter,
        remarkGfm,
        [remarkCodeHike, { theme }],
      ],
      rehypePlugins: [rehypeSlug],
      providerImportSource: '@mdx-js/react',
    },
  }),
  /** @type {import('next').NextConfig} */
  {
    reactStrictMode: true,
    // experimental: {
    //    reactMode: 'concurrent',
    // },
    experimental: {
      outputStandalone: true,
    },
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  },
]);

export default composedConfig;
