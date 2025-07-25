<script lang="ts">
    import { type Component } from "svelte";
    import { showMenu } from "../stores/ui";

    let {
        Icon,
        label,
        href,
        active,
        onclick
    }: {
        Icon: Component;
        label: string;
        href?: string;
        active?: boolean;
        onclick?: () => void;
    } = $props();

    function clicked() {
        $showMenu = false;
        onclick?.();
    }
</script>

<a class="nav-group-link" {href} onclick={clicked} class:active>
    <div class="icon">
        <Icon size="20px" />
    </div>
    <div class="label">
        {label}
    </div>
</a>

<style>
    a {
        text-decoration: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        color: var(--text-dark);
        font-weight: 600;

        transition: margin-left 0.2s ease;
    }

    div.icon {
        width: 20px;
        height: 20px;
        padding: 6px;
        border-radius: 50%;
        margin: 0 4px;
    }

    a.active div.icon,
    a:hover div.icon {
        background-color: var(--secondary-dark);
        color: var(--base-dark);
    }

    div.label {
        display: none;
        align-items: center;
        padding: 0 8px;
        white-space: nowrap;
    }

    a.active div.label,
    a:hover div.label {
        color: var(--secondary-dark);
    }

    :global(nav.narrow) a:hover div.icon {
        margin-right: 0;
        border-radius: 16px 0 0 16px;
    }
    :global(nav.narrow) a:hover div.label {
        display: flex;
        padding-left: 24px;
        padding-right: 16px;
        height: 32px;
        border-radius: 0 16px 16px 0;

        color: var(--base-dark);
        background-color: var(--secondary-dark);
    }

    :global(nav.expanded) a {
        margin-left: 56px;
    }

    :global(nav.expanded) a::before {
        content: "";
        display: block;
        width: 4px;
        height: 4px;
        background-color: var(--text-dark);
        position: absolute;
        left: 18px;
        border-radius: 50%;
    }

    :global(nav.expanded) a:hover::before,
    :global(nav.expanded) a.active::before {
        background-color: var(--secondary-dark);
    }

    :global(nav.expanded) div.label {
        display: flex;
    }

    :global(nav.expanded) a.active div.label {
        font-weight: 700;
    }
</style>
