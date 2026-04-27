<script lang="ts">
  import { onMount } from 'svelte';

  let { since }: { since: string } = $props();

  let now = $state(Date.now());

  onMount(() => {
    const id = setInterval(() => { now = Date.now(); }, 60_000);
    return () => clearInterval(id);
  });

  const deployedAt = $derived(new Date(since).getTime());
  const ms = $derived(Math.max(0, now - deployedAt));
  const days = $derived(Math.floor(ms / 86_400_000));
  const hours = $derived(Math.floor((ms % 86_400_000) / 3_600_000));
  const minutes = $derived(Math.floor((ms % 3_600_000) / 60_000));
</script>

<span class="text-fg-4">
  ● <span class="text-success">up</span> {days}d {hours}h {minutes}m
</span>
