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

<div class="h-screen bg-orange-500 text-white">
	<div class="max-w-screen-lg mx-auto">
		<div class="grid grid-cols-2">
			<div class="self-center py-16 text-h1">
				<p>event scores</p>
				<p>artist parents</p>
			</div>
			<div>
				<img src="/images/keyvisual.png" alt="key-visual">
			</div>
		</div>
	</div>
</div>

<div class="bg-orange-300 text-white">
	<div class="max-w-screen-md mx-auto px-4 py-16">
		<h2 class="text-t1 text-center mb-4 font-bold">咩係指令藝術</h2>
		<p class="text-p3">「指令藝術」於普羅大眾而言可能是相對陌生的藝術類型，它是觀念 藝術的一種，表現的是一個想法，而非實體藝術品。</p>
	</div>
</div>

<div class="container mx-auto my-8">
	<div class="grid grid-cols-2 gap-4">
		{#each postsArray as post}
			<a href="blog/{post.metadata.slug}" class="overflow-hidden rounded">
				<div class="relative">
					<img src={getPostPreviewImage(post)} alt={post.metadata.title}>
					<p class="absolute top-4 left-4 text-white mono font-bold text-t1">{post.metadata.record_no}</p>
				</div>
				<div class="bg-orange-400 p-4">
					<h3 class="text-white text-p3 mb-2">{post.metadata.intro_title}</h3>
					<div class="flex items-center">
						<p class="text flex-1 font-bold text-orange-500">{post.metadata.artist_name}</p>
						<div class="ml-4 flex-shrink-0 text-white">
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="w-4 fill-current"><path d="M31.48 19.244l-8.38 8.383 1.638 1.697L36 18.064 24.61 6.675l-1.64 1.697 8.512 8.51L0 16.886v2.36"></path></svg>
						</div>
					</div>
				</div>
			</a>
		{/each}
		<div class="bg-orange-700 text-white p-8">
			<div class="mono text-h3 mb-12">1.</div>
			<h3 class="text b-border-2 border-current">收藏系列</h3>
			<div class="flex items-center">
				<p class="text-t1">咩野係指令</p>
				<div class="ml-4 flex-shrink-0 text-white">
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="w-8 fill-current"><path d="M31.48 19.244l-8.38 8.383 1.638 1.697L36 18.064 24.61 6.675l-1.64 1.697 8.512 8.51L0 16.886v2.36"></path></svg>
				</div>
			</div>
		</div>
	</div>
</div>

<Footer />
