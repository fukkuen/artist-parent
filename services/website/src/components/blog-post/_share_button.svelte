<script>
	import {onMount} from 'svelte'
	import Icon from '../ui-elements/icon.svelte'
	import {t} from 'svelte-i18n'
	import {stores} from '@sapper/app'
	const {page} = stores()
	import {fade, fly} from 'svelte/transition'

	export let title
	export let text
	let url = 'https://'+ $page.host + '/artistparents' + $page.path
	let opened = false
	let input_el
	let copied = false

	let is_native_share_available = false

	const shareLinkByNative = () => {
		navigator.share({title, text, url})
				.then(() => console.log('Successful share'))
				.catch((error) => console.log('Error sharing', error));
	}


	const onShare = () => {
		if (is_native_share_available) {
			shareLinkByNative()
		} else {
			opened = true
		}
	}

	const copyLink = () => {
		input_el.select()
		document.execCommand("copy")
		copied = true
	}

	const onClose = () => {
		opened = false
		copied = false
	}

	onMount(() => {
		if (navigator.share) is_native_share_available = true
	})
</script>

<button on:click={onShare} class="shadow-inner border border-gray-300 hover:border-red-500 bg-white font-bold w-full rounded h-10 flex items-center justify-center">
	<Icon name="share"/>
	<span class="ml-2">{$t('share')}</span>
</button>

{#if opened}
	<div transition:fade on:click={onClose} class="fixed inset-0 bg-black bg-opacity-30 z-10"></div>

	<div transition:fly={{y: 20}} class="p-8 fixed inset-x-0 top-8 max-w-xs mx-auto mt-24 bg-white z-20 rounded">
		<div class="mb-4 flex justify-between">
			<p class="text-center">{$t('share')}</p>
			<button on:click={onClose} class="w-8 h-8 flex items-center justify-center"><Icon name="close" className="w-3"/></button>
		</div>
		<div class="grid grid-cols-2 text-center">
			<a href="https://www.facebook.com/sharer/sharer.php?u={url}" target="_blank">
				<Icon name="facebook" className="w-12 mx-auto"/>
				<span class="mt-3 text-xs">Facebook</span>
			</a>
			<a target="_blank" href="https://twitter.com/share?url={url}&text={title}!">
				<Icon name="twitter" className="w-12 mx-auto"/>
				<span class="mt-3 text-xs">Twitter</span>
			</a>
		</div>
		<div class="mt-4" on:click={copyLink}>
			<input bind:this={input_el} value="{url}" readonly class="{copied ? 'text-white bg-orange-400' : 'bg-gray-200 text-orange-500'} w-full cursor-pointer px-4 py-2 overflow-hidden text-overflow-ellipsis whitespace-nowrap text-sm rounded">
			<p class="text-xs text-center mt-1 opacity-80">{$t(copied ? 'link_copied' : 'tap_to_copy_link')}</p>
		</div>
</div>
{/if}

