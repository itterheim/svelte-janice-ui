<script lang="ts">
    let { children }: { children: () => any } = $props();
</script>

<div class="row">
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

    @media (max-width: 800px) {
        .row {
            flex-direction: column;
        }
    }
</style>
