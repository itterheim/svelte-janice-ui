<script lang="ts">
    import { showMenu } from "../stores/ui.js";
    import Icon from "./Icon.svelte";

    let {
        href,
        icon,
        label,
        active = false,
        gap = false,
        onclick
    }: {
        href?: string;
        icon: string;
        label?: string;
        active?: boolean;
        gap?: boolean;
        onclick?: () => void;
    } = $props();
</script>

<a {href} class:active class:gap onclick={() => (onclick ? onclick() : showMenu.set(false))}>
    {#if label}
        <div class="label">{label}</div>
    {/if}
    <div class="icon">
        <Icon {icon} />
    </div>
</a>

<style>
    a {
        position: relative;
        display: block;
        text-decoration: none;
        color: var(--text-dark);
        cursor: pointer;
    }

    a.gap {
        margin-top: 40px;
    }

    a .icon {
        position: relative;
        color: var(--text-dark);
        font-size: 28px;
        padding: 10px;
        border-radius: 50%;
        display: block;
        width: 24px;
        height: 24px;

        transition:
            background-color 0.3s,
            color 0.3s;
    }

    a:hover,
    a:active {
        z-index: 9999;
    }

    a:hover .icon,
    a.active .icon {
        background-color: var(--primary);
        color: var(--base);
    }

    a div.label {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        color: var(--text-dark);
        padding: 0 20px 0 64px;
        border-radius: 50px;
        font-size: var(--font-size-larger);
        font-weight: 600;
        display: flex;
        align-items: center;
        visibility: hidden;
        opacity: 0;
    }

    a:hover div.label,
    a:active div.label {
        visibility: visible;
        opacity: 1;
        background-color: var(--primary);
        color: var(--base);
        transition:
            opacity 0.3s,
            visibility 0.3s;
    }
</style>
