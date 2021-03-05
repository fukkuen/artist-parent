<script>
  import Footer from "../footer.svelte";
  import ImageZoom from "./image-zoom.svelte";
  import SeoHeadPost from "../seo/head-post.svelte";

  export let post;

  const test = node => {
    const hk_div = node.querySelector(".hk")
    const en_div = node.querySelector(".en")
    en_div.style.display = 'none'
  }
</script>

<style>
  div.content :global(img) {
    cursor: zoom-in;
  }
</style>

<SeoHeadPost {post} />
<svelte:head>
  <link href="prism.css" rel="stylesheet" />
</svelte:head>

<div class="max-w-6xl mx-auto px-0 md:px-8 grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-6 mb-8">
  <div class="col-span-3 bg-white">

    <img src="blog-posts/{post.metadata.createdAt.split('T')[0]}-{post.metadata.slug}/cover.jpg"
         class="w-full"
         alt="cover"/>

    <div class="prose lg:prose-xl content break-words mx-auto px-4 py-8">
      <h2 class="text-xl">{post.metadata.title} {post.metadata.title_en}</h2>
      <p>{post.metadata.artist_name} {post.metadata.artist_name_en}</p>
      <p>{post.metadata.artist_bio} {post.metadata.artist_bio_en}</p>
      <p># {post.metadata.record_no}</p>
      <div class="h-1 bg-gray-200 mb-8"></div>
      <div use:test>
      <slot />
      </div>
    </div>
  </div>
  <div class="col-span-1 bg-white p-4">
    <div class="text-center">
      {#each post.metadata.category as cat}
        <span class="post-tag">{cat.name}</span>
      {/each}
    </div>
  </div>
</div>

<ImageZoom />
<Footer />
