<script>
	import {t, locale} from 'svelte-i18n'
	import Icon from '../components/ui-elements/icon.svelte'
</script>

<div class="bg-cover bg-center border-b border-gray-300" style="background-image: url('/images/pattern.jpg')">
	<div class="max-w-screen-lg mx-auto px-4 sm:px-8 py-16">
		<h1 class="text-p3 font-bold">{$t('about_rooftop_title')}</h1>
	</div>
</div>

<div class="max-w-screen-lg mx-auto py-8 px-4 sm:px-8 text-gray-500">
	<div class="max-w-prose leading-loose">
		{#if $locale === 'en'}
			Founded in 2016, Rooftop Institute is a non-profit charitable arts organisation founded by artists Yim Sui Fong, Law Yuk Mui, and Professor Frank Vigneron from the Department of Fine Arts of The Chinese University of Hong Kong. Since its establishment, Rooftop Institute has been conducting artist-led pedagogical research and practice based on current social contexts, as well as Asian history and culture.
		{:else}
			天台塾是一個由藝術家嚴瑞芳、羅玉梅，以及香港中文大學藝術系主任韋一空教授於2016年創辦的非牟利慈善藝術團體。自成立以來，天台塾一直以當下社會語境及亞洲歷史文化為脈絡，進行藝術家主導的教育學研究與實踐。
		{/if}
	</div>
	<div class="h-0.5 bg-gray-300 my-8 md:my-12"></div>
	<div class="grid grid-cols-1 gap-4">
		<div><h2>{$t('contact')}</h2></div>
		<div class="inline-flex items-center">
			<Icon name="email" className="w-4 text-gray-400"/>
			<div class="ml-2 text-sm">info@rooftopinstitute.org</div>
		</div>
		<a target="_blank" href="http://www.rooftopinstitute.org" class="inline-flex items-center hover:text-red-500">
			<Icon name="website" className="w-4 text-gray-400"/>
			<div class="ml-2 text-sm">http://www.rooftopinstitute.org</div>
		</a>
	</div>
</div>