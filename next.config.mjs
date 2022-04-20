import remarkFrontmatter from 'remark-frontmatter';
import mdx from '@next/mdx';
import composePlugins from 'next-compose-plugins';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { remarkCodeHike } from '@code-hike/mdx';

const composedConfig = composePlugins([
  mdx({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [remarkFrontmatter, remarkGfm, [remarkCodeHike]],
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
