<script>
  import {locale} from 'svelte-i18n'
  import Img from '../../ui-elements/bg-image.svelte'

  export let post;

  const coverImageBasePath = `blog-posts/${
    post.metadata.createdAt.split("T")[0]
  }-${post.metadata.slug}/cover.jpg`;
</script>

<a href="blog/{post.metadata.slug}" class="overflow-hidden rounded group">
  <div class="relative">
    <Img src={coverImageBasePath} alt={post.metadata.title} class="w-full" loading="lazy"/>
  </div>
  <div class="bg-orange-400 px-2 py-4 group-hover:bg-orange-500">
    <h3 class="text-white text-p2 mb-1 md:text-p3 md:mb-2 leading-tight ">{post.metadata[`title_${$locale}`]}</h3>
    <div class="flex items-center">
      <p class="text-sm flex-1 font-bold text-orange-500 group-hover:text-orange-300">{post.metadata.record_no}. {post.metadata[`artist_name_${$locale}`]}</p>
      <div class="ml-4 flex-shrink-0 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="w-4 fill-current"><path d="M31.48 19.244l-8.38 8.383 1.638 1.697L36 18.064 24.61 6.675l-1.64 1.697 8.512 8.51L0 16.886v2.36"></path></svg>
      </div>
    </div>
  </div>
</a>