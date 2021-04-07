<script>
	import {onMount} from 'svelte'
	let floated = false
	import Icon from '../ui-elements/icon.svelte'
	import Menu from './menu.svelte'
	import {stores} from '@sapper/app'
	const {page} = stores()
	let menu_on = false
	import Ham from './hamburgar.svelte'

	onMount(() => {
		document.body.onscroll = () => {
			const v = 200
			let scrollTop = window.pageYOffset|| document.documentElement.scrollTop
			if (scrollTop < v && floated) {
				floated = false
			} else if (scrollTop >= v && !floated) {
				floated = true
			}
		}
		return () => {
			document.body.onscroll = () => {}
		}
	})
</script>

<svelte:window on:click={() => {menu_on = false}}/>

<nav class="hidden sm:block fixed inset-x-0 top-0 z-50 transition-colors h-12 flex items-center {!floated ? 'text-white' : 'text-orange-500'}">
	<div on:click|stopPropagation={() => {menu_on = !menu_on}}>
		<Ham open={menu_on}/>
	</div>
</nav>

<div style="width: 340px" class="hidden sm:block overflow-y-scroll pt-12 fixed z-20 top-0 bottom-0 left-0 bg-white transition transform {!menu_on ? '-translate-x-full' : 'translate-x-0'}">
	<Menu/>
</div>

{#if menu_on}
	<div on:click={() => {menu_on = false}} class="fixed inset-0 z-10 bg-black bg-opacity-30"></div>
{/if}
