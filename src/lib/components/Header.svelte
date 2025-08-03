<script lang="ts">
    import { showMenu } from "$lib/stores/ui.js";
    import { ArrowLeft, Menu } from "@lucide/svelte";
    import IconButton from "./IconButton.svelte";
    import type { Component } from "svelte";

    let {
        Icon,
        title,
        back,
        children
    }: {
        Icon?: Component;
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
        {#if Icon}
            <div class="icon">
                <Icon></Icon>
            </div>
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
        padding: 0 16px;
    }

    div.left {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
    }

    div.left.default :global(> button:first-child) {
        display: none;
        /* margin-right: 10px; */
    }

    div.left div.icon {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div.left div.title {
        font-size: var(--font-size-large);
        font-weight: 600;
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
        div.left.default :global(> button:first-child) {
            display: flex;
        }

        div.left div.icon {
            display: none;
        }
    }
</style>
