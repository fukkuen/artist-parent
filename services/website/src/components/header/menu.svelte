<script>
	import {slide, fade} from 'svelte/transition'
	import {categories} from '../../taxonomy'
	import {t, locale} from 'svelte-i18n'
	import Icon from '../ui-elements/icon.svelte'
	import {stores} from '@sapper/app'
	const {page} = stores()

	const menu = [
		{
			label: 'home_title',
			href: '/',
			desktop_only: true
		},
		{
			label: 'work_category',
			opened: true,
			children: categories.map(c => ({
				href: `/blog/category/${c.slug}/1`,
				name_hk: c.name_hk,
				name_en: c.name_en,
				num: c.num
			}))
		},
		{
			label: 'artist_page_title',
			href: '/artists'
		},
		{
			label: 'bookmark_page_title',
			href: '/bookmark',
			desktop_only: true
		},
		{
			label: 'about',
			opened: false,
			children: [
				{
					href: '/about/preface',
					name_hk: '前言(一)',
					name_en: 'Preface #1'
				},
				{
					href: '/about/preface2',
					name_hk: '前言(二)',
					name_en: 'Preface #2'
				},
				{
					href: '/about/rooftop',
					name_hk: '關於 rooftop',
					name_en: 'About rooftop'
				},
				{
					href: '/about/how-to-use',
					name_hk: '如可使用',
					name_en: 'How to use'
				}
			]
		}
	]

	const languages = [
		{
			key: 'hk',
			label: '中'
		},
		{
			key: 'en',
			label: 'ENG'
		}
	]

	const setLanguage = (key) => {
		locale.set(key)
		localStorage.setItem('lang', key)
	}
</script>

{#each menu as m}
	{#if m.children}
		<div class="cursor-pointer hover:text-orange-500 h-12 px-4 flex items-center text-orange-700 text-sm" on:click|stopPropagation={() => {m.opened = !m.opened}}>
			<div class="flex-1">{$t(m.label)}</div>
			<Icon name="right" className="w-4 transform transition {m.opened ? 'rotate-90' : 'rotate-0'}"/>
		</div>
		{#if m.opened}
			<div transition:slide class="bg-orange-300 bg-opacity-30">
				{#each m.children as c}
					<a href={c.href} class="relative h-10 px-4 flex items-center text-orange-500 hover:text-orange-700">
						{#if c.href === $page.path}
							<span class="absolute inset-y-0 left-1 bg-orange-500 w-1"></span>
						{/if}
						{#if c.num}
							<p class="mono font-bold text-xs w-8 flex-shrink-0">{c.num}</p>
						{/if}
						<p class="text-xs leading-tight">{c[`name_${$locale}`]}</p>
						<Icon name="right" className="flex-shrink-0 w-3 opacity-50 ml-2"/>
					</a>
				{/each}
			</div>
		{/if}
	{:else}
		<a href={m.href} class="h-12 px-4 flex items-center text-orange-700 text-sm hover:text-orange-500 {m.desktop_only ? 'hidden sm:flex' : ''}">
			<p>{$t(m.label)}</p>
		</a>
	{/if}
{/each}
<div class="h-12 px-4 flex items-center text-orange-700 text-sm">
	<div class="flex-1">{$t('language')}</div>
	{#each languages as l}
		<button on:click={() => {setLanguage(l.key)}} class:bg-orange-300={l.key === $locale}
		        class="text-xs flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center">{l.label}</button>
	{/each}
</div>