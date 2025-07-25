<script lang="ts">
    import "$lib/styles.css";

    import { base } from "$app/paths";
    import { page } from "$app/state";
    import { setContext } from "svelte";
    import { Layout, Main, Nav, NavGroup, NavLink } from "$lib/index.js";
    import {
        Car,
        Circle,
        CircleDashed,
        CircleSlash2,
        History,
        LayoutDashboard,
        Lock,
        Orbit,
        Table2,
        TextCursorInput,
        User,
        Users
    } from "@lucide/svelte";
    import NavGroupLink from "$lib/components/NavGroupLink.svelte";
    import NavDivider from "$lib/components/NavDivider.svelte";
    setContext("client", "my client");

    let {
        children
    }: {
        children: () => any;
    } = $props();
</script>

<Layout>
    <Nav expandable expanded Icon={Car} title="Janice">
        {#snippet middle()}
            <NavLink
                Icon={LayoutDashboard}
                label="Dashboard"
                href="{base}/"
                active={page.route.id === "/"}
            ></NavLink>
            <NavLink
                Icon={TextCursorInput}
                label="Forms"
                href="{base}/forms"
                active={page.route.id === "/forms"}
            ></NavLink>
            <NavLink
                Icon={Table2}
                label="Tables"
                href="{base}/tables"
                active={page.route.id === "/tables"}
            ></NavLink>
            <NavGroup Icon={Orbit} label="Planets" active={page.route.id?.startsWith("/planets")}>
                <NavGroupLink
                    Icon={Circle}
                    label="Mercury"
                    href="{base}/planets/mercury"
                    active={page.url.pathname.endsWith("/planets/mercury")}
                ></NavGroupLink>
                <NavGroupLink
                    Icon={CircleDashed}
                    label="Venus"
                    href="{base}/planets/venus"
                    active={page.url.pathname.endsWith("/planets/venus")}
                ></NavGroupLink>
                <NavGroupLink
                    Icon={CircleSlash2}
                    label="Saturn"
                    href="{base}/planets/earth"
                    active={page.url.pathname.endsWith("/planets/earth")}
                ></NavGroupLink>
            </NavGroup>

            <NavDivider></NavDivider>

            <NavLink Icon={Car} label="Cars"></NavLink>
            <NavLink Icon={History} label="Logbook"></NavLink>

            <NavDivider></NavDivider>

            <NavLink Icon={Users} label="Users"></NavLink>
            <NavLink Icon={Lock} label="Lock"></NavLink>
        {/snippet}
        {#snippet bottom()}
            <NavLink Icon={User} label="user"></NavLink>
        {/snippet}
    </Nav>
    <Main>
        {@render children()}
    </Main>
</Layout>
