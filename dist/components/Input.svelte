<script lang="ts">
    let {
        name,
        label,
        placeholder,
        disabled,
        password,
        value = $bindable()
    }: {
        name: string;
        value?: string;
        label?: string;
        disabled?: boolean;
        password?: boolean;
        placeholder?: string;
    } = $props();
</script>

<div class="input">
    {#if label}
        <label for={name}>{label}</label>
    {/if}
    <input
        type={password ? "password" : "text"}
        id={name}
        {name}
        {placeholder}
        bind:value
        {disabled}
    />
</div>

<style>
    .input {
        display: flex;
        flex-direction: column;
        gap: 5px;
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
</style>
