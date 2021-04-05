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
	<div class="bg-orange-500 text-white mb-1">
		<div class="max-w-screen-lg mx-auto px-8 py-16">
			<h1 class="text-p3 font-bold">{$t('artist_page_title')}</h1>
		</div>
	</div>

	<div class="max-w-screen-lg mx-auto py-8 px-4">
		<div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
			{#each posts as p}
				<a href="blog/{p.metadata.slug}" class="text-orange-500">
					{p.metadata.record_no} {p.metadata[`artist_name_${$locale}`]}
				</a>
			{/each}
		</div>
	</div>
</div>