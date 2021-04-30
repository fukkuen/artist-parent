<script context="module">
	import { init, waitLocale, register } from 'svelte-i18n'

	export async function preload(page, session) {
		register('en', () => import('../locales/en.js'))
		register('hk', () => import('../locales/hk.js'))
		let lang_query = page.query.lang
		if (!['en', 'hk'].includes(lang_query)) lang_query = null
		const initialLocale = lang_query || 'hk'
		init({
			fallbackLocale: 'en',
			initialLocale
		})
		return waitLocale()
	}
</script>

<script>
  import AppBar from "../components/header/app-bar.svelte";
  import Footer from "../components/header/footer.svelte";
  import DesktopMenu from "../components/header/desktop-menu.svelte";
  import TailwindCSS from "../components/tailwindcss.svelte";
  import {bookmarkStore} from '../stores'
  import {onMount} from 'svelte'
  import {locale} from 'svelte-i18n'

  export let segment;

  onMount(() => {
	  bookmarkStore.getBookmarkFromLocalstorage()
	  let lang = localStorage.getItem('lang')
	  if (lang) locale.set(lang)
  })
</script>

<TailwindCSS />

<DesktopMenu/>
<main>
	<slot></slot>
</main>

<Footer/>
<AppBar/>