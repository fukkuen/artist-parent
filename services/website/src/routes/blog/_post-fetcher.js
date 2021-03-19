export default (fetch, slug) =>
  fetch(`blog/${slug}.json`)
    .then((r) => r.json())
    .then((res) => {
      console.log(res.post)
      return {
        post: {
          post: res.post,
          related_posts: []
        }
      };
    });
