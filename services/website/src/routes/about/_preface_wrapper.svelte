<script>
	import {t, locale} from 'svelte-i18n'
	import Icon from '../../components/ui-elements/icon.svelte'
	import {preface_store} from "../../stores"
	import {stores} from '@sapper/app'
	const {page} = stores()
	import SEO from '../../components/seo/head.svelte'

	export let slug
	$: current_page = $preface_store.find(p => p.slug === slug) || {}
	$: other_pages = $preface_store.filter(p => p.slug !== slug)
</script>

<div class="bg-cover bg-center border-b border-gray-300" style="background-image: url('images/pattern.jpg')">
	<div class="max-w-screen-lg mx-auto px-8 py-16">
		<h1 class="text-p3 font-bold mb-4">
			{current_page[`name_${$locale}`]}
		</h1>
		<div class="text-gray-500 text-sm">
			<p class="font-bold">{current_page[`author_${$locale}`]}</p>
			<p>{current_page[`author_desc_${$locale}`]}</p>
		</div>
	</div>
</div>

<div class="bg-gray-100">
	<div class="max-w-screen-lg mx-auto px-4 sm:px-8 py-4 md:py-8">
		<div class="text text-gray-500 prose max-w-screen-md">
			<slot/>
		</div>
	</div>
</div>

<div class="bg-gray-200">
	<div class="max-w-screen-lg mx-auto px-4 sm:px-8 py-4">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
			{#each other_pages as p}
				<a href="about/{p.slug}" class="bg-white shadow rounded p-4 flex flex-col border border-gray-100 hover:border-gray-300">
					<h3 class="text font-bold mb-8 leading-tight">{p[`name_${$locale}`]}</h3>
					<div class="flex items-center text-sm">
						<p class="mt-auto">{p[`author_${$locale}`]}</p>
						<div class="flex-1"></div>
						<Icon className="w-4" name="right"/>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>

<SEO title={current_page.name_hk + ' | ' + current_page.name_en} description={current_page.author_hk}/>