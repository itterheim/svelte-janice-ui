<script lang="ts">
    import { parse } from "svelte/compiler";

    let {
        name,
        label,
        placeholder,
        disabled,
        value = $bindable()
    }: {
        name: string;
        value?: string;
        label?: string;
        disabled?: boolean;
        placeholder?: string;
    } = $props();

    function getString() {
        if (value === undefined) return "";

        const parsed = new Date(value);

        return `${parsed.getFullYear()}-${(parsed.getMonth() + 1).toString().padStart(2, "0")}-${parsed.getDate().toString().padStart(2, "0")}`;
    }

    function setDate(v: string) {
        if (!v) return;

        const result = new Date(v);
        result.setHours(12, 0, 0, 0);

        value = result.toISOString();
    }
</script>

<div class="input">
    {#if label}
        <label for={name}>{label}</label>
    {/if}
    <input type="date" id={name} {name} {placeholder} bind:value={getString, setDate} {disabled} />
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
