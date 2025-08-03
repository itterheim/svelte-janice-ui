<script>
    import Header from "$lib/components/Header.svelte";
    import IconButton from "$lib/components/IconButton.svelte";
    import LayoutVertical from "$lib/components/LayoutVertical.svelte";
    import LeafletMap from "$lib/components/LeafletMap.svelte";
    import { Funnel, MapIcon, Plus, RefreshCw } from "@lucide/svelte";
</script>

<LayoutVertical stretch padding={false} border>
    {#snippet header()}
        <Header title="Leaflet Map" Icon={MapIcon}>
            <IconButton Icon={RefreshCw}></IconButton>
            <IconButton Icon={Funnel}></IconButton>
            <IconButton Icon={Plus} action></IconButton>
        </Header>
    {/snippet}
    <LeafletMap height="100%"></LeafletMap>
</LayoutVertical>
