<script>
	import {locale} from 'svelte-i18n'
	export let post;

	const coverImageBasePath = `blog-posts/${
			post.metadata.createdAt.split("T")[0]
	}-${post.metadata.slug}/cover.jpg`;
</script>

<a href="blog/{post.metadata.slug}" class="grid grid-cols-3">
	<div class="col-span-1 relative overflow-hidden bg-cover" style="background-image: url({coverImageBasePath})">
		<div style="padding-top: 100%"></div>
	</div>

	<div class="bg-orange-400 col-span-2 py-4 px-2">
		<h3 class="text-white text-p2 leading-tight">{post.metadata[`intro_title_${$locale}`]}</h3>
		<div class="flex items-center">
			<p class="text-sm flex-1 font-bold text-orange-500">{post.metadata[`artist_name_${$locale}`]}</p>
			<div class="ml-4 flex-shrink-0 text-white">
				<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="w-4 fill-current"><path d="M31.48 19.244l-8.38 8.383 1.638 1.697L36 18.064 24.61 6.675l-1.64 1.697 8.512 8.51L0 16.886v2.36"></path></svg>
			</div>
		</div>
	</div>
</a>