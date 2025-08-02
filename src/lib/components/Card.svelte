<script lang="ts">
    import { Funnel } from "@lucide/svelte";
    import IconButton from "./IconButton.svelte";

    let {
        identificator,
        title,
        children,
        padding,
        id,
        middle,
        actions,
        buttons,
        filter
    }: {
        identificator?: string;
        title?: string;
        padding?: boolean;
        id?: string;
        children: () => any;
        middle?: () => any;
        actions?: () => any;
        buttons?: () => any;
        filter?: () => any;
    } = $props();

    let showFilter = $state(false);
</script>

<div class="card {identificator || ''}" {id}>
    {#if title || middle || actions}
        <div class="header">
            {#if title}
                <div class="title">{title}</div>
            {/if}
            <div class="middle">
                {@render middle?.()}
            </div>
            <div class="actions">
                {@render actions?.()}
                {#if filter}
                    <IconButton
                        Icon={Funnel}
                        action={showFilter}
                        onclick={() => (showFilter = !showFilter)}
                    ></IconButton>
                {/if}
            </div>
        </div>
    {/if}

    {#if showFilter}
        <div class="filter">
            {@render filter?.()}
        </div>
    {/if}

    <div class="content" class:padding>
        {@render children()}
    </div>
    {#if buttons}
        <div class="buttons">
            {@render buttons()}
        </div>
    {/if}
</div>

<style>
    div.card {
        border: 1px solid var(--border-color);
        border-radius: 8px;
        overflow: clip;
        box-shadow: 1px 1px 3px 0px #0002;
        background-color: var(--base);
        display: flex;
        flex-direction: column;
    }

    div.header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--border-color);
        padding: 8px 0;
    }

    div.title {
        padding: 8px 16px;
        font-weight: 600;
        font-size: var(--font-size-larger);
    }

    div.middle {
        display: flex;
        flex-direction: row;
        gap: 8px;
        padding: 0 16px;
    }

    div.actions {
        display: flex;
        flex-direction: row;
        gap: 8px;
        padding: 0 16px;
    }

    div.filter {
        display: flex;
        flex-direction: row;
        gap: 8px;
        align-items: flex-end;
        padding: 16px;
        border-bottom: 1px solid var(--border-color);
        background-color: var(--crust);
    }

    div.content {
        flex: 1;
        overflow: auto;
    }

    div.content.padding {
        padding: 16px;
    }

    div.buttons {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        border-top: 1px solid var(--border-color);
        padding: 8px;
        gap: 8px;
    }
    @media (max-width: 800px) {
        div.title {
            padding: 8px;
        }

        div.middle,
        div.actions {
            padding: 0 8px;
        }

        div.filter {
            padding: 8px;
            flex-direction: column;
            align-items: stretch;
        }

        div.content.padding {
            padding: 8px;
        }
    }
</style>
