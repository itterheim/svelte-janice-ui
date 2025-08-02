<script>
    import { goto } from "$app/navigation";
    import { Card, IconButton } from "$lib";
    import { XIcon } from "@lucide/svelte";
</script>

<Card title="Right" padding id="horizontal-detail">
    {#snippet actions()}
        <IconButton Icon={XIcon} onclick={() => goto("/horizontal")}></IconButton>
    {/snippet}
    right
</Card>

<style>
    :global(div#horizontal-detail) {
        width: 400px;
        max-width: 400px;
        justify-self: flex-end;
    }

    @media (max-width: 800px) {
        :global(div#horizontal-detail) {
            width: unset;
            max-width: unset;
        }
    }
</style>
