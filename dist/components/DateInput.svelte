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

        return `${parsed.getFullYear()}-${(parsed.getMonth() + 1).toString().padStart(2, "0")}-${parsed.getDate().toString().padStart(2, "0")}`;
    }

    function setDate(v: string) {
        if (!v) return;

        const result = new Date(v);
        result.setHours(12, 0, 0, 0);

        value = result.toISOString();
    }
</script>

<Input {name} {label} {placeholder} type="date" {disabled} bind:value={getString, setDate} />
