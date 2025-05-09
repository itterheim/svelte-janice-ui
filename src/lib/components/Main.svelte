<script lang="ts">
    import { showMenu } from "$lib/stores/ui.js";

    let {
        children
    }: {
        children: () => any;
    } = $props();
</script>

<main class:rounded={$showMenu}>
    {@render children()}
</main>

<style>
    main {
        flex: 1;
        background: var(--mantle);
        border-radius: 20px 0 0 20px;

        flex: 1;
        color: var(--text);
        overflow: auto;
        box-shadow: var(--shadow);
        padding: 0 20px;
    }

    @media (max-width: 800px) {
        main {
            border-radius: 0;
        }

        main.rounded {
            border-radius: 20px 0 0 20px;
        }
    }
</style>
