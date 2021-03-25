<script>
	import {onMount} from 'svelte'
	import {stores} from '@sapper/app'
	const {page} = stores()

	export let title
	export let text
	export let url

	let is_native_share_available = false

	const shareLinkByNative = () => {
		navigator.share({title, text, url: $page.path})
				.then(() => console.log('Successful share'))
				.catch((error) => console.log('Error sharing', error));
	}


	const onShare = () => {
		if (is_native_share_available) {
			shareLinkByNative()
		} else {

		}
	}

	onMount(() => {
		if (navigator.share) is_native_share_available = true
	})
</script>

<button on:click={onShare} class="h-10 flex items-center justify-center bg-blue-500 text-white hover:bg-blue-800">
	{#if is_native_share_available}
		分享
	{:else}
		no share function
	{/if}
</button>
