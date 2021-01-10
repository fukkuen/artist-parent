const fs = require("fs");

const is_event = process.env.EVENT === '1'

const type = process.env.EVENT === '1' ? 'event' : 'blog'

const categories = ['nutrition', 'reflection', 'spiritual', 'fitness']

const event_categories = ['be-our-guess', 'hiking', 'cultural', 'nutrition', 'fitness']

const title_prompt = {
  type: "input",
  name: "blogPostTitle",
  message: "What's the title? (e.g. How to deploy a Sapper app to Cloud Run)",
}

const summary_prompt = {
  type: "input",
  name: "blogPostSummary",
  message: "What's the summary? (e.g. Learn the steps necessary to ...)",
}

const create_date_prompt = {
  type: "input",
  name: "blogPostCreatedAt",
  message: "What's the createdAt time [YYYY-MM-DD]? (leave blank for now)",
  default: new Date().toISOString().split('T')[0],
}

const category_prompt = {
  type: "list",
  name: "blogPostCategory",
  message: "What's the category?",
  choices: is_event ? event_categories : categories
}

const blog_prompts = [
  title_prompt,
  summary_prompt,
  create_date_prompt,
  category_prompt,
  {
    type: "list",
    name: "blogPostAuthor",
    message: "Who is the author?",
    choices: ['melissa', 'joyce', 'king', 'mang', 'cliff', 'admin']
  },
  {
    type: "input",
    name: "coverCaption",
    message: "The caption for the cover image (if any)"
  }
]

const event_prompts = [
  title_prompt,
  summary_prompt,
  create_date_prompt,
  category_prompt,
  {
    type: "input",
    name: "eventStartDate",
    message: "What's the event start date [YYYY-MM-DD]? (leave blank for now)",
    default: new Date().toISOString().split('T')[0],
  },
  {
    type: "input",
    name: "eventEndDate",
    message: "What's the event end date [YYYY-MM-DD]? (leave blank for single date event)"
  }
]

module.exports = (plop) => {
  return {
    description: "Generate a new blog post.",
    prompts: is_event ? event_prompts : blog_prompts,
    actions: [
      {
        type: "add",
        path: `../services/website/src/${type}-posts/{{convertDateIsoToYMD blogPostCreatedAt}}-{{dashCase blogPostTitle}}/index.svx`,
        templateFile: `../templates/${type}-post/index.svx.hbs`,
      },
      {
        type: "add",
        path: `../services/website/src/routes/${type}/{{dashCase blogPostTitle}}/index.svelte`,
        templateFile: `../templates/${type}-post/page.svelte.hbs`,
      },
      {
        type: "add",
        path: `../services/website/static/${type}-posts/{{convertDateIsoToYMD blogPostCreatedAt}}-{{dashCase blogPostTitle}}/cover.jpg`,
        templateFile: `../templates/${type}-post/cover.jpg`,
      },
    ],
  };
};
