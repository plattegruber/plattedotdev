<script lang="ts">
  interface Props {
    href: string;
    title: string;
    blurb: string;
    date: string;
    readMin: number;
    tag: string;
  }
  let { href, title, blurb, date, readMin, tag }: Props = $props();
</script>

<a
  {href}
  class="group block no-underline text-fg-1 rounded-[var(--radius-4)] border border-border-1 hover:border-border-strong bg-bg-2 px-8 pt-7 pb-8 transition-colors"
>
  <div class="mb-3.5 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.1em] text-accent">
    <span class="inline-block w-1.5 h-1.5 rounded-full bg-accent"></span>
    Latest · {tag}
  </div>
  <h2
    class="m-0 mb-3 font-serif font-normal leading-[1.08] tracking-[-0.02em] text-fg-1"
    style="font-size: clamp(28px, 3.6vw, 38px); text-wrap: balance; max-width: 22ch;"
  >
    {title}
  </h2>
  <p class="m-0 mb-4 text-[16.5px] leading-[1.55] text-fg-2" style="max-width: 56ch; text-wrap: pretty;">
    {blurb}
  </p>
  <div class="font-mono text-xs text-fg-3">
    {date} · {readMin} min read
  </div>
</a>
