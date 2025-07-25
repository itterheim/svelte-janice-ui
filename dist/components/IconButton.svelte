<script lang="ts">
    import type { Component } from "svelte";

    let {
        Icon,
        action,
        danger,
        small,
        grey,
        title,
        onclick
    }: {
        Icon: Component;
        action?: boolean;
        danger?: boolean;
        small?: boolean;
        grey?: boolean;
        title?: string;
        onclick?: () => void;
    } = $props();
</script>

<button {title} {onclick} class:grey class:action class:danger class:small>
    {#if small}
        <Icon size={20}></Icon>
    {:else}
        <Icon></Icon>
    {/if}
</button>

<style>
    button {
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        cursor: pointer;

        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        color: inherit;

        transition: ease-in-out 0.2s background-color;
    }

    button.small {
        width: 32px;
        height: 32px;
    }

    button:hover {
        background-color: #0001;
    }

    button.grey {
        background-color: var(--mantle);
    }

    button.action {
        background-color: var(--primary);
        color: var(--base);
        transition: ease-in-out 0.2s filter;
        box-shadow: 1px 1px 3px 0px #0002;
        border: none;
    }

    button.danger {
        background-color: var(--red);
        color: var(--base);
        transition: ease-in-out 0.2s filter;
        box-shadow: 1px 1px 3px 0px #0002;
        border: none;
    }

    button.action:hover,
    button.danger:hover {
        filter: brightness(1.1);
    }
</style>
