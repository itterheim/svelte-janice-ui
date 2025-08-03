<script lang="ts">
    let {
        narrow,
        stretch,
        padding = true,
        border,
        header,
        children
    }: {
        narrow?: boolean;
        stretch?: boolean;
        padding?: boolean;
        border?: boolean;
        header?: () => any;
        children: () => any;
    } = $props();
</script>

<div class="janice-layout-vertical" class:padding class:narrow class:stretch class:border>
    {@render header?.()}

    <div class="vertical">
        {@render children()}
    </div>
</div>

<style>
    div.janice-layout-vertical {
        display: flex;
        flex-direction: column;
    }

    div.narrow {
        display: flex;
        flex-direction: column;
        max-width: 1000px;
        margin: 0 auto;
    }

    div.stretch {
        height: 100%;
    }

    div.vertical {
        flex: 1;
    }

    div.padding div.vertical {
        padding: 0 16px 16px 16px;
    }

    div.stretch div.vertical {
        overflow: auto;
    }

    div.border div.vertical {
        border-top: 1px solid var(--border-color);
    }
</style>
