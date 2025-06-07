<script lang="ts">
    let {
        margin,
        padding,
        children
    }: {
        margin?: boolean;
        padding?: boolean;
        children: () => any;
    } = $props();
</script>

<div class="row" class:margin class:padding>
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

    .padding {
        padding: 10px;
    }

    @media (max-width: 800px) {
        .row {
            flex-direction: column;
        }
    }
</style>
