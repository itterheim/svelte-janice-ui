<script lang="ts">
    import { theme } from "../stores/ui";

    let {
        children
    }: {
        children: () => any;
    } = $props();
</script>

<div class="layout {$theme}">
    {@render children()}
</div>

<style>
    div.layout {
        position: relative;
        display: flex;
        flex-direction: row;
        width: 100vw;
        height: 100dvh;
        overflow: hidden;

        background-color: var(--base-dark);
        color: var(--text-dark);
    }
</style>
