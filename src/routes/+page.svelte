<script>
    import "$lib/styles.css";

    import Card from "$lib/components/Card.svelte";
    import Header from "$lib/components/Header.svelte";
    import IconButton from "$lib/components/IconButton.svelte";
    import Wrapper from "$lib/components/Wrapper.svelte";
    import Table from "$lib/components/Table.svelte";

    import Input from "$lib/components/Input.svelte";
    import Row from "$lib/components/Row.svelte";
</script>

<Wrapper>
    <Header title="Title">
        <IconButton icon="refresh" />
        <IconButton icon="more_vert" />
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
