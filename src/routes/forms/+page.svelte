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
    import DateInput from "$lib/components/DateInput.svelte";
    import DateTimeInput from "$lib/components/DateTimeInput.svelte";
    import { EllipsisVertical, Plus, Trash2 } from "@lucide/svelte";

    let date = $state(new Date().toISOString());
</script>

<Wrapper>
    <Header title="Title">
        <IconButton Icon={Plus} action />
        <IconButton Icon={Trash2} danger />
    </Header>

    <div class="filter">
        <Row margin padding>
            <Input name="input1" label="Value" placeholder="Placeholder"></Input>
            <div></div>
            <div></div>
        </Row>
    </div>

    <Card title="Card" padding>
        {#snippet actions()}
            <IconButton Icon={EllipsisVertical} small />
            <IconButton Icon={Plus} small />
            <IconButton Icon={Trash2} small />
        {/snippet}

        <Row margin>
            <Input name="input1" label="Input" value="Value" placeholder="Placeholder" disabled
            ></Input>
            <Input name="input2" label="Input" value="Value" placeholder="Placeholder"></Input>
            <Input
                name="input-pass"
                label="Password"
                value="Value"
                placeholder="Placeholder"
                type="password"
            ></Input>
        </Row>

        <Row margin>
            <DateInput name="input3" label="Date" bind:value={date}></DateInput>
            <DateTimeInput name="input4" label="Datetime local" bind:value={date}></DateTimeInput>
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
