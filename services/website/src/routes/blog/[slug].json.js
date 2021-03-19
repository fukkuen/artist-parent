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

		const result = {
			post: lookup.get(slug)
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
