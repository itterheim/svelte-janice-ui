<script lang="ts">
    let {
        pagination,
        children
    }: {
        pagination?: boolean;
        children: () => any;
    } = $props();
</script>

<table class="janice-table">
    {@render children()}
    {#if pagination}
        <tfoot>
            <tr>
                <td colspan="9999">&hellip; Pagination</td>
            </tr>
        </tfoot>
    {/if}
</table>

<style>
    table.janice-table {
        width: 100%;
        border-collapse: collapse;
    }

    table.janice-table :global(thead),
    table.janice-table :global(tbody) {
        cursor: pointer;
    }

    table.janice-table :global(> tbody > tr > th) {
        padding: 10px;
        text-align: left;
        border-bottom: 1px solid var(--border-color);
        font-weight: 600;
    }

    table.janice-table :global(> tbody > tr > td) {
        padding: 10px;
        border-bottom: 1px solid var(--border-color);
    }

    table.janice-table tfoot {
        border-top: 1px solid var(--border-color);
    }
</style>
