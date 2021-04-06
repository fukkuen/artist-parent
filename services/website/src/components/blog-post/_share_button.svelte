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
		<div id="fb-root"></div>
		<script>(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));</script>

		<!-- Your share button code -->
<!--		https:// + $page.host + $page.path-->
		<div class="fb-share-button"
		     data-href="https://artist-parent.vercel.app/blog/instructionology"
		     data-layout="button_count">
		</div>
	{/if}
</button>
