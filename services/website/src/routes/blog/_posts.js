import getAllPosts from '../../helpers/get-all-post'
import {categories} from "../../taxonomy";

const posts = getAllPosts.getAllPosts('./src/blog-posts');

const joinCategory = post => {
  if (post.metadata.category) {
    post.metadata.category = post.metadata.category.map(slug => {
      return categories.find(cat => cat.slug === slug) || {}
    })
  }
}

posts.forEach(p => joinCategory(p))

export default posts