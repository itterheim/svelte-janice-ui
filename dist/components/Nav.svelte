<script lang="ts">
    // import { page } from "$app/state";
    import { theme, showMenu } from "../stores/ui.js";
    import NavLink from "./NavLink.svelte";

    let {
        expandable,
        changetheme,
        top,
        middle,
        bottom
    }: {
        expandable?: boolean;
        changetheme?: boolean;
        top?: () => any;
        middle?: () => any;
        bottom?: () => any;
    } = $props();

    function changeTheme() {
        theme.set($theme == "latte" ? "macchiato" : "latte");
    }

    let expanded = $state(false);
    function expand() {
        expanded = !expanded;
    }

    // let navPage = $derived.by(() => page.url.pathname.split("/")[1]);
</script>

<nav class:visible={$showMenu} class:hidden={!$showMenu} class:expanded>
    <div class="top desktop">
        {#if expandable}
            <div class="row">
                {#if expanded}
                    {@render top?.()}
                {/if}
                {#if expanded}
                    <NavLink icon="chevron_left" onclick={expand}></NavLink>
                {:else}
                    <NavLink icon="chevron_right" onclick={expand}></NavLink>
                {/if}
                <!-- <NavLink icon={expanded ? "chevron_left" : "chevron_right"} onclick={expand}></NavLink> -->
            </div>
        {:else}
            {@render top?.()}
        {/if}
    </div>

    <div class="links">
        {@render middle?.()}
    </div>

    <div class="bottom">
        {#if changetheme}
            <NavLink
                href="javascript:;"
                onclick={changeTheme}
                label="Theme"
                icon={$theme == "latte" ? "dark_mode" : "light_mode"}
            ></NavLink>
        {/if}
        {@render bottom?.()}
    </div>
</nav>

<style>
    nav {
        display: flex;
        flex-direction: column;
        background: var(--base-dark);
        color: var(--text-light);
    }

    nav.expanded {
        width: 200px;
        min-width: 200px;
    }

    /* nav div.top :global(> :first-child) {
        align-self: flex-end;
    } */
    nav div.top div.row :global(> :last-child) {
        align-self: flex-end;
    }

    nav div.top div.row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    nav div.top,
    nav div.bottom {
        display: flex;
        padding: 10px;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
    }

    nav div.links {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 10px;
        gap: 10px;
    }

    nav.expanded div.links :global(a .label),
    nav.expanded div.bottom :global(a .label) {
        width: 100%;
        box-sizing: border-box;
        visibility: visible;
        opacity: 1;
    }

    @media (max-width: 800px) {
        nav.hidden {
            display: none;
            visibility: hidden;
        }
    }

    /* nav div.links {
        justify-content: center;
    } */
</style>
