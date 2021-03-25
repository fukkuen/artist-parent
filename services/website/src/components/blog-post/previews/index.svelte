<script>
  import IMG from "../../ui-elements/bg-image.svelte";
  import {locale} from 'svelte-i18n'
  export let post;

  const coverImageBasePath = `blog-posts/${
    post.metadata.createdAt.split("T")[0]
  }-${post.metadata.slug}/cover.jpg`;
</script>

<div class="mb-4">
  <a href="blog/{post.metadata.slug}" class="block bg-white shadow">
    <div class="bg-gray-500">
      <IMG src={coverImageBasePath}/>
    </div>
    <div class="px-4 py-8">
      <div class="mb-4">
        <h2 class="text-lg mb-2"># 0{post.metadata.record_no}</h2>
        <h2 class="text-lg mb-2">{post.metadata[`intro_title_${$locale}`]}</h2>
        <p>{post.metadata[`artist_name_${$locale}`]}</p>
      </div>
    </div>
  </a>
</div>
