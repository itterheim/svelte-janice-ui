<script lang="ts">
    let {
        sticky,
        children
    }: {
        sticky?: boolean;
        children: () => any;
    } = $props();
</script>

<table class="janice-table" class:sticky>
    {@render children()}
</table>

<style>
    table.janice-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
    }

    table.janice-table :global(thead),
    table.janice-table :global(tbody) {
        cursor: pointer;
    }

    table.janice-table :global(> thead > tr > th) {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid var(--border-color);
        font-weight: 600;
        background-color: var(--base);
    }

    table.janice-table.sticky :global(> thead > tr > th) {
        position: sticky;
        top: 0px;
    }

    table.janice-table :global(> tbody > tr > td) {
        padding: 8px;
        border-bottom: 1px solid var(--border-color);
    }

    table.janice-table :global(> thead > tr > th:first-child),
    table.janice-table :global(> tbody > tr > td:first-child) {
        padding-left: 16px;
    }

    table.janice-table :global(> thead > tr > th:last-child),
    table.janice-table :global(> tbody > tr > td:last-child) {
        padding-right: 16px;
    }

    @media (max-width: 800px) {
        table.janice-table :global(> thead > tr > th:first-child),
        table.janice-table :global(> tbody > tr > td:first-child) {
            padding-left: 8px;
        }

        table.janice-table :global(> thead > tr > th:last-child),
        table.janice-table :global(> tbody > tr > td:last-child) {
            padding-right: 8px;
        }
    }
</style>
