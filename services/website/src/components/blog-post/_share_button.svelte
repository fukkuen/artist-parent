<script>
	import {onMount} from 'svelte'
	import {stores} from '@sapper/app'
	import Icon from '../ui-elements/icon.svelte'
	import {t} from 'svelte-i18n'
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

<button on:click={onShare} class="bg-white bg-opacity-70 hover:bg-opacity-100 text-orange-500 font-bold w-full rounded h-10 flex items-center justify-center">
	{#if is_native_share_available}
		<Icon name="share"/>
		<span class="ml-2">{$t('share')}</span>
	{:else}
		<div class="fb-share-button" data-href="{$page.host + $page.path}" data-layout="button" data-size="large">
			<a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
			   class="fb-xfbml-parse-ignore">{$t('share')}
			</a>
		</div>
	{/if}
</button>
