import posts from "./_posts.js";

const lookup = new Map();
posts.forEach((post) => {
	lookup.set(post.metadata.slug, JSON.stringify(post));
});

export const get = (req, res) => {
	const { slug } = req.params;

	if (lookup.has(slug)) {
		res.writeHead(200, {
			"Content-Type": "application/json",
		});

		let idx = posts.findIndex(p => p.metadata.slug === slug)
		let current = posts[idx]
		let next = posts[idx+1]
		let prev = posts[idx-1]
		let related_posts = [next, prev]
		related_posts = related_posts.filter(p => !!p)
		console.log(current)

		const result = {
			post: current,
			related_posts: related_posts
		}
		res.end(JSON.stringify(result));
	} else {
		res.writeHead(404, {
			"Content-Type": "application/json",
		});

		res.end(
				JSON.stringify({
					message: `Not found`,
				})
		);
	}
};
