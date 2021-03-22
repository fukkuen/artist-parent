export default (fetch, slug) =>
  fetch(`blog/${slug}.json`)
    .then((r) => r.json())
    .then((res) => {
      return {
        post: {
          post: res.post,
          related_posts: res.related_posts
        }
      };
    });
