<script context="module">
	export function preload({ params }) {
		const {type, slug, page} = params
		return this.fetch(`blog/category/all/1.json`).then(r => r.json());
	}
</script>

<script>
	export let posts
	import {bookmarkStore} from "../../stores";
	import Preview from '../../components/blog-post/previews/list-view.svelte'
	import {t} from 'svelte-i18n'

	$: saved_posts = posts.filter(p => {
		return $bookmarkStore.includes(p.metadata.record_no)
	})
</script>

<div class="pb-12 bg-gray-200">
	<div class="bg-contain bg-right bg-no-repeat border-b border-gray-300 bg-white" style="background-image: url('images/banner-bg-2.jpg')">
		<div class="max-w-screen-lg mx-auto px-8 py-16">
			<h1 class="text-p3 font-bold">{$t('bookmark_page_title')}</h1>
		</div>
	</div>

	<div class="max-w-screen-lg mx-auto mx-2 pt-4 md:pt-8">
		{#if saved_posts.length}
			<div class="grid gap-1 sm:gap-2">
				{#each saved_posts as post}
					<Preview {post}/>
				{/each}
			</div>
		{:else}
			<div class="text-center py-16">
				{$t('bookmark_page_no_record')}
			</div>
		{/if}
	</div>
</div>