<script context="module">
	export function preload({ params }) {
		const {type, slug, page} = params
		return this.fetch(`blog/${type}/${slug}/${page}.json`).then(r => r.json());
	}
</script>

<script>
	import { stores } from '@sapper/app';
	import {categories} from "../../../../../taxonomy";
	const { page } = stores();
	import {locale, t} from 'svelte-i18n'
	import TopBar from '../../../../../components/header/top-bar.svelte'
	import Preview from '../../../../../components/blog-post/previews/index.svelte'
	import {onMount} from 'svelte'

	export let posts

	$: type = $page.params.type
	$: slug = $page.params.slug
	$: category = $page.params.type === 'category' && $page.params.slug
	$: entity = !!category ? categories.find(cat => cat.slug === category) : ''

	let masonry_container_el
	let masonry_instance

	const getPostPreviewImage = post => `blog-posts/${
			post.metadata.createdAt.split("T")[0]
	}-${post.metadata.slug}/cover.jpg`

	onMount(() => {
		masonry_instance = new Masonry( masonry_container_el, {
			itemSelector: '.masonry-item',
			columnWidth: '.masonry-sizer',
			percentPosition: true,
			initLayout: false
		})
		return () => {
			masonry_instance.destroy()
		}
	})
	
	const onLoad = () => {
		console.log('cliff: ', 'onload')
		masonry_instance.layout()
	}
</script>

<div class="bg-white">
	{#if entity}
		<TopBar/>
		<div class="bg-cover bg-center border-b border-gray-300" style="background-image: url('images/pattern.jpg')">
			<div class="max-w-screen-xl mx-auto px-4 py-16 md:px-6">
				<div class="mb-4 flex items-center">
					<span class="text-sm sm:text mt-2">{$t('work_category')}</span>
					<span class="text-t1 ml-2">{entity.num}</span>
				</div>
				<h1 class="text-p2 sm:text-p3 leading-tight">{entity[`name_${$locale}`]}</h1>
			</div>
		</div>
	{:else}
		<div class="bg-cover bg-center md:h-72 relative" style="background-image: url('images/banner-bg.png')">
			<div class="block sm:hidden" style="padding-top: 75%"></div>
			<div class="hidden sm:block md:hidden" style="padding-top: 56%"></div>
			<div class="absolute inset-0 flex items-center justify-center">
				<img src="images/banner-text.png" alt="banner-text" class="h-2/3 md:h-3/4 lg:h-5/6">
			</div>
		</div>
	{/if}

	<div class="max-w-screen-xl mx-auto px-2 py-4 sm:px-4 sm:py-8">
		{#if posts && posts.length}
			<div bind:this={masonry_container_el} class="flex flex-wrap">
				<div class="masonry-sizer"></div>
				{#each posts as post, i}
					<div class="masonry-item">
						<Preview on:load={onLoad} {post}/>
					</div>
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

<style>
	.masonry-sizer, .masonry-item {
			width: 25%;
			padding: 2%;
	}

  @media (max-width: 1024px) {
      .masonry-sizer, .masonry-item {
          width: 33%;
          padding: 2%;
      }
  }

	@media (max-width: 600px) {
      .masonry-sizer, .masonry-item {
          width: 50%;
          padding: 2%;
      }
  }

  @media (max-width: 400px) {
      .masonry-sizer, .masonry-item {
          width: 50%;
          padding: 1%;
      }
  }
</style>
