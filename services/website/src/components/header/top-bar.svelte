<script>
	import {t} from 'svelte-i18n'
	import {onMount} from 'svelte'
	let floated = false

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

<nav class="fixed inset-x-0 top-0 z-50 transition-colors" class:bg-white={floated} class:shadow-lg={floated}>
	<div class="max-w-screen-xl mx-auto h-10">
		<button on:click={() => {history.back()}} class="h-10 w-10 flex items-center justify-center rounded-full text-white" class:text-gray-500={floated}>
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="fill-current w-4 h-4"><path d="M16.948 34.947l2.937-2.937L7.947 20.072H36v-4.15H7.947L19.885 3.984l-2.937-2.93L0 17.997"></path></svg>
		</button>
	</div>
</nav>