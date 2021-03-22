<script>
  import Footer from "../footer.svelte";
  import ImageZoom from "./image-zoom.svelte";
  import SeoHeadPost from "../seo/head-post.svelte";
  import Icon from '../../components/ui-elements/icon.svelte'

  export let post;
  let this_post = JSON.parse(post.post)
  let related_posts = post.related_posts
  console.log(post.related_posts)
</script>

<style>
  div.content :global(img) {
    cursor: zoom-in;
  }
</style>

<svelte:head>
  <link href="prism.css" rel="stylesheet" />
</svelte:head>

<div class="absolute text-white inset-0 top-0 h-16 px-6 flex items-center">
  <Icon name="back"/>
  <div class="flex-1"></div>
  <p class="font-bold">中 EN</p>
</div>

<div class="bg-orange-500">
  <div class="max-w-screen-md mx-auto px-4 pt-16">
    <div class="mb-8 lg:text-center">
      <p class="text-orange-300 font-bold mb-2 text-p2">{this_post.metadata.intro_title}</p>
      <h1 class="font-bold text-white text-t1">{this_post.metadata.title}</h1>
    </div>
    <img src="blog-posts/{this_post.metadata.createdAt.split('T')[0]}-{this_post.metadata.slug}/cover.jpg"
         class="max-w-sm lg:max-w-md mx-auto w-full rounded-lg -mb-16"
         alt="cover"/>
  </div>
</div>

<div class="bg-orange-300 pt-8 md:pt-16">
  <div class="max-w-screen-lg mx-auto px-4 py-12">
    <div class="flex">
      <div class="lg:col-span-4 text-orange-700 _prose">
        <slot/>
      </div>
      <div class="w-60 flex-shrink-0 text-orange-500 ml-8">
        <div class="mb-8">
          <p class="font-bold">{this_post.metadata.artist_name}</p>
          <p>{this_post.metadata.artist_bio}</p>
        </div>
        <div class="bg-orange-500 rounded text-white p-4">
          <div class="flex">
            <p>收藏於</p>
            <p class="text-t1 mono">02</p>
          </div>
          <p>除把口，我仲有耳仔、腳、雙手，同埋眼睛</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="bg-orange-300 bg-opacity-50">
  <div class="max-w-screen-lg mx-auto px-6 py-16">
    <h3 class="text-center mb-8 text-orange-500 font-bold text-t1">其他作品</h3>
    <div class="grid grid-cols-2 gap-2 sm:gap-4">
      {#each [1,2,3,4] as i}
        <div class="bg-orange-400 text-orange-500 text-p3 rounded p-6">
          <h3 class="text-t1 font-bold mb-4">title</h3>
          <p class="text-p2">aritst</p>
        </div>
      {/each}
    </div>
  </div>
</div>

<pre>{related_posts}</pre>
