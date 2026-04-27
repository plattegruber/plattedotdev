<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  interface Props {
    height?: number;
    /** Terminal-formatted recent post lines, e.g. "apr 22  ai-wrote....md" */
    recentLines: string[];
    totalWords: number;
    fileCount: number;
  }

  let { height = 280, recentLines, totalWords, fileCount }: Props = $props();

  type Line = { kind: 'p' | 'o'; text: string };

  const script: Line[] = $derived([
    { kind: 'p', text: '$ cd ~/writing' },
    { kind: 'p', text: '$ ls -lt | head -' + (recentLines.length + 1) },
    ...recentLines.map((t): Line => ({ kind: 'o', text: t })),
    { kind: 'p', text: '$ wc -w *.md' },
    { kind: 'o', text: `${totalWords} total` },
    { kind: 'p', text: '$ ls *.md | wc -l' },
    { kind: 'o', text: String(fileCount) },
    { kind: 'p', text: '$ _' },
  ]);

  let step = $state(0);
  let typed = $state('');
  let timer: ReturnType<typeof setTimeout> | undefined;

  function tick() {
    if (step >= script.length) {
      timer = setTimeout(() => { step = 0; typed = ''; tick(); }, 3500);
      return;
    }
    const line = script[step];
    if (line.kind === 'p') {
      if (typed.length < line.text.length) {
        timer = setTimeout(() => {
          typed = line.text.slice(0, typed.length + 1);
          tick();
        }, 35 + Math.random() * 30);
      } else {
        timer = setTimeout(() => { step += 1; typed = ''; tick(); }, 280);
      }
    } else {
      timer = setTimeout(() => { step += 1; typed = ''; tick(); }, 180);
    }
  }

  onMount(() => { tick(); });
  onDestroy(() => { if (timer) clearTimeout(timer); });

  // Render every line that has appeared so far in a single each block, so the
  // typing line and the just-completed line are the *same* DOM node — Svelte
  // mutates in place rather than swapping nodes (which caused a 1px jump).
  const renderCount = $derived(Math.min(step + 1, script.length));
</script>

<div class="mx-auto max-w-[var(--max-page)] px-6 pt-6">
  <div
    class="flex flex-col overflow-hidden rounded-[var(--radius-3)] border border-border-1 bg-bg-2 font-mono text-[13px] leading-[1.7]"
    style:min-height="{height}px"
  >
    <div class="flex justify-between border-b border-border-1 bg-bg-3 px-3.5 py-2 text-[11px] tracking-[0.04em] text-fg-3">
      <span>~/writing — zsh</span>
      <span class="flex gap-1.5">
        <span class="inline-block w-[9px] h-[9px] rounded-full" style="background: oklch(60% 0.15 30);"></span>
        <span class="inline-block w-[9px] h-[9px] rounded-full" style="background: oklch(72% 0.14 80);"></span>
        <span class="inline-block w-[9px] h-[9px] rounded-full" style="background: oklch(60% 0.13 145);"></span>
      </span>
    </div>
    <div class="flex-1 overflow-hidden whitespace-pre px-4 py-3.5">
      {#each script.slice(0, renderCount) as l, i (i)}
        {@const active = i === step && l.kind === 'p'}
        {#if l.kind === 'p'}
          <div class="text-fg-1">{active ? typed : l.text}{#if active}<span
              class="inline-block bg-accent ml-px"
              style="width: 7px; height: 13px; vertical-align: baseline; transform: translateY(2px); animation: pdcur 1.1s steps(2,start) infinite;"
            ></span>{/if}</div>
        {:else}
          <div class="text-fg-3">{l.text}</div>
        {/if}
      {/each}
    </div>
  </div>
</div>
