<script lang="ts">
    let {
        children
    }: {
        children: () => any;
    } = $props();
</script>

<div class="layout latte">
    {@render children()}
</div>

<style>
    .layout {
        display: flex;
        flex-direction: row;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        box-sizing: border-box;

        /* background: var(--crust); */
        background: var(--base-dark);
    }
</style>
