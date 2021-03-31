<script context="module">
	export function preload({ params }) {
		const {type, slug, page} = params
		return this.fetch(`blog/category/all/1.json`).then(r => r.json());
	}
</script>

<script>
	export let posts
	import {bookmarkStore} from "../../stores";
	import Preview from '../../components/blog-post/previews/index.svelte'
	import {t} from 'svelte-i18n'

	let saved = $bookmarkStore
	console.log(saved)
	let saved_posts = posts.filter(p => {
		return saved.includes(p.metadata.record_no)
	})
</script>

<div class="bg-orange-500 text-white">
	<div class="max-w-screen-lg mx-auto px-8 py-16">
		<h1 class="text-p3 font-bold">{$t('bookmark_page_title')}</h1>
	</div>
</div>

<div class="max-w-screen-lg mx-auto mx-2">
	{#if saved_posts.length}
		{#each saved_posts as post}
			<Preview {post}/>
		{/each}
	{:else}
		<div class="text-center py-16">
			{$t('bookmark_page_no_record')}
		</div>
	{/if}
</div>