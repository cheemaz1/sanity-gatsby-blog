export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "63350e7e2f7ee53247e0f4b6",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-xum4pqtk",
                  apiId: "17e6d619-db9b-4bc4-a204-f4d50e9d9d98",
                },
                {
                  buildHookId: "63350e7ed15fd533ddc8f2c3",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-k1fuysfk",
                  apiId: "fd42bbfb-24ff-4d3c-8a91-5dab77b4b27b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/cheemaz1/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-k1fuysfk.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
