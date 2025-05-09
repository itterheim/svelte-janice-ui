<script lang="ts">
    let {
        icon,
        small
    }: {
        icon: string;
        small?: boolean;
    } = $props();
</script>

<span class="material-symbols-rounded" class:small>{icon}</span>

<style>
    .material-symbols-rounded {
        font-variation-settings:
            "FILL" 0,
            "wght" 400,
            "GRAD" 0,
            "opsz" 24;
    }

    span {
        display: block;
        color: inherit;
    }

    .small.material-symbols-rounded {
        font-variation-settings:
            "FILL" 0,
            "wght" 400,
            "GRAD" 0,
            "opsz" 22;
    }

    span.small {
        font-size: 22px;
    }
</style>
