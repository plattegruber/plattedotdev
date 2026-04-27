<script lang="ts">
  let { items }: { items: string[] } = $props();
</script>

<ol class="list-none p-0 m-0 font-mono text-[13px] leading-[1.6] text-fg-3">
  {#each items as item, i (i)}
    <li id="fn-{i + 1}" class="flex gap-2.5" class:mt-2={i !== 0}>
      <span class="flex-none text-fg-4">[{i + 1}]</span>
      <span class="font-sans text-[14.5px] text-fg-2">{item}</span>
    </li>
  {/each}
</ol>
