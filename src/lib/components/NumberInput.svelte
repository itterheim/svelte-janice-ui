<script lang="ts">
    import IconButton from "./IconButton.svelte";

    let {
        name,
        label,
        placeholder,
        disabled,
        min,
        max,
        step,
        value = $bindable(0)
    }: {
        name: string;
        value?: number;
        label?: string;
        disabled?: boolean;
        min?: number;
        max?: number;
        step?: number;
        placeholder?: string;
    } = $props();
</script>

<div class="input">
    {#if label}
        <label for={name}>{label}</label>
    {/if}
    <div class="field">
        <input
            type="number"
            id={name}
            {name}
            {placeholder}
            bind:value
            {disabled}
            {min}
            {max}
            {step}
            onkeydown={() => {
                if (typeof min === "number" && value < min) {
                    value = min;
                }

                if (typeof max === "number" && value > max) {
                    value = max;
                }
            }}
            onchange={(e) => {
                if (!value) value = 0;
            }}
        />
        {#if step}
            <IconButton
                icon="remove"
                onclick={() => (value = Math.max(value - step, min ?? -Infinity))}
                grey
            ></IconButton>
            <IconButton
                icon="add"
                onclick={() => (value = Math.min(value + step, max ?? Infinity))}
                grey
            ></IconButton>
        {/if}
    </div>
</div>

<style>
    .input {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .field {
        display: flex;
        flex-direction: row;
        gap: 5px;
    }

    .field input {
        flex: 1;
    }

    label {
        font-weight: 600;
        /* padding-left: 10px; */
    }

    input {
        font-size: var(--font-size);
        padding: 10px;
        border-radius: 5px;
        border: 1px solid var(--border-color);
        background-color: var(--mantle);
        color: var(--text);
    }

    input:disabled {
        background-color: var(--crust);
        border-color: transparent;
        cursor: not-allowed;
    }

    input.invalid {
        border-color: var(--red);
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type="number"] {
        appearance: textfield;
        -moz-appearance: textfield;
    }
</style>
