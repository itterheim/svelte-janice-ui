<script lang="ts">
    import type { Component } from "svelte";

    let {
        submit,
        label,
        Icon,
        onclick,
        action,
        danger,
        small
    }: {
        submit?: boolean;
        label: string;
        Icon?: Component;
        onclick?: (e: Event) => void;
        action?: boolean;
        danger?: boolean;
        small?: boolean;
    } = $props();
</script>

<button type={submit ? "submit" : "button"} class:action class:danger class:small {onclick}>
    {#if Icon}
        <Icon />
    {/if}
    {label}
</button>

<style>
    button {
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        cursor: pointer;

        /* width: 40px; */
        height: 40px;
        border-radius: 4px;
        padding: 0 16px;
        font-size: var(--font-size);
        font-family: "Open Sans", sans-serif;
        font-weight: 600;

        display: flex;
        justify-content: center;
        align-items: center;

        color: inherit;

        transition: ease-in-out 0.2s background-color;
        border: 1px solid var(--border-color);
    }

    button.small {
        height: 28px;
        padding: 0 8px;
    }

    button:hover {
        background-color: #0001;
    }

    button.action {
        background-color: var(--primary);
        color: var(--base);
        transition: ease-in-out 0.2s filter;
        box-shadow: 1px 1px 3px 0px #0002;
        border: 1px solid transparent;
    }

    button.danger {
        background-color: var(--red);
        color: var(--base);
        transition: ease-in-out 0.2s filter;
        box-shadow: 1px 1px 3px 0px #0002;
        font-weight: 700;
        border: 1px solid transparent;
    }

    button.action:hover,
    button.danger:hover {
        filter: brightness(1.1);
    }

    button :global(svg) {
        margin-right: 16px;
    }

    button.small :global(svg) {
        margin-right: 8px;
    }
</style>
