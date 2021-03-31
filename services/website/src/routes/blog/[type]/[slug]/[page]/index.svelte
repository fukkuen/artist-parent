<script context="module">
	export function preload({ params }) {
		const {type, slug, page} = params
		return this.fetch(`blog/${type}/${slug}/${page}.json`).then(r => r.json());
	}
</script>

<script>
	import range from "../../../../../helpers/range";
	import { stores } from '@sapper/app';
	import {categories} from "../../../../../taxonomy";
	const { page } = stores();
	import {locale, t} from 'svelte-i18n'
	import TopBar from '../../../../../components/header/top-bar.svelte'
	import Preview from '../../../../../components/blog-post/previews/index.svelte'
	import CatPreview from '../../../../../components/blog-post/previews/category-preview.svelte'

	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	export let posts
	posts = shuffle(posts)
	let cat_previews = categories.map((c,i) => ({
		slug: c.slug,
		pos: (i + 1) * 5
	}))
	cat_previews.forEach(p => {
		posts.splice(p.pos, 0, p.slug)
	})

	$: type = $page.params.type
	$: slug = $page.params.slug
	$: category = $page.params.type === 'category' && $page.params.slug
	$: entity = !!category ? categories.find(cat => cat.slug === category) : ''

	const getPostPreviewImage = post => `blog-posts/${
			post.metadata.createdAt.split("T")[0]
	}-${post.metadata.slug}/cover.jpg`
</script>

<div class="mb-4">
{#if entity}
	<TopBar/>
	<div class="bg-orange-700 text-white px-6 py-10">
		<div class="mb-2 flex items-center">{$t('work_category')}: <span class="mono text-t1 ml-2">{entity.num}</span></div>
		<h1 class="text-p3 leading-tight">{entity.name_hk}</h1>
	</div>
{:else}
	<div class="h-48 bg-orange-500 text-white">
		<div class="max-w-screen-lg mx-auto">
			<div class="self-center p-8 text-t1">
				<p>HOME</p>
			</div>
		</div>
	</div>
{/if}
</div>

<div class="px-2">
	{#if posts && posts.length}
		<div class="grid gap-2">
			{#each posts as post, i}
				{#if typeof post === 'string'}
					<CatPreview slug={post}/>
				{:else}
					<Preview {post}/>
				{/if}
			{/each}
		</div>
	{:else}
		Not found
	{/if}

	<a href="blog/category/{slug}/1" class="w-4 h-4">link</a>
</div>