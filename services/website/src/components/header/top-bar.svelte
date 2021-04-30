<script>
	import {goto} from '@sapper/app'

	const onBack = () => {
		if (history.state.id > 1) {
			history.back()
		} else {
			goto('/')
		}
	}
</script>

<button on:click={onBack} class="absolute top-0 left-0 h-10 w-10 flex sm:hidden items-center justify-center rounded-full">
	<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="fill-current w-4 h-4"><path d="M16.948 34.947l2.937-2.937L7.947 20.072H36v-4.15H7.947L19.885 3.984l-2.937-2.93L0 17.997"></path></svg>
</button>