<div class="nav-divider">
    <div class="icon"></div>
    <div class="label"></div>
</div>

<style>
    div.nav-divider {
        display: flex;
        flex-direction: row;
        margin: 8px 0;
    }

    div.nav-divider div.icon {
        height: 2px;
        width: 40px;
        min-width: 40px;
        border-radius: 2px;
        background-color: var(--surface1-dark);
    }

    div.nav-divider div.label {
        display: none;
        height: 2px;
        border-radius: 2px;
        flex: 1;
        background-color: var(--surface0-dark);
        margin: 0 0 0 16px;
    }

    :global(nav.expanded) div.nav-divider div.label {
        display: block;
    }
</style>
