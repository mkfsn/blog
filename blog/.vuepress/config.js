module.exports = {
  title: "mkfsn's Blog",
  description: '',
  base: '/blog/',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/mkfsn',
        },
        {
          type: 'gitlab',
          link: 'https://gitlab.com/mkfsn',
        },
        {
          type: 'linkedin',
          link: 'https://linkedin.com/in/mkfsn',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/mkfsn',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
      ],
    },
    comment: {
      // Which service you'd like to use
      service: 'disqus',
      // The owner's name of repository to store the issues and comments.
      shortname: 'mkfsn',
    },
    sitemap: {
      hostname: "https://mkfsn.github.io/blog/",
    },
    feed: {
      canonical_base:'https://mkfsn.github.io/blog/',
      rss: true,
      atom:true,
      json: false,
    },
    smoothScroll: true,
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },
  },
}
