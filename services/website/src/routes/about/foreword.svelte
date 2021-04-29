<script>
	import {locale} from 'svelte-i18n'
	import Wrapper from "./_preface_wrapper.svelte"
</script>

<Wrapper slug="foreword">
	{#if $locale === 'hk'}
		TBA - hk
	{:else if $locale === 'en'}
		TBA - en
	{/if}
</Wrapper>