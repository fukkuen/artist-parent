<script>
  import SeoHead from "./head.svelte";

  export let post;

  const { createdAt, slug, title_hk, title_en, artist_name_hk, artist_name_en } = post.metadata;

  const image = `https://artist-parent.vercel.app/blog-posts/${
    createdAt.split("T")[0]
  }-${slug}/cover.jpg`;

  const title = `${title_hk} (${title_en})`
  const description = `${artist_name_hk} (${artist_name_en})`
</script>

<SeoHead
  {description}
  {image}
  {title}
  imageAlt={`Cover picture for a blog post titled ${title}`}>
</SeoHead>
