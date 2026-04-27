<script lang="ts">
  let { size = 16, link = true }: { size?: number; link?: boolean } = $props();

  const cursorWidth = $derived(Math.round(size * 0.42));
  const cursorHeight = $derived(Math.round(size * 0.9));
  const cursorOffset = $derived(Math.round(size * 0.12));
</script>

{#snippet inner()}
  <span
    class="inline-flex items-baseline whitespace-nowrap font-mono font-medium text-fg-1"
    style:font-size="{size}px"
    style:letter-spacing="-0.01em"
  >
    platte.dev<span
      class="inline-block bg-accent ml-[2px]"
      style:width="{cursorWidth}px"
      style:height="{cursorHeight}px"
      style:vertical-align="-{cursorOffset}px"
      style:animation="pdcur 1.1s steps(2,start) infinite"
    ></span>
  </span>
{/snippet}

{#if link}
  <a href="/" class="no-underline">{@render inner()}</a>
{:else}
  {@render inner()}
{/if}
