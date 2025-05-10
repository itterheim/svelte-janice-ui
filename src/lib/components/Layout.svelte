<script lang="ts">
    import { theme, type Theme } from "$lib/stores/ui.js";
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
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        box-sizing: border-box;

        /* background: var(--crust); */
        background: var(--base-dark);
    }
</style>
