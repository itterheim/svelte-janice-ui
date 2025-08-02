<script lang="ts">
    import { goto } from "$app/navigation";
    import { Input, IconButton, Select, Table, Button } from "$lib";
    import Card from "$lib/components/Card.svelte";
    import { Search, Eraser } from "@lucide/svelte";

    const rows: any[] = $state([]);
    for (let i = 0; i < 100; i++) {
        rows.push({ id: i, one: "One", two: "Two" });
    }

    const expanded: number[] = $state([]);
    function toggleExpanded(row: number) {
        const i = expanded.indexOf(row);
        if (i == -1) {
            expanded.push(row);
        } else {
            expanded.splice(i, 1);
        }
    }
</script>

<Card identificator="ftc">
    {#snippet middle()}
        <Input name="search" placeholder="search"></Input>
        <IconButton Icon={Search}></IconButton>
    {/snippet}

    {#snippet filter()}
        <Select name="filter1" label="Filter 1">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </Select>
        <Select name="filter2" label="Filter 2">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </Select>
        <Select name="filter2" label="Filter 3">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </Select>

        <div class="buttons">
            <IconButton Icon={Eraser}></IconButton>
        </div>
    {/snippet}

    <Table sticky>
        <thead>
            <tr>
                <th>Id</th>
                <th>One</th>
                <th>Two</th>
                <th>Three</th>
                <th>Four</th>
            </tr>
        </thead>
        <tbody>
            {#each rows as row, i}
                <tr
                    onclick={() => toggleExpanded(i)}
                    class="row"
                    class:selected={expanded.includes(i)}
                >
                    <td>{row.id}</td>
                    <td>{row.one}</td>
                    <td>{row.two}</td>
                    <td>3</td>
                    <td>4</td>
                </tr>
                {#if expanded.includes(i)}
                    <tr class="detail" onclick={() => toggleExpanded(i)}>
                        <td colspan="5">
                            some kind of detail about this row
                            <Button
                                Icon={Search}
                                label="Detail"
                                onclick={(e) => {
                                    e.stopPropagation();
                                    // selected = i;
                                    goto("/horizontal/detail?id=" + row.id);
                                }}
                            ></Button>
                        </td>
                    </tr>
                {/if}
            {/each}
        </tbody>
    </Table>
</Card>

<style>
    :global(.ftc div.filter div.input) {
        flex: 1;
        max-width: 400px;
    }

    :global(.ftc div.filter) div.buttons {
        display: flex;
        flex-direction: row;
    }

    :global(.ftc .janice-table tr.row:hover) {
        background-color: var(--crust);
    }

    :global(.ftc .janice-table) tr.selected td {
        border-bottom: none;
    }

    @media (max-width: 800px) {
        :global(.ftc div.filter div.input) {
            max-width: unset;
        }

        :global(.ftc div.filter) div.buttons {
            justify-content: flex-end;
        }
    }
</style>
