<script lang="ts">
    let {
        pagination,
        children
    }: {
        pagination?: boolean;
        children: () => any;
    } = $props();
</script>

<table>
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
    table {
        width: 100%;
        border-collapse: collapse;
    }

    table :global(thead),
    table :global(tbody) {
        cursor: pointer;
    }

    table :global(th) {
        padding: 10px;
        text-align: left;
        border-bottom: 1px solid var(--border-color);
        font-weight: 600;
    }

    table :global(td) {
        padding: 10px;
        border-bottom: 1px solid var(--border-color);
    }

    table tfoot {
        border-top: 1px solid var(--border-color);
    }
</style>
