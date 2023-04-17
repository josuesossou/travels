<script lang="ts">
  import "./app.css";
  import QueryInput from "./lib/QueryInput.svelte";
  import openaiQuery from "./api/openai";
  import Places from "./lib/Places.svelte";

  import { writable } from "svelte/store";
  import type { Place } from "./types";

  let placesW = writable<Place[]>([])
  let isLoading: boolean = false

  function submitOnEnter(userInput: string) {
    isLoading = true
    openaiQuery(userInput).then(result => {
      placesW.set(result)
      isLoading = false
    })
  }
</script>

<style>
  main {
    @apply 
    mx-auto 
    max-w-5xl 
    h-screen 
    flex
    flex-col
    p-2 
    relative;
  }
  h1 {
    @apply text-2xl;
  }
</style>

<main>
  <h1>Travel Places</h1>
  {#if isLoading}
    <p class="flex-1">Loading</p>
  {:else}
    <Places places={$placesW} />
  {/if}
  <QueryInput {submitOnEnter} disabled={isLoading} />
</main>


