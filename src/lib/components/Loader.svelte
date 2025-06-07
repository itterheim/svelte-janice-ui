<script lang="ts">
    let { loading = false }: { loading?: boolean } = $props();
</script>

<div class="loader" class:hide={!loading}></div>

<style>
    div.loader {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 999999;

        background-color: rgba(255,255,255,0.25);
        backdrop-filter: blur(5px);
    }

    div.loader.hide {
        display: none;
    }
</style>