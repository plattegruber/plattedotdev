<script lang="ts">
  interface Post {
    slug: string;
    title: string;
    date: string;
  }

  let { posts, initialDate }: { posts: Post[]; initialDate: string } = $props();

  function shortSha(slug: string): string {
    let h = 0;
    for (let i = 0; i < slug.length; i++) {
      h = ((h << 5) - h + slug.charCodeAt(i)) | 0;
    }
    return Math.abs(h).toString(16).padStart(7, '0').slice(0, 7);
  }
</script>

<div class="mx-auto max-w-[var(--max-page)] px-6 font-mono text-[13px] leading-[1.7]">
  <div class="mb-3 text-[11px] uppercase tracking-[0.1em] text-fg-3">
    $ git log --graph --oneline writing/
  </div>

  {#each posts as p, i (p.slug)}
    <a
      href={'/writing/' + p.slug}
      class="grid grid-cols-[18px_70px_1fr_auto] gap-3.5 items-baseline py-1 no-underline text-fg-1 hover:bg-bg-3 transition-colors"
    >
      <span class="text-accent">*</span>
      <span class="text-syntax-fn">{shortSha(p.slug)}</span>
      <span class="font-sans text-[15px] text-fg-1">
        {#if i === 0}
          <span class="mr-2 align-middle inline-block rounded-[3px] bg-accent-bg px-1.5 py-px font-mono text-[10px] text-accent">HEAD</span>
        {/if}
        {p.title}
      </span>
      <span class="text-[11px] text-fg-4">{p.date}</span>
    </a>
  {/each}

  <div class="mt-2 text-fg-4">
    | <span class="text-fg-3">(initial commit, {initialDate})</span>
  </div>
</div>
