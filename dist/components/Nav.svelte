<script lang="ts">
    import { ChevronRight } from "@lucide/svelte";
    import { showMenu } from "../stores/ui";
    import type { Component } from "svelte";
    // import { browser } from "$app/environment";

    let {
        expanded,
        expandable,
        expandedWidth = 240,
        Icon,
        title,
        middle,
        bottom
    }: {
        expanded?: boolean;
        expandable?: boolean;
        expandedWidth?: number;
        Icon: Component;
        title: string;
        middle: () => any;
        bottom?: () => any;
    } = $props();

    // if (browser && window.localStorage.getItem("janice.layout.expanded")) {
    //     expanded = window.localStorage.getItem("janice.layout.expanded") === "true";
    // }

    function toggleExpanded() {
        expanded = !expanded;
        // if (browser) {
        //     window.localStorage.setItem("janice.layout.expanded", expanded.toString());
        // }
    }
</script>

<nav
    class:expanded
    class:narrow={!expanded}
    class:expandable
    class:visible={$showMenu}
    class:hidden={!$showMenu}
    style={expanded ? `width:${expandedWidth}px;min-width:${expandedWidth}px` : ""}
>
    <div class="column"></div>
    <div class="content">
        <div class="top">
            {#if expanded || !expandable}
                <div class="logo">
                    <Icon></Icon>
                </div>

                <div class="name">{title}</div>
            {/if}

            {#if expandable}
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div class="expand" onclick={toggleExpanded}>
                    <ChevronRight></ChevronRight>
                </div>
            {/if}
        </div>
        <div class="links">
            {@render middle()}
        </div>
        <div class="bottom">
            {@render bottom?.()}
        </div>
    </div>
</nav>

<style>
    nav {
        position: relative;
        min-width: 56px;
        width: 56px;
        z-index: 1;

        transition:
            width 0.2s ease,
            min-width 0.2s ease;
    }

    nav div.column {
        position: absolute;
        width: 56px;
        height: 100%;
        background-color: var(--mantle-dark);
        opacity: 0;
        left: 0;
        transition:
            opacity 0.2s ease,
            left 0.2s ease;
    }

    nav div.content {
        transition: left 0.2s ease;
        position: relative;
        left: 0;
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 0 8px 8px 8px;
        width: fit-content;
        align-items: flex-end;
        height: 100%;
        box-sizing: border-box;
        overflow: auto;
        direction: rtl;
    }

    nav div.content > div {
        width: 100%;
        direction: ltr;
    }

    /* top of the navbar */

    nav div.content div.top {
        display: flex;
        justify-content: flex-end;
        width: 40px;
        margin-bottom: 16px;
    }

    nav div.content div.top div.logo {
        display: block;
        width: 24px;
        height: 24px;
        padding: 8px;
        cursor: pointer;
        border-radius: 50%;
        color: var(--primary-dark);
    }

    nav div.top {
        height: 64px;
        align-items: center;
    }

    nav div.top div.name {
        display: flex;
        align-items: center;
        flex: 1;
        padding: 0 8px 0 24px;
        font-weight: 600;
        font-size: var(--font-size-large);
    }

    nav div.top div.expand {
        width: 24px;
        height: 24px;
        padding: 8px;
        transition: transform 0.2s ease;
        cursor: pointer;
        border-radius: 50%;
    }

    nav div.top div.expand:hover {
        background-color: var(--crust-dark);
    }

    /* the middle part of the navigation, all the links */
    nav div.links {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 4px;
    }

    /* the bottom part, for user and setting for example */
    nav div.bottom {
        margin-top: 16px;
        gap: 4px;
        display: flex;
        flex-direction: column;
    }

    /* expanded navigation */
    nav.expanded {
        overflow-x: hidden;
    }

    nav.expanded div.column {
        opacity: 1;
    }

    nav.expanded div.content {
        width: 100%;
    }

    nav.expanded div.content div.top {
        width: 100%;
    }

    nav.expanded div.expand {
        transform: rotate(180deg);
    }

    @media (max-width: 800px) {
        nav.hidden {
            max-width: 0 !important;
            min-width: 0 !important;
            width: 0 !important;
            overflow: hidden;
        }

        nav.hidden div.column,
        nav.hidden div.content {
            left: -56px;
        }
    }
</style>
