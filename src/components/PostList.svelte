<script lang="ts">
  interface Post {
    slug: string;
    title: string;
    blurb: string;
    date: string;
    readMin: number;
    tag: string;
  }

  let { posts }: { posts: Post[] } = $props();
</script>

<div class="mx-auto max-w-[var(--max-page)] px-6">
  {#each posts as p, i (p.slug)}
    <a
      href={'/writing/' + p.slug}
      class="group grid grid-cols-[130px_1fr] gap-7 items-baseline py-5 no-underline text-fg-1"
      class:border-b={i !== posts.length - 1}
      class:border-border-2={i !== posts.length - 1}
    >
      <div class="font-mono text-xs leading-[1.6] text-fg-3 pt-1.5">
        {p.date}<br />
        <span class="text-fg-4">{p.readMin} min · {p.tag}</span>
      </div>
      <div>
        <h3
          class="m-0 mb-1.5 font-serif font-normal text-[27px] leading-[1.18] tracking-[-0.012em] text-fg-1 group-hover:text-accent transition-colors"
          style="text-wrap: balance;"
        >
          {p.title}
        </h3>
        <p class="m-0 text-[15.5px] leading-[1.55] text-fg-2" style="max-width: 58ch;">
          {p.blurb}
        </p>
      </div>
    </a>
  {/each}
</div>
