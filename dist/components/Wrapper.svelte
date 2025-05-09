<script lang="ts">
    let { children }: { children: () => any } = $props();
</script>

<div class="wrapper">
    {@render children()}
</div>

<style>
    div.wrapper {
        display: flex;
        flex-direction: column;
        max-width: 1000px;
        margin: 0 auto;
    }
</style>
