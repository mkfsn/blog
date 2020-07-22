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
      { text: 'Github', link: 'https://github.com/mkfsn/blog', icon: 'reco-github' }
    ],
    // Ref: https://vuepress-theme-reco.recoluan.com/en/views/1.x/blog.html#add-blog-configurations
    blogConfig: {
      category: {location: 1, text: "Category"},
      tag: {location: 2, text: "Tag"}
    },
    // Ref: https://vuepress-theme-reco.recoluan.com/en/views/1.x/home.html#home-blog
    authorAvatar: '/avatar.png',
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-124207676-3'
      }
    ]
  ]
}
