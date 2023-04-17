<script lang="ts">
    import PlacesCard from "./PlacesCard.svelte";
    import {nanoid} from 'nanoid'
    import type { Place } from "../types";

	export let places: Place[];
</script>

<style>
    section {
        @apply flex flex-col gap-2 flex-1;
    }
</style>

<section>
    {#each places as place (nanoid(3))}
        {#if place.title.includes('Error')}
            <PlacesCard
                place={{title: '', desc: 'Unable to parse interest'}}
            />
        {/if}
        {#if place.desc}
            <PlacesCard {place} />
        {/if}
    {/each}
</section>