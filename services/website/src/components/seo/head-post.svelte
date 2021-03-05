<script>
  import SeoHead from "./head.svelte";
  import LdJson from "./ld-json.svelte";

  export let post;

  const { createdAt, slug, summary: description, tags, title } = post.metadata;

  const image = `https://www.mikenikles.com/blog-posts/${
    createdAt.split("T")[0]
  }-${slug}/cover-preview-lead.jpg`;
</script>

<SeoHead
  {description}
  {image}
  {title}
  imageAlt={`Cover picture for a blog post titled ${title}`}>
  <LdJson {post} />
</SeoHead>
