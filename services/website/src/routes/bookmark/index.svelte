<script context="module">
	export function preload({ params }) {
		const {type, slug, page} = params
		return this.fetch(`blog/category/all/1.json`).then(r => r.json());
	}
</script>

<script>
	export let posts
	import {bookmarkStore} from "../../stores";

	let saved = $bookmarkStore
	console.log(saved)
	let saved_posts = posts.filter(p => {
		return saved.includes(p.metadata.record_no)
	})
</script>

{#if saved_posts.length}
	{#each saved_posts as p}
		<a href="blog/{p.metadata.slug}" class="overflow-hidden rounded">
			<div class="bg-orange-400 px-2 py-4">
				<h3 class="text-white text-p2 leading-tight">{p.metadata[`intro_title_hk`]}</h3>
			</div>
		</a>
	{/each}
{:else}
	no saved posts
{/if}