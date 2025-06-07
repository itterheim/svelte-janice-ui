import { client } from '$lib/stores/client.svelte.js';
import type { PageLoad } from './$types.js';

export const load: PageLoad = ({ params }) => {
    console.log(client);

    return {
        post: {
            title: `Title for ${params} goes here`,
            content: `Content for ${params} goes here`
        },
        numbers: prepareData(),
    };
};

async function prepareData(): Promise<number[]> {
    return [1, 2, 3, 4, 5];
}