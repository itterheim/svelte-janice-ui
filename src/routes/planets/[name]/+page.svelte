<script lang="ts">
    import { page } from "$app/state";
    import Card from "$lib/components/Card.svelte";
    import Header from "$lib/components/Header.svelte";
</script>

<Header title={page.params.name}></Header>
<Card padding>Something</Card>
