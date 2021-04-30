<script>
	import Icon from '../ui-elements/icon.svelte'
	import Menu from './menu.svelte'
	import Ham from './hamburgar.svelte'
	import {stores} from '@sapper/app'
	const {page} = stores()
	let menu_on = false
	let off_screen = false

	const onScroll = () => {
		let el = document.documentElement
		if (el.scrollHeight - 1000 >= el.scrollTop) {
			off_screen = false
		} else {
			off_screen = true
		}
	}
</script>

<svelte:window on:scroll={onScroll} on:click={() => {menu_on = false}}/>

<div class="{off_screen ? 'translate-y-20' : 'translate-y-0'} transform transition-transform fixed inset-x-0 bottom-0 bg-white shadow z-40 block sm:hidden py-1">
	<div style="max-height: 80vh" class="overflow-y-scroll absolute inset-x-0 bottom-full bg-white transition transform {menu_on ? 'translate-y-0' : 'translate-y-full'}">
		<Menu/>
	</div>
	<div class="grid grid-cols-3 relative z-10 bg-white text-gray-500">
		<a href="/" class="w-8 h-8 flex justify-center items-center mx-auto rounded-full {$page.path === '/blog/category/all/1' ? 'bg-gray-200 text-red-500' : ''}">
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="w-4 h-4 fill-current"><path d="M4.736 35.053V18L2.84 19.895 0 15.158 18 .948l6.632 5.235V2.605l3.79-.71v7.278L36 15.158l-2.843 4.736L31.263 18v17.053H4.736zM18 7.5L7.58 16.105V32.21h5.683V21.79h9.474v10.42h5.685V16.105L18 7.5z"></path></svg>
		</a>
		<a href="/bookmark" class="w-8 h-8 flex justify-center items-center mx-auto rounded-full {$page.path === '/bookmark' ? 'bg-gray-200 text-red-500' : ''}">
			<Icon className="w-4" name="love"/>
		</a>
		<button on:click|stopPropagation={() => {menu_on = !menu_on}} class="w-8 h-8 flex justify-center items-center mx-auto transform scale-75">
			<Ham open={menu_on}/>
		</button>
	</div>
</div>