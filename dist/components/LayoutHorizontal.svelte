<script lang="ts">
    import { browser } from "$app/environment";

    let {
        header,
        left,
        right,
        showRight
    }: {
        header: () => any;
        left: () => any;
        right?: () => any;
        showRight?: boolean;
    } = $props();

    let innerWidth = $state(0);
</script>

<svelte:window bind:innerWidth />

<div class="janice-layout-horizontal">
    {@render header()}
    <div class="horizontal" class:visible={!showRight || browser}>
        {#if innerWidth >= 800 || !showRight}
            {@render left()}
        {/if}
        {@render right?.()}
    </div>
</div>

<style>
    div.janice-layout-horizontal {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    div.janice-layout-horizontal :global(header) {
        flex-shrink: 0;
    }

    div.horizontal {
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 8px;
        visibility: hidden;
        overflow: hidden;
        padding: 0 16px 16px 16px;
    }

    div.horizontal.visible {
        visibility: visible;
    }

    div.janice-layout-horizontal div.horizontal > :global(div.card) {
        flex-shrink: 0;
    }

    div.janice-layout-horizontal div.horizontal > :global(div.card:first-child) {
        flex: 1;
    }
</style>
