<script lang="ts">
    // import { page } from "$app/state";
    import { theme, showMenu } from "$lib/stores/ui.js";
    import NavLink from "./NavLink.svelte";

    let {
        expandable,
        top,
        middle,
        bottom
    }: {
        expandable?: boolean;
        top?: () => any;
        middle?: () => any;
        bottom?: () => any;
    } = $props();

    function changeTheme() {
        theme.set($theme == "latte" ? "macchiato" : "latte");
    }

    let expanded = $state(false);
    function expand() {
        expanded = !expanded;
    }

    // let navPage = $derived.by(() => page.url.pathname.split("/")[1]);
</script>

<nav class:visible={$showMenu} class:hidden={!$showMenu} class:expanded>
    <div class="top desktop">
        {#if expandable}
            <NavLink icon={expanded ? "chevron_left" : "chevron_right"} onclick={expand}></NavLink>
        {/if}
        {@render top?.()}
    </div>

    <div class="links">
        {@render middle?.()}
    </div>

    <div class="bottom">
        <!-- svelte-ignore a11y_invalid_attribute -->
        <NavLink
            href="javascript:;"
            onclick={changeTheme}
            label="Theme"
            icon={$theme == "latte" ? "dark_mode" : "light_mode"}
        ></NavLink>
        {@render bottom?.()}
    </div>
</nav>

<style>
    nav {
        display: flex;
        flex-direction: column;
        background: var(--base-dark);
        color: var(--text-light);
    }

    nav.expanded {
        width: 200px;
        min-width: 200px;
    }

    nav div.top :global(> :first-child) {
        align-self: flex-end;
    }

    nav div.top,
    nav div.bottom {
        display: flex;
        padding: 10px;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
    }

    nav div.links {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 10px;
        gap: 10px;
    }

    @media (max-width: 800px) {
        nav.hidden {
            display: none;
            visibility: hidden;
        }

        /* nav.visible {
              display: flex;
              visibility: visible;
          } */

        /* .desktop {
              display: none !important;
          }

          nav {
              flex-direction: row;
          }

          nav div.links {
              flex-direction: row;
              padding: 5px;
              gap: 5px;
              align-items: center;
          }

          nav div.links a {
              display: flex;
              flex-direction: column-reverse;
              align-items: center;
              cursor: pointer;
              border-radius: 10px;
              flex: 1;
              gap: 0px;
          }

          nav div.links a ion-icon {
              display: block;
              width: 24px;
              height: 24px;

              border-radius: 20px;
              padding: 3px;
          }

          nav div.links a:hover ion-icon,
          nav div.links a.active ion-icon {
              background-color: var(--primary);
              color: var(--base);
          }

          nav div.links a:hover div.label,
          nav div.links a.active div.label {
              color: var(--primary);
          }

          nav div.links a div.label {
              font-weight: 500;
              font-size: 14px;
          } */
    }

    /* @media (min-width: 801px) {
          .mobile {
              display: none !important;
          } */

    nav div.links {
        justify-content: center;
    }

    /* } */
</style>
