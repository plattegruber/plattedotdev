<script lang="ts">
  import { onMount } from 'svelte';

  const TIPS = [
    { topic: 'postgres', text: 'A functional index must match the query expression character-for-character, including casing.' },
    { topic: 'git',      text: 'git reflog is your safety net. Anything you committed in the last 90 days is recoverable, even after a hard reset.' },
    { topic: 'shell',    text: '!$ in bash expands to the last argument of the previous command. ls /some/long/path → cd !$.' },
    { topic: 'js',       text: 'structuredClone() does a real deep clone. Stop reaching for JSON.parse(JSON.stringify(x)).' },
    { topic: 'go',       text: 'In Go 1.22+, loop variables are scoped per-iteration. The classic for-loop closure bug is dead.' },
    { topic: 'ai',       text: 'When AI rewrites a function, ask: did the contract change? The body can move; the signature should not.' },
    { topic: 'css',      text: 'text-wrap: balance on headlines, text-wrap: pretty on paragraphs. Almost no cost, big readability win.' },
    { topic: 'sql',      text: "SELECT * FROM t WHERE col = ANY($1::int[]) lets you pass an array as a single parameter. Cleaner than IN ($1, $2, $3, ...)." },
    { topic: 'review',   text: 'Read the diff out loud, once. You will catch the wrong variable name that you skimmed past.' },
    { topic: 'tooling',  text: 'rg --files | fzf gets you to any file in a repo in under a second. Worth the muscle memory.' },
    { topic: 'http',     text: 'A 422 means "I understood your request and refuse it on semantic grounds." A 400 means "I could not parse this." They are not interchangeable.' },
    { topic: 'docker',   text: 'COPY package.json before COPY .  — Docker layer caching pays for the extra line a thousand times over.' },
    { topic: 'time',     text: 'Store timestamps in UTC. Always. Convert at the edges. The bug you save will be your own at 3am in a different timezone.' },
    { topic: 'naming',   text: "If you can't name the function, you don't understand the function. Sit with the name before you write the body." },
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
