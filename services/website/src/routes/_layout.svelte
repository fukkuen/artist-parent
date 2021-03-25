<script context="module">
	import { init, waitLocale, register } from 'svelte-i18n'

	export async function preload(page, session) {
		register('en', () => import('../locales/en.js'))
		register('hk', () => import('../locales/hk.js'))
		let lang_query = page.query.lang
		if (!['en', 'hk'].includes(lang_query)) lang_query = null
		const initialLocale = lang_query || 'en'
		init({
			fallbackLocale: 'en',
			initialLocale
		})
		return waitLocale()
	}
</script>

<script>
  import AppBar from "../components/header/app-bar.svelte";
  import TailwindCSS from "../components/tailwindcss.svelte";

  export let segment;
</script>

<TailwindCSS />

<main>
	<slot></slot>
</main>

<AppBar/>