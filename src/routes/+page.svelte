<script>
    import "$lib/styles.css";

    import Card from "$lib/components/Card.svelte";
    import Header from "$lib/components/Header.svelte";
    import IconButton from "$lib/components/IconButton.svelte";
    import Layout from "$lib/components/Layout.svelte";
    import Main from "$lib/components/Main.svelte";
    import Nav from "$lib/components/Nav.svelte";
    import NavLink from "$lib/components/NavLink.svelte";
    import Wrapper from "$lib/components/Wrapper.svelte";
    import Table from "$lib/components/Table.svelte";

    import { base } from "$app/paths";
</script>

<Layout>
    <Nav>
        {#snippet top()}
            <NavLink href="{base}/" icon="planet"></NavLink>
        {/snippet}
        {#snippet middle()}
            <NavLink icon="stacked_email" label="Messages"></NavLink>
            <NavLink icon="people" label="People" active={true}></NavLink>
            <NavLink icon="book_2" label="Books"></NavLink>
            <NavLink icon="directions_car" label="Car"></NavLink>
        {/snippet}
        {#snippet bottom()}
            <NavLink icon="person" label="user"></NavLink>
        {/snippet}
    </Nav>
    <Main>
        <Wrapper>
            <Header title="Title">
                <IconButton icon="add" action />
                <IconButton icon="delete" danger />
            </Header>
            <Card title="Card" padding>
                {#snippet actions()}
                    <IconButton icon="more_vert" small />
                    <IconButton icon="add" action small />
                    <IconButton icon="delete" danger small />
                {/snippet}

                And its content
            </Card>

            <div class="gap"></div>

            <Card title="Table">
                <Table>
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
                            <td>Row 2, Cell 3</td>
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
                            <td>Row 2, Cell 3</td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
        </Wrapper>
    </Main>
</Layout>

<style>
    .gap {
        height: 20px;
    }
</style>
