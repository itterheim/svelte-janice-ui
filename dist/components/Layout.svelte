<script lang="ts">
    import { theme } from "../stores/ui.js";
    import { onMount } from "svelte";

    let {
        children
    }: {
        children: () => any;
    } = $props();

    onMount(() => {});
</script>

<div class="layout {$theme}">
    {@render children()}
</div>

<style>
    .layout {
        display: flex;
        flex-direction: row;
        height: 100dvh;
        width: 100vw;
        overflow: hidden;
        box-sizing: border-box;
        background: var(--base-dark);
    }

    @media (max-width: 800px) {
        :global(nav.visible + main) {
            filter: grayscale(1) brightness(0.8);
            overflow: hidden;
            pointer-events: none;
        }
    }
</style>
