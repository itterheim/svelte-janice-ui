<script lang="ts">
    let {
        name,
        label,
        disabled,
        value = $bindable()
    }: {
        name: string;
        value?: string;
        label?: string;
        placeholder?: string;
        disabled?: boolean;
    } = $props();
</script>

<div class="input">
    <label for={name}>{label}</label>
    <select id={name} {name} bind:value {disabled}>
        <option value=""></option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
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
        /* padding-left: 10px; */
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
