<script>
  import {locale} from 'svelte-i18n'

  export let post;

  $: coverImageBasePath = `blog-posts/${
    post.metadata.createdAt.split("T")[0]
  }-${post.metadata.slug}/cover.jpg`;
</script>

<a href="blog/{post.metadata.slug}" class="overflow-hidden rounded-lg group bg-white shadow">
  <div class="relative overflow-hidden bg-orange-300">
    <div style="padding-top: 56%"></div>
    <img src={coverImageBasePath} alt={post.metadata.title} class="w-full absolute left-0 top-0 black-and-white" loading="lazy"/>
  </div>
  <div class="bg-white px-1 py-2 sm:px-2 sm:py-4">
    <h3 class="text-gray-700 group-hover:text-red-500 text-sm sm:text-p2 mb-1 leading-tight">{post.metadata.record_no}. {post.metadata[`title_${$locale}`]}</h3>
    <div class="flex items-center">
      <p class="text-xs sm:text-sm flex-1 font-bold text-gray-400">{post.metadata[`artist_name_${$locale}`]}</p>
    </div>
  </div>
</a>

<style>
  .black-and-white {
    filter: grayscale(50%);
  }
</style>