<script lang="ts">
    let {
        title,
        children,
        actions
    }: {
        title?: string;
        children: () => any;
        actions?: () => any;
    } = $props();
</script>

<div class="card">
    {#if title}
        <div class="header">
            <div class="title">{title}</div>
            <div class="actions">
                {@render actions?.()}
            </div>
        </div>
    {/if}
    <div class="content">
        {@render children()}
    </div>
</div>

<style>
    div.card {
        border: 1px solid #0003;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 1px 1px 3px 0px #0002;
        background-color: var(--base);
    }

    div.header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #0003;
    }

    div.title {
        padding: 10px;
        font-weight: 600;
    }

    div.actions {
        display: flex;
        flex-direction: row;
        gap: 10px;
        padding: 0 10px;
    }

    div.content {
        padding: 10px;
    }
</style>
