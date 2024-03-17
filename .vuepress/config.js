module.exports = {
  title: "mkfsn's Blog",
  description: '',
  base: '/blog/',
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    // Ref: https://vuepress-theme-reco.recoluan.com/en/views/1.x/timeline.html#add-navigation-button
    nav: [
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: 'Github', link: 'https://github.com/mkfsn/blog', icon: 'reco-github' },
      { text: "RSS", link: "https://mkfsn.github.io/blog/rss.xml", icon: "reco-rss" },
    ],
    // Ref: https://vuepress-theme-reco.recoluan.com/en/views/1.x/blog.html#add-blog-configurations
    blogConfig: {
      category: {location: 1, text: "Category"},
      tag: {location: 2, text: "Tag"}
    },
    // Ref: https://vuepress-theme-reco.recoluan.com/en/views/1.x/home.html#home-blog
    authorAvatar: '/avatar.png',
    // Ref: https://vuepress-theme-reco.recoluan.com/en/views/plugins/comments.html#vssue
    vssueConfig: {
      platform: 'github-v4',
      owner: 'mkfsn',
      repo: 'blog',
      clientId: '40db6d894d0b269cdc46',
      clientSecret: '64fd0051be380c1c7bbc5b4da8e9925d38657b27',
      autoCreateIssue: true,
    },
    subSidebar: 'auto',
  },
  configureWebpack: {
    node: {
      global: true,
      process: true
    }
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: {
      permalink: true,
      permalinkBefore: true,
    },
    // options for markdown-it-toc
    toc: { includeLevel: [2, 3] },
  },
  plugins: [
    [
      '@vuepress-reco/vuepress-plugin-rss',
      {
        'site_url': 'https://mkfsn.github.io/blog'
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-124207676-3'
      }
    ]
  ]
}
