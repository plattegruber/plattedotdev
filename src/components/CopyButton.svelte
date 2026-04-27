<script lang="ts">
  let { text }: { text: string } = $props();

  let copied = $state(false);
  let timer: ReturnType<typeof setTimeout> | undefined;

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => { copied = false; }, 1200);
    } catch {
      // ignored — clipboard API unavailable
    }
  }
</script>

<button
  type="button"
  onclick={copy}
  class="rounded-[var(--radius-1)] border-0 bg-transparent px-1.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.04em] cursor-pointer"
  class:text-success={copied}
  class:text-fg-3={!copied}
>
  {copied ? 'copied' : 'copy'}
</button>
