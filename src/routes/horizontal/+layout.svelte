<script lang="ts">
    import { page } from "$app/state";
    import Header from "$lib/components/Header.svelte";
    import LayoutHorizontal from "$lib/components/LayoutHorizontal.svelte";
    import { SplitSquareVertical } from "@lucide/svelte";
    import FilterTableCard from "./FilterTableCard.svelte";

    let {
        children
    }: {
        children: () => any;
    } = $props();

    let detail = $derived(page.route.id!.includes("/horizontal/detail"));
</script>

<LayoutHorizontal showRight={detail}>
    {#snippet header()}
        <Header Icon={SplitSquareVertical} title={detail ? "Detail" : "Horizontal Layout"}></Header>
    {/snippet}

    {#snippet left()}
        <FilterTableCard></FilterTableCard>
    {/snippet}

    {#snippet right()}
        {@render children()}
    {/snippet}
</LayoutHorizontal>
