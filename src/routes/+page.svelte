<script>
    import Card from "$lib/components/Card.svelte";
    import Header from "$lib/components/Header.svelte";
    import IconButton from "$lib/components/IconButton.svelte";
    import Layout from "$lib/components/Layout.svelte";
    import Main from "$lib/components/Main.svelte";
    import Nav from "$lib/components/Nav.svelte";
    import NavLink from "$lib/components/NavLink.svelte";
    import Wrapper from "$lib/components/Wrapper.svelte";
    import "$lib/styles.css";
</script>

<Layout>
    <Nav>
        {#snippet top()}
            <NavLink href="/" icon="planet"></NavLink>
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
            <Card title="Card">
                {#snippet actions()}
                    <IconButton icon="more_vert" small />
                    <IconButton icon="add" action small />
                    <IconButton icon="delete" danger small />
                {/snippet}

                And its content
            </Card>
        </Wrapper>
    </Main>
</Layout>
