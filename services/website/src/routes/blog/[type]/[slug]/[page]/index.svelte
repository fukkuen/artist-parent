<script context="module">
	export function preload({ params }) {
		const {type, slug, page} = params
		return this.fetch(`blog/${type}/${slug}/${page}.json`).then(r => r.json());
	}
</script>

<script>
	import loadMoreHandler from "../../../../../helpers/load-more-handler";
	import range from "../../../../../helpers/range";
	import {locale, t} from 'svelte-i18n'
	import TopBar from '../../../../../components/header/top-bar.svelte'

	export let posts
	export let page_number
	export let is_last
	export let total_page_count

	import { stores } from '@sapper/app';
	import {categories} from "../../../../../taxonomy";
	const { page } = stores();

	$: type = $page.params.type
	$: slug = $page.params.slug
	$: category = $page.params.type === 'category' && $page.params.slug
	$: entity = !!category ? categories.find(cat => cat.slug === category) : ''

	const getPostPreviewImage = post => `blog-posts/${
			post.metadata.createdAt.split("T")[0]
	}-${post.metadata.slug}/cover.jpg`

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
				<a href="blog/{post.metadata.slug}" class="overflow-hidden rounded">
					<div class="relative">
						<img src={getPostPreviewImage(post)} alt={post.metadata.title} class="w-full" loading="lazy">
					</div>
					<div class="bg-orange-400 px-2 py-4">

						<h3 class="text-white text-p2 leading-tight">{post.metadata[`intro_title_${$locale}`]}</h3>
						<div class="flex items-center">
							<p class="text-sm flex-1 font-bold text-orange-500">{post.metadata[`artist_name_${$locale}`]}</p>
							<div class="ml-4 flex-shrink-0 text-white">
								<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="w-4 fill-current"><path d="M31.48 19.244l-8.38 8.383 1.638 1.697L36 18.064 24.61 6.675l-1.64 1.697 8.512 8.51L0 16.886v2.36"></path></svg>
							</div>
						</div>
					</div>
				</a>
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
</div>