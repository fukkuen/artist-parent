<script>
  import IMG from "../../ui-elements/bg-image.svelte";
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
        <h2 class="text-2xl mb-2 font-bold">{post.metadata.intro_title}</h2>
      </div>
    </div>
  </a>
</div>
