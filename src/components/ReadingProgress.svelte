<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let pct = $state(0);

  function update() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    pct = max > 0 ? Math.min(1, window.scrollY / max) : 0;
  }

  onMount(() => {
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
  });

  onDestroy(() => {
    if (typeof window === 'undefined') return;
    window.removeEventListener('scroll', update);
    window.removeEventListener('resize', update);
  });
</script>

<div
  class="pointer-events-none fixed inset-x-0 top-0 z-20 h-0.5"
>
  <div
    class="h-full bg-accent opacity-85 transition-[width] duration-[80ms] ease-linear"
    style:width="{pct * 100}%"
  ></div>
</div>
