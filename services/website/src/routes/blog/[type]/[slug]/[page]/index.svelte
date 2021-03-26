<script context="module">
	export function preload({ params }) {
		const {type, slug, page} = params
		return this.fetch(`blog/${type}/${slug}/${page}.json`).then(r => r.json());
	}
</script>

<script>
	import Preview from '../../../../../components/blog-post/previews/index.svelte'
	import loadMoreHandler from "../../../../../helpers/load-more-handler";
	import range from "../../../../../helpers/range";

	export let posts
	export let page_number
	export let is_last
	export let total_page_count
	console.log(posts)

	import { stores } from '@sapper/app';
	import {categories} from "../../../../../taxonomy";
	const { page } = stores();

	$: type = $page.params.type
	$: slug = $page.params.slug
	$: category = $page.params.type === 'category' && $page.params.slug
	$: entity = !!category ? categories.find(cat => cat.slug === category) : ''
	const loadMore = async () => {
		try {
			page_number = Number(page_number) + 1
			const res = await fetch(`blog/${type}/${slug}/${page_number}.json`)
			const data = await res.json()
			const new_posts = data.posts
			is_last = data.is_last
			posts = [...posts, ...new_posts]
		} catch (e) {}
	}
</script>

{#if entity}
	<div class="bg-orange-500 text-white p-8">
		<p>分類:</p>
		<h1 class="text-t1">{entity.name_hk}</h1>
	</div>
{/if}

{#if posts && posts.length}
	<div class="grid grid-cols-2 gap-4">
		{#each posts as post}
			<Preview {post}/>
		{/each}
	</div>
	{#if !is_last}
		<div use:loadMoreHandler={loadMore} class="text-center my-4">更多...</div>
	{/if}
{:else}
	Not found
{/if}

{#each range(0,total_page_count) as i}
	<a href="blog/{type}/{slug}/{i}" class="w-4 h-4">{i}</a>
{/each}

