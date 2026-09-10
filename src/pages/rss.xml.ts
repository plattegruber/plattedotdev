import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getAllPosts } from '../lib/posts';

export const prerender = true;

export async function GET(context: APIContext) {
  const posts = await getAllPosts();
  return rss({
    title: 'platte.dev',
    description: "Platte's notes on engineering, AI, and adjacent things.",
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.blurb,
      pubDate: p.data.date,
      link: `/writing/${p.id}/`,
    })),
  });
}
