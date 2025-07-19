<script lang="ts">
    import "$lib/styles.css";

    import Layout from "$lib/components/Layout.svelte";
    import Main from "$lib/components/Main.svelte";
    import Nav from "$lib/components/Nav.svelte";
    import NavLink from "$lib/components/NavLink.svelte";

    import { base } from "$app/paths";
    import { page } from "$app/state";
    import { setContext } from "svelte";
    import NavGroup from "$lib/components/NavGroup.svelte";

    setContext("client", "my client");

    let {
        children
    }: {
        children: () => any;
    } = $props();
</script>

<Layout>
    <Nav expandable>
        {#snippet top()}
            <NavLink href="{base}/" icon="planet"></NavLink>
        {/snippet}
        {#snippet middle()}
            <NavLink
                icon="dashboard"
                label="Dashboard"
                href="{base}/"
                active={page.route.id === "/"}
            ></NavLink>
            <NavLink
                icon="ballot"
                label="Forms"
                href="{base}/forms"
                active={page.route.id === "/forms"}
            ></NavLink>
            <NavLink
                icon="table"
                label="Tables"
                href="{base}/tables"
                active={page.route.id === "/tables"}
            ></NavLink>
            <NavGroup icon="planet" label="Planets" active={page.route.id?.startsWith("/planets")}>
                <NavLink
                    icon="planet"
                    label="Mercury"
                    href="{base}/planets/mercury"
                    active={page.url.pathname === "/planets/mercury"}
                ></NavLink>
                <NavLink
                    icon="planet"
                    label="Venus"
                    href="{base}/planets/venus"
                    active={page.url.pathname === "/planets/venus"}
                ></NavLink>
                <NavLink
                    icon="planet"
                    label="Earth"
                    href="{base}/planets/earth"
                    active={page.url.pathname === "/planets/earth"}
                ></NavLink>
            </NavGroup>
        {/snippet}
        {#snippet bottom()}
            <NavLink icon="person" label="user"></NavLink>
        {/snippet}
    </Nav>
    <Main>
        {@render children()}
    </Main>
</Layout>
