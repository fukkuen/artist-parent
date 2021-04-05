import posts from "../../../_posts";
import getPaginatedPosts from "../../../../../helpers/get-paginated-posts";

export const get = (req, res) => {
  let { type, slug, page } = req.params;

  let filtered_posts = posts
  let tag
  let category
  let author
  if (type === 'tag') tag = slug
  if (type === 'author') author = slug
  if (type === 'category') category = slug
  filtered_posts = posts.filter(p => {
    if (slug === 'all') return true
    if (tag) {
      if (tag) tag = decodeURI(tag)
      return p.metadata.tags.indexOf(tag) > -1
    } else if (author) {
      return p.metadata.author.slug === author
    } else if (category) {
      return p.metadata.category.map(c => c.slug).indexOf(category) > -1
    }
  })
  filtered_posts.sort((a,b) => {
    return Number(a.metadata.record_no) < Number(b.metadata.record_no) ? -1 : 1
  })
  page = page || 1
  const size = 100
  const result = getPaginatedPosts(filtered_posts, page, size)

  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify(result));
};
