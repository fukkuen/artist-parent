<script>
  import Footer from "../footer.svelte";
  import ImageZoom from "./image-zoom.svelte";
  import SeoHeadPost from "../seo/head-post.svelte";
  import Icon from '../../components/ui-elements/icon.svelte'

  export let post;
  console.log(typeof post)
  let this_post = JSON.parse(post.post)
  console.log(this_post.body)
  console.log(this_post.metadata)
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

<p class="text-orange-300 font-bold mb-2 text-p2">{this_post.metadata.intro_title}</p>
<h1 class="font-bold text-white text-t1">{this_post.metadata.title}</h1>
