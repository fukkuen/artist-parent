<script>
	import {slide, fade} from 'svelte/transition'
	import {categories} from '../../taxonomy'
	let menu_on = false
	import {t, locale} from 'svelte-i18n'
	import Icon from '../ui-elements/icon.svelte'
	import {stores} from '@sapper/app'
	const {page} = stores()

	const menu = [
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
			label: 'about',
			opened: false,
			children: [
				{
					href: '/about/preface',
					name_hk: '前言(一)',
					name_en: 'Preface #1'
				},
				{
					href: '/about/preface',
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
</script>

<svelte:window on:click={() => {menu_on = false}}/>

<div class="fixed inset-x-0 bottom-0 bg-white shadow z-40">
	{#if menu_on}
		<div in:fade>
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
					<a href={m.href} class="h-12 px-4 flex items-center text-orange-700 text-sm hover:text-orange-500">
						<p>{$t(m.label)}</p>
					</a>
				{/if}
			{/each}
			<div class="h-12 px-4 flex items-center text-orange-700 text-sm">
				<div class="flex-1">{$t('language')}</div>
				{#each languages as l}
					<button on:click={() => {locale.set(l.key)}} class:bg-orange-300={l.key === $locale}
					        class="text-xs flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center">{l.label}</button>
				{/each}
			</div>
		</div>
	{/if}
	<div class="grid grid-cols-3">
		<a href="/" class="w-10 h-10 flex justify-center items-center mx-auto">
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="w-4 h-4 fill-current"><path d="M4.736 35.053V18L2.84 19.895 0 15.158 18 .948l6.632 5.235V2.605l3.79-.71v7.278L36 15.158l-2.843 4.736L31.263 18v17.053H4.736zM18 7.5L7.58 16.105V32.21h5.683V21.79h9.474v10.42h5.685V16.105L18 7.5z"></path></svg>
		</a>
		<a href="/bookmark" class="w-10 h-10 flex justify-center items-center mx-auto">
			<Icon className="w-4" name="love"/>
		</a>
		<button on:click|stopPropagation={() => {menu_on = !menu_on}} class="w-10 h-10 flex justify-center items-center mx-auto">
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="w-4 h-4 fill-current"><path d="M0 5.4h36V9H0V5.4zm0 10.8h36v3.6H0v-3.6zM0 27h36v3.6H0V27z"></path></svg>
		</button>
	</div>
</div>