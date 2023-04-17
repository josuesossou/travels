    <script lang="ts">
        import { slide } from "svelte/transition";
        import type { Place } from "../types";
        import { quintOut } from "svelte/easing";
        export let place : Place = null
    </script>
    
    <style>
        button {
            @apply w-full 
            text-left
            bg-gray-700
            p-5
            my-2
            text-gray-300
            h-max;

        }
        div {
            @apply px-4 py-2;
        }
        h2 {
            @apply text-xl font-medium mb-2;
        }
        p {
            @apply text-lg;
        }
    </style>
    {#if place}
        <button 
            class="card"
            transition:slide={{
                delay: 250, 
                duration: 900, 
                easing: quintOut, 
                axis: 'y',
            }}
        >
            <div>
                <h2>{place.title}</h2>
                <p>{place.desc}</p>
            </div>
        </button>
    {/if}