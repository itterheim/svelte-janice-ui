<script>
    import "$lib/styles.css";

    import Card from "$lib/components/Card.svelte";
    import Header from "$lib/components/Header.svelte";
    import IconButton from "$lib/components/IconButton.svelte";
    import Row from "$lib/components/Row.svelte";
    import { EllipsisVertical, LayoutDashboard, RefreshCcw } from "@lucide/svelte";
    import LayoutVertical from "$lib/components/LayoutVertical.svelte";
</script>

<LayoutVertical>
    {#snippet header()}
        <Header title="Title" Icon={LayoutDashboard}>
            <IconButton Icon={RefreshCcw} />
            <IconButton Icon={EllipsisVertical} />
        </Header>
    {/snippet}

    <Row>
        <Card padding>Card content</Card>
        <Card title="Card" padding>Card content</Card>
    </Row>

    <div class="gap"></div>

    <Row>
        <Card title="Card" padding>Card content</Card>
        <Card padding>Card content</Card>
        <Card title="Card" padding>Card content</Card>
    </Row>

    <div class="gap"></div>

    <Row>
        <Card title="Card" padding>Card content</Card>
        <Card title="Card" padding>Card content</Card>
        <Card padding>Card content</Card>
        <Card title="Card" padding>Card content</Card>
    </Row>
</LayoutVertical>

<style>
    .gap {
        height: 20px;
    }
</style>
