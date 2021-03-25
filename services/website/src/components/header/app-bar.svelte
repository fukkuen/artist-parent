<script>
	import {slide} from 'svelte/transition'
	import {categories} from '../../taxonomy'
	let menu_on = false
	import {t, locale} from 'svelte-i18n'
	console.log(t, $locale)

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

<div class="fixed inset-x-0 bottom-0 bg-white shadow">
	{#if menu_on}
		<div transition:slide>
			<div class="p-4 border-b border-gray-300">
				<p class="font-bold mb-2">{$t('work_category')}</p>
				<div class="grid grid-cols-2 gap-4">
					{#each categories as c, i}
						<div>
							<p class="font-bold mono">{i}</p>
							<p class="text-xs">{c[`name_${$locale}`]}</p>
						</div>
					{/each}
				</div>
			</div>
			<div class="p-4 grid grid-cols-2 gap-8 border-gray-300">
				{#each languages as l}
					<button on:click={() => {locale.set(l.key)}} class:bg-orange-300={l.key === $locale} class="rounded bg-gray-200 text-center py-1 text-sm">{l.label}</button>
				{/each}
			</div>
		</div>
	{/if}
	<div class="grid grid-cols-3">
		<a href="/" class="w-10 h-10 flex justify-center items-center mx-auto">
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="w-4 h-4 fill-current"><path d="M4.736 35.053V18L2.84 19.895 0 15.158 18 .948l6.632 5.235V2.605l3.79-.71v7.278L36 15.158l-2.843 4.736L31.263 18v17.053H4.736zM18 7.5L7.58 16.105V32.21h5.683V21.79h9.474v10.42h5.685V16.105L18 7.5z"></path></svg>
		</a>
		<a href="/bookmark" class="w-10 h-10 flex justify-center items-center mx-auto">
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="w-4 h-4 fill-current"><path d="M36 13.958l-12.924-1.14L18 .883l-5.076 11.933L0 13.96l9.784 8.518-2.91 12.642L18 28.448l11.126 6.672-2.91-12.642"></path></svg>
		</a>
		<button on:click={() => {menu_on = !menu_on}} class="w-10 h-10 flex justify-center items-center mx-auto">
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="w-4 h-4 fill-current"><path d="M0 5.4h36V9H0V5.4zm0 10.8h36v3.6H0v-3.6zM0 27h36v3.6H0V27z"></path></svg>
		</button>
	</div>
</div>