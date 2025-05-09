<script lang="ts">
    let {
        title,
        children,
        padding,
        actions
    }: {
        title?: string;
        padding?: boolean;
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
    <div class="content" class:padding>
        {@render children()}
    </div>
</div>

<style>
    div.card {
        border: 1px solid var(--border-color);
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
        border-bottom: 1px solid var(--border-color);
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

    div.content.padding {
        padding: 10px;
    }
</style>
