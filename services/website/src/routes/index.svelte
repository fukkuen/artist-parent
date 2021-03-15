<script context="module">
	export function preload({ params }) {
		const {type, slug, page} = params
		return this.fetch(`blog/category/all/1.json`).then(r => r.json());
	}
</script>

<script>
  import Footer from "../components/footer.svelte";
  import SeoHead from "../components/seo/head.svelte";

  export let posts
  export let page_number
  export let is_last
  export let total_page_count

  // Without cloning the posts, it is an empty array when hydration kicks in.
  const postsArray = [...posts];

	const getPostPreviewImage = post => `blog-posts/${
			post.metadata.createdAt.split("T")[0]
	}-${post.metadata.slug}/cover.jpg`
</script>

<SeoHead />

<div class="container mx-auto my-8">
	<div class="grid grid-cols-2 gap-4">
		{#each postsArray as post}
			<a href="blog/{post.metadata.slug}" class="flex">
				<div class="flex-shrink-0 w-32">
					<div class="bg-image" style="background-image: url({getPostPreviewImage(post)});"></div>
				</div>
				<div class="flex-1 ml-4">
					<p class="text-sm font-bold uppercase text-red-500">{post.metadata.category[0].name_en}</p>
					<h3 class="mb-2">{post.metadata.title}</h3>
				</div>
			</a>
		{/each}
	</div>
</div>

<Footer />
