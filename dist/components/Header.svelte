<script lang="ts">
    import { showMenu } from "../stores/ui.js";
    import { ArrowLeft, Menu } from "@lucide/svelte";
    import IconButton from "./IconButton.svelte";

    let {
        title,
        back,
        children
    }: {
        title: string;
        back?: boolean;
        children?: () => any;
    } = $props();

    function toggleSidebar() {
        $showMenu = !$showMenu;
    }

    function goBack() {
        window.history.back();
    }
</script>

<header>
    <div class="left" class:default={!back}>
        {#if back}
            <IconButton Icon={ArrowLeft} onclick={goBack}></IconButton>
        {:else}
            <IconButton Icon={Menu} onclick={toggleSidebar}></IconButton>
        {/if}
        <div class="title">
            {title}
        </div>
    </div>
    <div class="right">
        {@render children?.()}
    </div>
</header>

<style>
    header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 64px;
        /* margin-bottom: 10px; */
    }

    div.left {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    div.left.default :global(> :first-child) {
        display: none;
        /* margin-right: 10px; */
    }

    div.left div.title {
        font-size: var(--font-size-large);
        font-weight: 600;
        padding-left: 8px;
    }

    div.right {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4px;
    }

    @media (max-width: 800px) {
        /* header {
            height: 56px;
        } */
        div.left.default :global(> :first-child) {
            display: flex;
        }
    }
</style>
