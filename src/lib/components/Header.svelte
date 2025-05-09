<script lang="ts">
    import { showMenu } from "$lib/stores/ui.js";
    import IconButton from "./IconButton.svelte";

    let {
        title,
        children
    }: {
        title: string;
        children?: () => any;
    } = $props();

    function toggleSidebar() {
        $showMenu = !$showMenu;
    }
</script>

<header>
    <div class="left">
        <IconButton icon="menu" onclick={toggleSidebar}></IconButton>
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
        margin-bottom: 10px;
    }

    div.left {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    div.left :global(> :first-child) {
        display: none;
        /* margin-right: 10px; */
    }

    div.left div.title {
        font-size: 20px;
        font-weight: 600;
        padding-left: 10px;
    }

    div.right {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }

    @media (max-width: 800px) {
        div.left :global(> :first-child) {
            display: block;
        }
    }
</style>
