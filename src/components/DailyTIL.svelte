<script lang="ts">
  import { onMount } from 'svelte';

  const TIPS = [
    { topic: 'otel', text: 'Baggage propagates across service boundaries via the W3C Baggage header; span attributes do not. Reach for baggage only when a downstream span needs to read the value — everything else belongs in SetAttribute.' },
  ];

  function dayOfYear(d: Date) {
    const start = new Date(d.getFullYear(), 0, 0);
    return Math.floor((d.getTime() - start.getTime()) / 86_400_000);
  }

  // Server-render with the build-time tip; client picks the user's actual day on mount.
  let tipIndex = $state(dayOfYear(new Date()) % TIPS.length);
  let dateLabel = $state(new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));

  onMount(() => {
    const today = new Date();
    tipIndex = dayOfYear(today) % TIPS.length;
    dateLabel = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  });

  const tip = $derived(TIPS[tipIndex]);
</script>

<div
  class="grid grid-cols-[auto_1fr] gap-x-[18px] gap-y-3.5 items-start rounded-[var(--radius-3)] border border-border-1 border-l-2 border-l-accent bg-bg-2 p-5"
>
  <div class="font-mono text-[11px] uppercase tracking-[0.1em] text-accent whitespace-nowrap pt-0.5">
    TIL · {dateLabel}
  </div>
  <div class="text-[15px] leading-[1.55] text-fg-1" style="text-wrap: pretty;">
    {tip.text}
    <span class="ml-2 font-mono text-[11px] text-fg-3">#{tip.topic}</span>
  </div>
</div>
