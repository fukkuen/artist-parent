<script context="module">
	export function preload({ params }) {
		const {type, slug, page} = params
		return this.fetch(`blog/category/all/1.json`).then(r => r.json());
	}
</script>

<script>
	export let posts
	import {t, locale} from 'svelte-i18n'
</script>

<div class="pb-12">
	<div class="bg-contain bg-right bg-no-repeat border-b border-gray-300" style="background-image: url('images/banner-bg-2.jpg')">
		<div class="max-w-screen-lg mx-auto px-8 py-16">
			<h1 class="text-p3 font-bold">{$t('artist_page_title')}</h1>
		</div>
	</div>

	<div class="max-w-screen-lg mx-auto py-8 px-4">
		<div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
			{#each posts as p}
				<a href="blog/{p.metadata.slug}" class="text-gray-500 flex items-center hover:text-gray-700">
					<span class="w-6 flex-shrink-0 text-sm">{p.metadata.record_no}.</span>
					<span>{p.metadata[`artist_name_${$locale}`]}</span>
				</a>
			{/each}
		</div>
	</div>
</div>