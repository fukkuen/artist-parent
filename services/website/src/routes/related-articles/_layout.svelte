<script>
	import {t} from 'svelte-i18n'
	import {stores} from '@sapper/app'
	const {page} = stores()
	console.log($page)
	$: is_index = $page.path.split('/').pop() === 'related-articles'
</script>
{#if is_index}
<div class="bg-contain bg-right bg-no-repeat border-b border-gray-300" style="background-image: url('images/banner-bg-2.jpg')">
	<div class="max-w-screen-lg mx-auto px-4 sm:px-8 py-16">
		<h1 class="text-p3 font-bold">{$t('related_articles')}</h1>
	</div>
</div>
{/if}
<div class="bg-gray-100">
	<div class="max-w-screen-lg mx-auto px-4 sm:px-8 {is_index ? 'pt-4' : 'pt-20'} pb-4 md:pb-8">
		<div class="text text-gray-500 prose max-w-screen-md">
			<slot/>
		</div>
	</div>
</div>
