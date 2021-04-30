import {readable} from "svelte/store";
import {locale} from "svelte-i18n";

const createStore = () => {
	const store = readable([
		{
			key: 'hk',
			label: '中'
		},
		{
			key: 'en',
			label: 'ENG'
		}
	])
	const setLanguage = (language_key) => {
		locale.set(language_key)
		localStorage.setItem('lang', language_key)
	}
	return {
		subscribe: store.subscribe,
		setLanguage
	}
}

export default createStore()