<script>
	import Icon from '../ui-elements/icon.svelte'
	import Menu from './menu.svelte'
	let menu_on = false
</script>

<svelte:window on:click={() => {menu_on = false}}/>

<div class="fixed inset-x-0 bottom-0 bg-white shadow z-40">
	<div class="absolute inset-x-0 bottom-full bg-white transition transform {menu_on ? 'translate-y-0' : 'translate-y-full'}">
		<Menu/>
	</div>
	<div class="grid grid-cols-3 relative z-10 bg-white">
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