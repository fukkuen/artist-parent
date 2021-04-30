<script>
	import Icon from '../ui-elements/icon.svelte'
	import {t, locale} from 'svelte-i18n'
	import {categories} from "../../taxonomy";
	import {languages_store, preface_store} from "../../stores";

	const about_menu = [
		{
			label: 'about',
			href: '/about'
		},
		{
			label: 'about_rooftop_title',
			href: '/about-rooftop'
		},
		{
			label: 'how_to_use_title',
			href: '/how-to-use'
		}
	]
</script>

<div class="bg-gray-100 text-gray-500 border-t border-gray-300">
	<div class="max-w-screen-lg mx-auto px-4 pt-2 md:px-8 md:pt-4 text-xs">
		<div class="border-b border-gray-300 py-4">
			<h3 class="font-bold mb-2">{$t('about')}</h3>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
				{#each about_menu as m}
					<a class="hover:text-red-500" href={m.href}>{$t(m.label)}</a>
				{/each}
			</div>
		</div>
		<div class="border-b border-gray-300 py-4">
			<h3 class="font-bold mb-2">{$t('work_category')}</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
				{#each categories as c}
					<a class="hover:text-red-500" href="/blog/category/{c.slug}/1">{c.num}. {c[`name_${$locale}`]}</a>
				{/each}
			</div>
		</div>
		<div class="py-4">
			<div class="flex justify-center items-center">
				<div class="p-2 inline-flex items-center bg-white rounded-full border border-gray-400 shadow-inner overflow-hidden">
					<a href="https://www.facebook.com/artist.parents" target="_blank">
						<Icon name="facebook" className="w-4"/>
					</a>
					<a href="https://instagram.com/artist.parents?igshid=zjcp9iyk46h0" target="_blank">
						<Icon name="ig" className="w-4 ml-2"/>
					</a>
					<div class="px-2 font-bold">
						@artist.parents
					</div>
				</div>
				<div class="inline-flex ml-4">
					{#each $languages_store as l}
						<button on:click={() => {languages_store.setLanguage(l.key)}} class:bg-gray-300={l.key === $locale}
						        class="mx-2 font-bold text-xs flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center">{l.label}</button>
					{/each}
				</div>
			</div>
			<div class="text-center mt-4">
				© {new Date().getFullYear()} Rooftop.
			</div>
		</div>
	</div>
</div>