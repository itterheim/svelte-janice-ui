<script lang="ts">
    import { showMenu } from "$lib/stores/ui";
    import { ChevronRight } from "@lucide/svelte";
    import type { Component } from "svelte";

    let {
        Icon,
        label,
        href,
        active,
        chevron,
        expanded,
        onclick
    }: {
        Icon: Component;
        label: string;
        href?: string;
        active?: boolean;
        chevron?: boolean;
        expanded?: boolean;
        onclick?: () => void;
    } = $props();

    function clicked() {
        if (!chevron) {
            $showMenu = false;
        }
        onclick?.();
    }
</script>

<a class="nav-link" {href} onclick={clicked} class:active>
    <div class="icon">
        <Icon />
    </div>
    <div class="label">
        {label}
    </div>
    {#if chevron}
        <div class="chevron" class:expanded>
            <ChevronRight size={20}></ChevronRight>
        </div>
    {/if}
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
    }

    a div.icon {
        width: 24px;
        height: 24px;
        padding: 8px;
        border-radius: 50%;
    }

    a:hover div.icon,
    a.active div.icon {
        background-color: var(--primary-dark);
        color: var(--base-dark);
    }

    a div.label {
        display: none;
        align-items: center;
        padding: 0 16px;
        white-space: nowrap;
    }

    a div.chevron {
        display: none;
        width: 20px;
        height: 20px;
        padding: 10px;
        transform: rotate(180deg);
        transition: transform 0.2s ease;
    }

    a div.chevron.expanded {
        transform: rotate(90deg);
    }

    :global(nav.narrow) a:hover div.icon {
        border-radius: 50% 0 0 50%;
    }

    :global(nav.narrow) a:hover div.label {
        display: flex;
        align-self: stretch;
        border-radius: 0 20px 20px 0;
        background-color: var(--primary-dark);
        color: var(--base-dark);
    }

    :global(nav.expanded) a div.label {
        display: flex;
        flex: 1;
        color: var(--text-dark);
        padding-left: 24px;
    }

    :global(nav.expanded) a:hover div.label,
    :global(nav.expanded) a:hover div.chevron,
    :global(nav.expanded) a.active div.label,
    :global(nav.expanded) a.active div.chevron {
        color: var(--primary-dark);
    }

    :global(nav.expanded) a div.chevron {
        display: block;
    }

    :global(nav.expanded) a.active div.label {
        font-weight: 700;
    }
</style>
