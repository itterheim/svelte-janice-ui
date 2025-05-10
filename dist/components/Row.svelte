<script lang="ts">
    let {
        margin,
        children
    }: {
        margin?: boolean;
        children: () => any;
    } = $props();
</script>

<div class="row" class:margin>
    {@render children()}
</div>

<style>
    .row {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    .row :global(> *) {
        flex: 1;
    }

    .margin {
        margin: 0 0 10px 0;
    }

    @media (max-width: 800px) {
        .row {
            flex-direction: column;
        }
    }
</style>
