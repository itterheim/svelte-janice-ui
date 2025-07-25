<script lang="ts">
    import { type Component } from "svelte";
    import NavLink from "./NavLink.svelte";

    let {
        Icon,
        label,
        active,
        children
    }: {
        Icon: Component;
        label: string;
        active?: boolean;
        children: () => any;
    } = $props();

    let expanded = $state(active);
</script>

<div class="nav-group" class:expanded>
    <NavLink {Icon} {label} {active} onclick={() => (expanded = !expanded)} chevron {expanded}
    ></NavLink>
    <div class="links">
        {@render children()}
    </div>
</div>

<style>
    div.nav-group {
        position: relative;
        border-radius: 0;
        transition:
            background-color 0.2s ease,
            border-radius 0.2s ease;
    }
    div.links {
        display: none;
        flex-direction: column;
        gap: 4px;
        padding-top: 4px;
    }

    div.expanded div.links {
        display: flex;
    }

    div.nav-group :global(a.nav-group-link:last-child) {
        margin-bottom: 4px;
    }

    div.nav-group::before {
        content: "";
        position: absolute;
        display: block;
        width: 40px;
        height: 100%;
        background-color: var(--crust-dark);
        border-radius: 20px;
        z-index: -1;
        opacity: 1;
        transition: opacity 0.2s ease;
    }

    :global(nav.narrow) div.nav-group.expanded::before {
        opacity: 1;
    }
</style>
