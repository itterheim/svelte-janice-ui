<script lang="ts">
    let {
        name,
        label,
        disabled,
        value = $bindable(),
        required,
        onchange,
        children
    }: {
        name: string;
        value?: string;
        label?: string;
        placeholder?: string;
        disabled?: boolean;
        required?: boolean;
        onchange?: () => void;
        children: () => any;
    } = $props();
</script>

<div class="input">
    {#if label}
        <label for={name}>{label}</label>
    {/if}
    <select id={name} {name} bind:value {disabled} {required} {onchange}>
        {@render children()}
    </select>
</div>

<style>
    .input {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    label {
        font-weight: 600;
    }

    select {
        font-size: var(--font-size);
        padding: 10px;
        border-radius: 5px;
        border: 1px solid var(--border-color);
        background-color: var(--mantle);
        color: var(--text);
    }

    select:disabled {
        background-color: var(--crust);
        border-color: transparent;
        cursor: not-allowed;
    }
</style>
