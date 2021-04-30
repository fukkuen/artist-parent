<script>
  import {locale} from 'svelte-i18n'

  export let post;

  const coverImageBasePath = `blog-posts/${
    post.metadata.createdAt.split("T")[0]
  }-${post.metadata.slug}/cover.jpg`;
</script>

<a href="blog/{post.metadata.slug}" class="overflow-hidden rounded group bg-white shadow-lg">
  <div class="relative overflow-hidden bg-orange-300">
    <div style="padding-top: 56%"></div>
    <img src={coverImageBasePath} alt={post.metadata.title} class="w-full absolute left-0 top-0 black-and-white" loading="lazy"/>
  </div>
  <div class="bg-white px-2 py-4">
    <h3 class="text-gray-700 group-hover:text-red-500 text-p2 mb-1 leading-tight ">{post.metadata[`title_${$locale}`]}</h3>
    <div class="flex items-center">
      <p class="text-sm flex-1 font-bold text-gray-400">{post.metadata.record_no}. {post.metadata[`artist_name_${$locale}`]}</p>
      <div class="ml-4 flex-shrink-0 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="w-4 fill-current"><path d="M31.48 19.244l-8.38 8.383 1.638 1.697L36 18.064 24.61 6.675l-1.64 1.697 8.512 8.51L0 16.886v2.36"></path></svg>
      </div>
    </div>
  </div>
</a>

<style>
  .black-and-white {
    filter: grayscale(50%);
  }
</style>