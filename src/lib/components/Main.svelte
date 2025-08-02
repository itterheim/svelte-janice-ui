<script lang="ts">
    import { showMenu } from "../stores/ui";

    let {
        children
    }: {
        children: () => any;
    } = $props();
</script>

<main>
    {@render children()}

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="overlay" onclick={() => ($showMenu = false)} class:visible={$showMenu}></div>
</main>

<style>
    /* main section */
    main {
        position: relative;
        flex: 1;
        border-radius: 16px 0 0 16px;
        padding: 0 16px 16px 16px;
        overflow: auto;
        transition: border-radius 0.2s ease;

        background-color: var(--crust);
        color: var(--text);
    }

    main div.overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #0000;
        transition:
            background-color 0.2s ease-in,
            backdrop-filter 0.2s ease-in,
            visibility 0.2s linear;
        visibility: hidden;
    }

    @media (max-width: 800px) {
        main {
            min-width: 100vw;
            box-sizing: border-box;
            padding: 0 4px 4px 4px;
        }

        main div.overlay.visible {
            background-color: #0002;
            visibility: visible;
            backdrop-filter: blur(1px);
        }

        :global(nav.hidden) + main {
            border-radius: 0;
        }
    }
</style>
