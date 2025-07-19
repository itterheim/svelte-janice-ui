<script lang="ts">
    import NavLink from "./NavLink.svelte";

    let {
        icon,
        label,
        active,
        children
    }: {
        icon: string;
        label: string;
        active?: boolean;
        children: () => any;
    } = $props();

    let visible = $state(active);
</script>

<div class="nav-group">
    <NavLink {icon} {label} {active} onclick={() => (visible = !visible)}></NavLink>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="links" class:visible onclick={() => (visible = true)}>
        {@render children()}
    </div>
</div>

<style>
    div.nav-group {
        display: flex;
        flex-direction: column;
        gap: 10px;
        border-radius: 22px;
        background-color: var(--crust-dark);
    }
    div.links {
        display: none;
    }
    div.links.visible {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    div.links :global(a div.icon),
    div.links :global(a div.label) {
        color: var(--subtext0-dark);
    }
    div.links :global(a.active div.icon),
    div.links :global(a:hover div.icon),
    div.links :global(a.active div.label),
    div.links :global(a:hover div.label) {
        color: var(--base);
    }

    div.links :global(a div.icon span) {
        transition: none;
    }

    div.links :global(a:hover div.icon),
    div.links :global(a:hover div.label),
    div.links :global(a.active div.icon) {
        background-color: var(--overlay2);
    }
</style>
