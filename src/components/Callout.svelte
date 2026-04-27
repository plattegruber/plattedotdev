<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    kind?: 'note' | 'warn';
    children?: Snippet;
  }

  let { kind = 'note', children }: Props = $props();

  const label = $derived(kind === 'warn' ? 'Heads up' : 'Note');
  const accentClass = $derived(kind === 'warn' ? 'border-l-danger' : 'border-l-accent');
  const labelClass = $derived(kind === 'warn' ? 'text-danger' : 'text-accent');
</script>

<aside class="my-7 rounded-r-[var(--radius-2)] border-l-2 {accentClass} bg-bg-2 py-4 pl-5 pr-4.5">
  <div class="mb-1.5 font-mono text-[11px] uppercase tracking-[0.08em] {labelClass}">
    {label}
  </div>
  <div class="text-[15.5px] leading-[1.6] text-fg-2">
    {@render children?.()}
  </div>
</aside>
