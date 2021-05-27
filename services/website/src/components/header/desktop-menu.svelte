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

<nav class="{floated ? 'bg-white border-b border-gray-300 shadow-lg' : ''} absolute inset-x-0 top-0 z-50 transition-colors hidden sm:grid grid-cols-3 h-12 items-center">
	<div on:click|stopPropagation={() => {menu_on = !menu_on}} class="inline transform scale-75">
		<Ham open={menu_on}/>
	</div>
	<div class="flex justify-center">
<!--	<a href="/"><img src="/images/icon.png" class="w-10" alt="logo"></a>	-->

	</div>
	<div></div>
</nav>

<div style="width: 340px" class="hidden sm:block overflow-y-scroll pt-12 fixed z-50 top-0 bottom-0 left-0 bg-white transition transform {!menu_on ? '-translate-x-full' : 'translate-x-0'}">
	<Menu/>
</div>

{#if menu_on}
	<div on:click={() => {menu_on = false}} class="fixed inset-0 z-10 bg-black bg-opacity-30"></div>
{/if}
