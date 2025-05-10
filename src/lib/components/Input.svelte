<script lang="ts">
    let {
        name,
        label,
        placeholder,
        value = $bindable()
    }: {
        name: string;
        value?: string;
        label?: string;
        placeholder?: string;
    } = $props();
</script>

<div class="input">
    <label for={name}>{label}</label>
    <input type="text" id={name} {name} {placeholder} />
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
        background-color: var(--base);
        color: var(--text);
    }
</style>
