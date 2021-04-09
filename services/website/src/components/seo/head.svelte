<script>
  import OpenGraphPreview from "./open-graph-preview.svelte";
  import TwitterPreview from "./twitter-preview.svelte";

  export let description = "";
  export let image = "";
  export let imageAlt = "";
  export let keywords = "指令藝術";
  export let title = "";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="author" content="{description}">
  <meta name="description" content="{description}" />
  <meta name="keywords" content="{keywords}" />

  <TwitterPreview {description} {image} {imageAlt} {title} />
  <OpenGraphPreview {description} {image} {title} />

  <slot />
</svelte:head>
