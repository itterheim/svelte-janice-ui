<script lang="ts">
    import Input from "./Input.svelte";

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

        const date = `${parsed.getFullYear()}-${(parsed.getMonth() + 1).toString().padStart(2, "0")}-${parsed.getDate().toString().padStart(2, "0")}`;
        const time = `${parsed.getHours().toString().padStart(2, "0")}:${parsed.getMinutes().toString().padStart(2, "0")}`;

        return `${date}T${time}`;
    }

    function setDate(v: string) {
        if (!v) return;

        const result = new Date(v);

        value = result.toISOString();
    }
</script>

<Input
    {name}
    {label}
    {placeholder}
    type="datetime-local"
    {disabled}
    bind:value={getString, setDate}
/>
