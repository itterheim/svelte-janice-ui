<script lang="ts">
    import Icon from "./Icon.svelte";

    let {
        icon,
        action,
        danger,
        small,
        onclick
    }: {
        icon: string;
        action?: boolean;
        danger?: boolean;
        small?: boolean;
        onclick?: () => void;
    } = $props();
</script>

<button {onclick} class:action class:danger class:small>
    <Icon {icon} {small}></Icon>
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
        width: 28px;
        height: 28px;
    }

    button:hover {
        background-color: #0001;
    }

    button.action {
        background-color: var(--primary);
        color: var(--base);
        transition: ease-in-out 0.2s filter;
        box-shadow: 1px 1px 3px 0px #0002;
    }

    button.danger {
        background-color: var(--red);
        color: var(--base);
        transition: ease-in-out 0.2s filter;
        box-shadow: 1px 1px 3px 0px #0002;
    }

    button.action:hover,
    button.danger:hover {
        filter: brightness(1.1);
    }
</style>
