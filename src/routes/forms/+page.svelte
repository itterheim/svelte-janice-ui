<script>
    import "$lib/styles.css";

    import Card from "$lib/components/Card.svelte";
    import Header from "$lib/components/Header.svelte";
    import IconButton from "$lib/components/IconButton.svelte";
    import Wrapper from "$lib/components/Wrapper.svelte";
    import Input from "$lib/components/Input.svelte";
    import Row from "$lib/components/Row.svelte";
    import Button from "$lib/components/Button.svelte";
    import Select from "$lib/components/Select.svelte";
    import NumberInput from "$lib/components/NumberInput.svelte";
</script>

<Wrapper>
    <Header title="Title">
        <IconButton icon="add" action />
        <IconButton icon="delete" danger />
    </Header>

    <Card title="Card" padding>
        {#snippet actions()}
            <IconButton icon="more_vert" small />
            <IconButton icon="add" small />
            <IconButton icon="delete" small />
        {/snippet}

        <Row margin>
            <Input name="input1" label="Input" value="Value" placeholder="Placeholder" disabled
            ></Input>
            <Input name="input2" label="Input" value="Value" placeholder="Placeholder"></Input>
        </Row>

        <Row>
            <NumberInput name="number"></NumberInput>
            <NumberInput name="number" step={1} min={0} max={100} value={90}></NumberInput>
        </Row>

        <Row>
            <Select name="select1" label="Select">
                <option value=""></option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
            </Select>
            <Select name="select1" label="Select" disabled>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
            </Select>
        </Row>

        {#snippet buttons()}
            <Button label="Button" />
            <Button label="Action" action small />
            <Button label="Action" action />
            <Button label="Danger" danger />
        {/snippet}
    </Card>
</Wrapper>
