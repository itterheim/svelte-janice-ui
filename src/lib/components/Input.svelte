<script lang="ts">
    import type { HTMLInputTypeAttribute } from "svelte/elements";

    let {
        name,
        label,
        placeholder,
        disabled,
        type,
        value = $bindable(),
        min,
        max,
        step,
        left,
        right
    }: {
        name: string;
        value?: string | number;
        label?: string;
        disabled?: boolean;
        placeholder?: string;
        type?: HTMLInputTypeAttribute;
        min?: number;
        max?: number;
        step?: number;
        left?: () => any;
        right?: () => any;
    } = $props();
</script>

<div class="input">
    {#if label}
        <label for={name}>{label}</label>
    {/if}
    <div class="field">
        {@render left?.()}
        <input
            id={name}
            type={type || "text"}
            {min}
            {max}
            {step}
            {name}
            {placeholder}
            bind:value
            {disabled}
        />
        {@render right?.()}
    </div>
</div>

<style>
    .input {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .field {
        display: flex;
        flex-direction: row;
        gap: 4px;
    }

    .field input {
        flex: 1;
    }

    label {
        font-weight: 600;
        color: var(--text);
        /* padding-left: 10px; */
    }

    input {
        font-size: var(--font-size);
        padding: 8px;
        border-radius: 4px;
        border: 1px solid var(--border-color);
        background-color: var(--base);
        color: var(--text);
    }

    input:disabled {
        background-color: var(--crust);
        /* background-color: var(--mantle); */
        opacity: 0.75;
        /* border-color: transparent; */
        cursor: not-allowed;
    }
</style>
