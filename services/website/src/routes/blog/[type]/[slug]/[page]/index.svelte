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


	export let posts
	// posts = shuffle(posts)

	let cat_previews = categories.map((c,i) => ({
		slug: c.slug,
		pos: (i + 1) * 5
	}))
	cat_previews.forEach(p => {
		//posts.splice(p.pos, 0, p.slug)
	})

	$: type = $page.params.type
	$: slug = $page.params.slug
	$: category = $page.params.type === 'category' && $page.params.slug
	$: entity = !!category ? categories.find(cat => cat.slug === category) : ''
	$: {
		console.log(category)
		reload = true
		setTimeout(() => {
			reload = false
		}, 1)
	}

	let reload = false

	const getPostPreviewImage = post => `blog-posts/${
			post.metadata.createdAt.split("T")[0]
	}-${post.metadata.slug}/cover.jpg`
</script>

<div class="bg-gray-200">
	{#if entity}
		<TopBar/>
		<div class="bg-cover bg-center border-b border-gray-300" style="background-image: url('/images/pattern.jpg')">
			<div class="max-w-screen-xl mx-auto px-4 py-10 md:px-6 md:py-10">
				<div class="mb-2 flex items-center">
					<span class="text-sm sm:text mt-2">{$t('work_category')}</span>
					<span class="mono text-t1 ml-2">{entity.num}</span>
				</div>
				<h1 class="text-p2 sm:text-p3 leading-tight">{entity[`name_${$locale}`]}</h1>
			</div>
		</div>
	{:else}
		<div class="bg-cover bg-center md:h-72" style="background-image: url('/images/banner_1024.png')">
			<div class="block sm:hidden" style="padding-top: 75%"></div>
			<div class="hidden sm:block md:hidden" style="padding-top: 56%"></div>
		</div>
	{/if}

	<div class="max-w-screen-xl mx-auto px-2 py-4 sm:px-4 sm:py-8">
		{#if posts && posts.length}
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
				{#each posts as post, i}
					<Preview {post}/>
				{/each}
			</div>
		{:else}
			Not found
		{/if}
	</div>
</div>

<svelte:head>
	<title>{$t('site_title')}</title>
	<meta name="description" content={$t('site_desc')}>
</svelte:head>