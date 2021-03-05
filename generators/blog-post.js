const fs = require("fs");

const categories = ['what-is-instruction', 'mouth-ears-legs-heads-eyes', 'love-fear', 'metabolism', 'story', 'emotion']

const blog_prompts = [
  {
    type: "input",
    name: "blogPostTitle",
    message: "What's the post title?",
  },
  {
    type: "input",
    name: "blogPostTitleEn",
    message: "What's the post title? (en)",
  },
  {
    type: "input",
    name: "introTitle",
    message: "What's the intro title?",
  },
  {
    type: "input",
    name: "introTitleEn",
    message: "What's the intro title? (en)",
  },
  {
    type: "input",
    name: "artistName",
    message: "Who's the artist?",
  },
  {
    type: "input",
    name: "artistNameEn",
    message: "Who's the artist? (en)",
  },
  {
    type: "input",
    name: "artistBio",
    message: "What's the artist bio?",
  },
  {
    type: "input",
    name: "artistBioEn",
    message: "What's the artist bio? (en)",
  },
  {
    type: "input",
    name: "recordNo",
    message: "The ID of the art piece",
  },
  {
    type: "input",
    name: "blogPostCreatedAt",
    message: "What's the createdAt time [YYYY-MM-DD]? (leave blank for now)",
    default: new Date().toISOString().split('T')[0],
  },
  {
    type: "list",
    name: "blogPostCategory",
    message: "What's the category?",
    choices: categories
  },
  {
    type: "input",
    name: "blogPostTitleEn",
    message: "What's the post title? (en)",
  }
]

module.exports = (plop) => {
  return {
    description: "Generate a new blog post.",
    prompts: blog_prompts,
    actions: [
      {
        type: "add",
        path: `../services/website/src/blog-posts/{{convertDateIsoToYMD blogPostCreatedAt}}-{{dashCase blogPostTitleEn}}/index.svx`,
        templateFile: `../templates/blog-post/index.svx.hbs`,
      },
      {
        type: "add",
        path: `../services/website/src/routes/blog/{{dashCase blogPostTitleEn}}/index.svelte`,
        templateFile: `../templates/blog-post/page.svelte.hbs`,
      },
      {
        type: "add",
        path: `../services/website/static/blog-posts/{{convertDateIsoToYMD blogPostCreatedAt}}-{{dashCase blogPostTitleEn}}/cover.jpg`,
        templateFile: `../templates/blog-post/cover.jpg`,
      },
    ],
  };
};
