<script lang="ts">
  import { onMount } from 'svelte';

  let theme: 'light' | 'dark' = $state('light');

  onMount(() => {
    const initial = (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'light';
    theme = initial;
  });

  function toggle() {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('platte-theme', theme); } catch {}
  }
</script>

<button
  type="button"
  onclick={toggle}
  aria-label="Toggle theme"
  class="inline-flex items-center justify-center bg-transparent border-0 p-1.5 cursor-pointer text-fg-2 hover:text-fg-1 transition-colors"
>
  {#if theme === 'dark'}
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
    </svg>
  {:else}
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  {/if}
</button>
