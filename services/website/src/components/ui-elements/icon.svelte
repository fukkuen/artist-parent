<script>
	export let name
	export let className = 'w-6'
</script>

{#if name === 'right'}
	<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="fill-current {className}"><path d="M8.444 3.086l12.877 14.91L8.445 32.922 12.014 36l15.542-18.004L12.016 0"></path></svg>
{:else if name === 'right2'}
	<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="fill-current {className}"><path d="M24.48 17.998l-16.3-16.3L9.82 0l18 17.998L9.82 36l-1.64-1.7"></path></svg>
{:else if name === 'back'}
	<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px  " viewBox="0 0 36.01 36" class="fill-current {className}"><path d="M4.53 16.756l8.38-8.383-1.64-1.697L.01 17.936 11.4 29.325l1.64-1.697-8.513-8.51 31.483-.002v-2.36"></path></svg>
{:else if name === 'share'}
	<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="fill-current {className}"><path d="M29.52 24.774c-1.698 0-3.22.756-4.25 1.945l-13.38-7.2c.135-.484.214-.992.214-1.52s-.08-1.035-.215-1.52l13.38-7.2c1.03 1.19 2.552 1.95 4.25 1.95 3.102 0 5.623-2.522 5.623-5.608 0-3.1-2.52-5.622-5.622-5.622-3.103 0-5.623 2.52-5.623 5.622 0 .527.077 1.035.215 1.52L10.724 14.33c-1.03-1.183-2.55-1.934-4.246-1.934-3.1 0-5.622 2.502-5.622 5.604 0 3.104 2.52 5.604 5.622 5.604 1.697 0 3.216-.748 4.247-1.934l13.387 7.19c-.138.483-.215.99-.215 1.517 0 3.102 2.52 5.622 5.624 5.622 3.102 0 5.623-2.522 5.623-5.623 0-3.086-2.52-5.603-5.622-5.603z"></path></svg>
{:else if name === 'love'}
	<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="fill-current {className}"><path d="M28.598 1.68C24.594.976 21.298 4.273 18 7.57 14.703 4.27 11.406.974 7.402 1.68S-1.31 7.1.338 13.22C1.986 19.345 9.992 26.88 18 34.417c8.008-7.535 16.014-15.072 17.662-21.195 1.65-6.122-3.06-10.833-7.064-11.54z"></path></svg>
{:else if name === 'close'}
	<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="fill-current {className}"><path d="M36 2.778L33.223 0 18 15.224 2.777 0 0 2.778l15.223 15.224L0 33.225 2.777 36 18 20.777 33.223 36 36 33.225 20.778 18.002" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
{/if}