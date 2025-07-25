<script lang="ts">
    import { Minus, Plus } from "@lucide/svelte";
    import IconButton from "./IconButton.svelte";
    import Input from "./Input.svelte";

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

<div class="number-input">
    <Input {name} {label} {placeholder} type="number" {disabled} bind:value>
        {#snippet right()}
            {#if step}
                <IconButton
                    Icon={Minus}
                    onclick={() => (value = Math.max(value - step, min ?? -Infinity))}
                    grey
                ></IconButton>
                <IconButton
                    Icon={Plus}
                    onclick={() => (value = Math.min(value + step, max ?? Infinity))}
                    grey
                ></IconButton>
            {/if}
        {/snippet}
    </Input>
</div>

<style>
    /* Chrome, Safari, Edge, Opera */
    div.number-input :global(input::-webkit-outer-spin-button),
    div.number-input :global(input::-webkit-inner-spin-button) {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    div.number-input :global(input[type="number"]) {
        appearance: textfield;
        -moz-appearance: textfield;
    }
</style>
