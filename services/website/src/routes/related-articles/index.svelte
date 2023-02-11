<script>
	import {media_list} from "../../taxonomy";
	import {locale} from "svelte-i18n";
	import dayjs from 'dayjs'
</script>

{#each media_list as media}
	<a class="block my-4" href="related-articles/{media.slug}">
		<div>{media[`name_${$locale}`]}</div>
		<div class="text-sm text-gray-500">{dayjs(media.date).format('DD MMM YYYY')}</div>
	</a>
{/each}