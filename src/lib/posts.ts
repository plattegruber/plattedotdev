import { getCollection, type CollectionEntry } from 'astro:content';

export type PostEntry = CollectionEntry<'posts'>;

export async function getAllPosts(): Promise<PostEntry[]> {
  const posts = await getCollection('posts');
  return posts.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
}

export function formatIsoDate(d: Date): string {
  // YYYY-MM-DD in UTC, stable across server/client.
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, '0');
  const day = String(d.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function formatLongDate(d: Date): string {
  return d.toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  });
}

const MONTHS_ABBR = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];

export function formatTerminalDate(d: Date): string {
  const month = MONTHS_ABBR[d.getUTCMonth()];
  const day = String(d.getUTCDate()).padStart(2, ' ');
  return `${month} ${day}`;
}

export function countWords(body: string | undefined): number {
  if (!body) return 0;
  // Strip frontmatter, mdx imports, JSX-ish tags, and code fences for a closer count.
  const stripped = body
    .replace(/^---[\s\S]*?---/m, '')
    .replace(/^import\s+.+from\s+['"][^'"]+['"];?$/gm, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`~\-]/g, ' ');
  return stripped.split(/\s+/).filter(Boolean).length;
}
