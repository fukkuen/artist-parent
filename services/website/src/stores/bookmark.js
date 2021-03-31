import { writable, get } from "svelte/store";

const createStore = () => {
	const store = writable([])
	const getBookmarkFromLocalstorage = () => {
		let v = localStorage.getItem('bookmark')
		v = v ? JSON.parse(v) : []
		store.set(v)
	}
	const isBookmarked = (id) => {
		return get(store).includes(id)
	}
	const toggleBookmark = (id) => {
		if (isBookmarked(id)) {
			console.log('remove')
			store.update(v => {
				v.splice(v.indexOf(id), 1)
				return v
			})
		} else {
			console.log('add')
			store.update(v => {
				return [...v, id]
			})
		}
		let v = get(store)
		localStorage.setItem('bookmark', JSON.stringify(v))
	}
	return {
		subscribe: store.subscribe,
		getBookmarkFromLocalstorage,
		toggleBookmark,
		isBookmarked
	}
}

export default createStore()