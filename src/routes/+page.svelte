<script>
    import "$lib/styles.css";

    import Card from "$lib/components/Card.svelte";
    import Header from "$lib/components/Header.svelte";
    import IconButton from "$lib/components/IconButton.svelte";
    import Wrapper from "$lib/components/Wrapper.svelte";
    import Row from "$lib/components/Row.svelte";
    import { EllipsisVertical, RefreshCcw } from "@lucide/svelte";
</script>

<Wrapper>
    <Header title="Title">
        <IconButton Icon={RefreshCcw} />
        <IconButton Icon={EllipsisVertical} />
    </Header>

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
</Wrapper>

<style>
    .gap {
        height: 20px;
    }
</style>
