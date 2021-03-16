<script>
	export let name
	export let className = 'w-6'
</script>

{#if name === 'right'}
	<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="fill-current {className}"><path d="M36 18L20.484 6.068v7.545H0v8.774h20.484v7.545"></path></svg>
{:else if name === 'back'}
	<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px  " viewBox="0 0 36.01 36" class="fill-current {className}"><path d="M4.53 16.756l8.38-8.383-1.64-1.697L.01 17.936 11.4 29.325l1.64-1.697-8.513-8.51 31.483-.002v-2.36"></path></svg>
{/if}