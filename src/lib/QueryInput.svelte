<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
    import { onMount } from 'svelte';

    export let submitOnEnter: any
    export let disabled: boolean

    let userInput: string = ''
    let show: boolean = false

    onMount(() => {
		show = true
	});

    function handleKeyDown(event: any) {
        if (event.keyCode === 13 && !event.shiftKey) {
            event.preventDefault();
            submitOnEnter(userInput);
        }
    }
</script>


<style lang="scss">
    textarea, section {
        @apply rounded-md 
        transition-all 
        duration-200
        mb-5;
    }
    section {
        @apply flex 
            gap-2 
            row-span-1 
            bg-gradient-to-r 
            from-blue-500 
            to-purple-500 
            bg-clip-padding
            p-1
            sticky
            bottom-0
    }
    textarea {
        @apply 
        h-32 
        resize-none 
        w-full 
        bg-gray-900
        mb-10
        p-3;
    }
    textarea:focus {
        outline: none;
    }
    section:has(textarea:focus) {
        @apply shadow-mlc;

    }
</style>

{#if show}
<section 
    transition:slide={{
        delay: 250, 
        duration: 1900, 
        easing: quintOut, 
        axis: 'y',
    }}
>
    <textarea 
        class="" 
        name="userInput"
        placeholder={`
        Find places you should travel to based on your interest! 
        Enter what you want to do on your trip`}
        {disabled}
        bind:value={userInput}
        on:keydown={handleKeyDown} 
    />
</section>
{/if}