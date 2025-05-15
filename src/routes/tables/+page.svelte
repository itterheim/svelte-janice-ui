<script>
    import "$lib/styles.css";

    import Card from "$lib/components/Card.svelte";
    import Header from "$lib/components/Header.svelte";
    import IconButton from "$lib/components/IconButton.svelte";
    import Wrapper from "$lib/components/Wrapper.svelte";
    import Table from "$lib/components/Table.svelte";
    import Icon from "$lib/components/Icon.svelte";
</script>

<Wrapper>
    <Header title="Tables">
        <IconButton icon="add" action />
        <IconButton icon="delete" danger />
    </Header>

    <Card title="Table">
        {#snippet actions()}
            <IconButton icon="filter_alt" small />
        {/snippet}

        <Table>
            <thead>
                <tr>
                    <th>Header 1</th>
                    <th>Header 2</th>
                    <th>Header 3</th>
                    <th style="width: 22px;"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Row 1, Cell 1</td>
                    <td>Row 1, Cell 2</td>
                    <td>Row 1, Cell 3</td>
                    <td>
                        <Icon icon="edit" small />
                    </td>
                </tr>
                <tr>
                    <td>Row 2, Cell 1</td>
                    <td>Row 2, Cell 2</td>
                    <td>Row 2, Cell 3</td>
                    <td>
                        <Icon icon="edit" small />
                    </td>
                </tr>
            </tbody>
        </Table>
    </Card>

    <div class="gap"></div>

    <Card>
        <Table pagination>
            <thead>
                <tr>
                    <th>Header 1</th>
                    <th>Header 2</th>
                    <th>Header 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Row 1, Cell 1</td>
                    <td>Row 1, Cell 2</td>
                    <td>Row 1, Cell 3</td>
                </tr>
                <tr>
                    <td>Row 2, Cell 1</td>
                    <td>Row 2, Cell 2</td>
                    <td>
                        <table>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </Table>
    </Card>
</Wrapper>

<style>
    .gap {
        height: 20px;
    }
</style>
