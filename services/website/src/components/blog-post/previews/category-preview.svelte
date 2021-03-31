<script>
	export let slug
	import {categories} from "../../../taxonomy";
	import {locale} from 'svelte-i18n'
	$: cat = categories.find(cat => cat.slug === slug)
</script>

<a href="/blog/category/{slug}/1" class="bg-orange-700 text-white p-4">
	<p class="mono text-h1 mb-8">{cat.num}</p>
	<p class="text-t1">{cat[`name_${$locale}`]}</p>
</a>