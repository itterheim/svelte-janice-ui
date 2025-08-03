<script lang="ts">
    import "$lib/styles.css";

    import { resolve } from "$app/paths";
    import { page } from "$app/state";
    import { setContext } from "svelte";
    import { Janice, Main, Nav, NavDivider, NavGroup, NavGroupLink, NavLink } from "$lib/index.js";
    import {
        Car,
        Circle,
        CircleDashed,
        CircleSlash2,
        Expand,
        LayoutDashboard,
        Lock,
        MapIcon,
        Minimize,
        Orbit,
        SplitSquareVertical,
        Table2,
        TextCursorInput,
        User,
        Users
    } from "@lucide/svelte";
    import { browser } from "$app/environment";
    setContext("client", "my client");

    let {
        children
    }: {
        children: () => any;
    } = $props();

    let fullscreen = $state(false);
    if (browser) {
        document.onfullscreenchange = () => {
            fullscreen = !!document.fullscreenElement;
        };
    }

    function toggleFullscreen() {
        if (fullscreen) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    }
</script>

<Janice>
    <Nav expandable expanded Icon={Car} title="Janice">
        {#snippet middle()}
            <NavLink
                Icon={LayoutDashboard}
                label="Dashboard"
                href={resolve("/")}
                active={page.route.id === "/"}
            ></NavLink>
            <NavLink
                Icon={TextCursorInput}
                label="Forms"
                href={resolve("/forms")}
                active={page.route.id === "/forms"}
            ></NavLink>
            <NavLink
                Icon={Table2}
                label="Tables"
                href={resolve("/tables")}
                active={page.route.id === "/tables"}
            ></NavLink>
            <NavLink
                Icon={SplitSquareVertical}
                label="Horizontal layout"
                href={resolve("/horizontal")}
                active={page.url.pathname.includes("/horizontal")}
            ></NavLink>
            <NavLink
                Icon={MapIcon}
                label="Leaflet map"
                href={resolve("/map")}
                active={page.url.pathname.includes("/map")}
            ></NavLink>
            <NavGroup Icon={Orbit} label="Planets" active={page.route.id?.startsWith("/planets")}>
                <NavGroupLink
                    Icon={Circle}
                    label="Mercury"
                    href={resolve("/planets/mercury")}
                    active={page.url.pathname.endsWith("/planets/mercury")}
                ></NavGroupLink>
                <NavGroupLink
                    Icon={CircleDashed}
                    label="Venus"
                    href={resolve("/planets/venus")}
                    active={page.url.pathname.endsWith("/planets/venus")}
                ></NavGroupLink>
                <NavGroupLink
                    Icon={CircleSlash2}
                    label="Saturn"
                    href={resolve("/planets/earth")}
                    active={page.url.pathname.endsWith("/planets/earth")}
                ></NavGroupLink>
            </NavGroup>

            <NavDivider></NavDivider>

            <NavLink Icon={Users} label="Users"></NavLink>
            <NavLink Icon={Lock} label="Lock"></NavLink>
        {/snippet}
        {#snippet bottom()}
            {#if fullscreen}
                <NavLink Icon={Minimize} label="Exit fullscreen" onclick={toggleFullscreen}
                ></NavLink>
            {:else}
                <NavLink Icon={Expand} label="Fullscreen" onclick={toggleFullscreen}></NavLink>
            {/if}
            <NavLink Icon={User} label="user"></NavLink>
        {/snippet}
    </Nav>
    <Main>
        {@render children()}
    </Main>
</Janice>
