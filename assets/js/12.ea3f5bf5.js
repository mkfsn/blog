(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{389:function(t,e,a){"use strict";a.r(e);var s=a(9),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("最近將服務都移過去 linode 上面，因為受限於選擇的方案儲存空間不夠，所以把腦筋動到\n"),a("code",[t._v("username")]),t._v(".github.io 上面 ...")]),t._v(" "),a("p",[t._v("之前有玩過一些 static site generator，像是")]),t._v(" "),a("ul",[a("li",[t._v("python base: "),a("a",{attrs:{href:"https://blog.getpelican.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("pelican"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("nodejs base: "),a("a",{attrs:{href:"https://hexo.io/zh-tw/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("hexo"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("不過最近發現滿多人在用 go base 的 "),a("a",{attrs:{href:"https://gohugo.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("hugo"),a("OutboundLink")],1),t._v("，於是就來嘗試看看。")]),t._v(" "),a("h1",{attrs:{id:"github-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-page"}},[t._v("#")]),t._v(" Github Page")]),t._v(" "),a("p",[t._v("這次的目標是要把 blog 架設到 https://mkfsn.github.io/blog/ ，換句話說是要部署到\n"),a("strong",[t._v("blog")]),t._v(" 這個 repo 的 project page，所以就先來建立 local 的 repo.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('$ cd /path/to/github.com/mkfsn/\n\n# Repository Name\n$ mkdir blog\n\n$ git init\n$ echo "# mkfsn.github.io/blog" > README.md\n$ git commit -m "init: blog repo."\n')])])]),a("h1",{attrs:{id:"repository-branches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#repository-branches"}},[t._v("#")]),t._v(" Repository Branches")]),t._v(" "),a("p",[t._v("因為 github 預設的 branch 是 master (當然可以改，但還是需要一個介紹的 branch)，\n所以我打算開一些 branch 做不同的用途：")]),t._v(" "),a("ul",[a("li",[t._v("master: 如同剛剛說的，就只是放 README.md 用的")]),t._v(" "),a("li",[t._v("hugo: 放 hugo 的 code 除了 public 資料夾")]),t._v(" "),a("li",[t._v("gh-pages: 這就是要放 generated code 的 branch，所以只放 public 資料夾的東西")])]),t._v(" "),a("p",[t._v("master branch 就不多做描述，先切到 hugo branch 來開始正題吧。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ git ch --orphan hugo\n")])])]),a("h1",{attrs:{id:"install-hugo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-hugo"}},[t._v("#")]),t._v(" Install Hugo")]),t._v(" "),a("p",[t._v("在 macOS 上面安裝很簡單：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ brew install hugo\n")])])]),a("h2",{attrs:{id:"hugo-new-site"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hugo-new-site"}},[t._v("#")]),t._v(" Hugo New Site")]),t._v(" "),a("p",[t._v("在 hugo branch 我們要忽略 public 這個資料夾的所有東西")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('$ echo "public" >> .gitignore\n')])])]),a("p",[t._v("接著用 hugo 來幫我初始化整個 site")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ hugo new site ./\nError: /Users/mkfsn/Repository/github.com/mkfsn/blog already exists and is not empty\n")])])]),a("p",[t._v("然後就會報錯：說資料夾不是空的 ... WTF")]),t._v(" "),a("p",[t._v("很好，所以一個無腦的解法是先創一個新的資料夾，再把東西從新增的資料夾搬出來。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ hugo new site hugo\n$ mv hugo/* ./\n$ rmdir hugo\n")])])]),a("p",[t._v("建立好以後，你會發現 hugo 幫你建了很多空的資料夾：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ tree\n.\n├── archetypes\n│   └── default.md\n├── config.toml\n├── content\n├── data\n├── layouts\n├── static\n└── themes\n")])])]),a("p",[a("s",[t._v("當然之後會把這些資料夾填好填滿。")])]),t._v(" "),a("h1",{attrs:{id:"hugo-theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hugo-theme"}},[t._v("#")]),t._v(" Hugo Theme")]),t._v(" "),a("p",[t._v("hugo 有許多主題可以用，可以從這邊去挑一個你喜歡的： https://themes.gohugo.io/")]),t._v(" "),a("p",[t._v("一開始亂試了幾個以後，看到一篇"),a("a",{attrs:{href:"https://qiita.com/bake0937/items/e0914efbd9434be474a4",target:"_blank",rel:"noopener noreferrer"}},[t._v("日文文章"),a("OutboundLink")],1),t._v("的介紹，")]),t._v(" "),a("p",[t._v("覺得其中介紹到的 "),a("a",{attrs:{href:"https://github.com/kakawait/hugo-tranquilpeak-theme.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("tranquilpeak"),a("OutboundLink")],1),t._v(" 還不錯，所以就來試試看。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ git submodule add https://github.com/kakawait/hugo-tranquilpeak-theme.git themes/hugo-tranquilpeak-theme\n")])])]),a("p",[t._v("再來就是修改 config.toml，當然是先複製 exampleSite 裡面的 config.toml 來用：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cp themes/hugo-tranquilpeak-theme/exampleSite/config.toml ./\n$ vim config.toml\n")])])]),a("h2",{attrs:{id:"baseurl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#baseurl"}},[t._v("#")]),t._v(" baseURL")]),t._v(" "),a("p",[t._v("那因為我是要部署到 mkfsn.github.io/blog (注意：後面有個 /blog) config.toml 裡面\n的 "),a("code",[t._v("baseURL")]),t._v(" 也要記得在最後面加上 /blog，像這樣：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('baseURL = "https://mkfsn.github.io/blog/"\n')])])]),a("h2",{attrs:{id:"coverimage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coverimage"}},[t._v("#")]),t._v(" coverImage")]),t._v(" "),a("p",[t._v("tranquilpeak 主題中要說我最看不順眼的，就是他預設的黃色主題（不喜歡黃色 XD），所\n以當然是要來修改一下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# Your blog cover picture. I STRONGLY recommend you to use a CDN to speed up loading of pages.\n# There is many free CDN like Cloudinary or you can also use indirectly\n# by using services like Google Photos.\n# Current image is on AWS S3 and delivered by AWS CloudFront.\n# Otherwise put your image in folder `static/_images/` (development)  or in `source/assets/images/` if you can't or don't want to build the theme,\n# and use relative url : `your-image.png`\ncoverImage = \"cover.jpg\"\n")])])]),a("p",[t._v("不過呢，因為我暫時沒地方放我的圖片，所以只好直接把 cover.jpg 放到 repo 裡面來，\n目標位置是在 "),a("code",[t._v("static/images/cover.jpg")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p static/images\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" /path/to/my/cover.jpg static/images/cover.jpg\n")])])]),a("blockquote",[a("p",[t._v("其他的設定就自己摸索吧 😛")])]),t._v(" "),a("h1",{attrs:{id:"hugo-new-post"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hugo-new-post"}},[t._v("#")]),t._v(" Hugo New Post")]),t._v(" "),a("p",[t._v("設定檔修改完以後，就可以來寫文章囉～")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ hugo new post/my-first-post.md\n$ vim content/post/my-first-post.md\n")])])]),a("p",[t._v("最後啟動 localhost 的 server，並用瀏覽器打開 http://localhost:1313/blog/ 就可以看到\nblog 現在的樣子。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ hugo server -D\n")])])]),a("p",[t._v("恰啦～到這一步已經完成一大半了，剩下把靜態頁面推到 github 就完成了。")]),t._v(" "),a("h1",{attrs:{id:"git-commit-git-push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-commit-git-push"}},[t._v("#")]),t._v(" Git Commit / Git Push")]),t._v(" "),a("p",[t._v("做了這麼多，最重要的當然是先來 commit 一下所有的修改。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('$ git add ./\n$ git commit -m "init: hugo new site, use tranquilpeak, new post"\n')])])]),a("p",[t._v("然後先把 master 跟 hugo branch 推到 github 上面：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ git push origin master\n$ git push origin hugo\n")])])]),a("h1",{attrs:{id:"publish"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publish"}},[t._v("#")]),t._v(" Publish")]),t._v(" "),a("p",[t._v("master/hugo branch 的管理我就不多加描述，因為重點是要怎麼 publish 我的文章到\nmkfsn.github.io/blog。")]),t._v(" "),a("p",[t._v("其實還滿簡單的，首先要先建立 gh-pages 這個 branch，不過 "),a("a",{attrs:{href:"https://gohugo.io/hosting-and-deployment/hosting-on-github/#build-and-deployment",target:"_blank",rel:"noopener noreferrer"}},[t._v("hugo 官方"),a("OutboundLink")],1),t._v(" 是推薦使用 "),a("a",{attrs:{href:"https://git-scm.com/docs/git-worktree",target:"_blank",rel:"noopener noreferrer"}},[t._v("worktree"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('# 先建立 gh-pages branch\n$ git checkout --orphan gh-pages\n$ git reset --hard\n$ git commit --allow-empty -m "Initializing gh-pages branch"\n$ git push origin gh-pages\n$ git checkout hugo\n\n$ rm -rf public\n$ git worktree add -B gh-pages public origin/gh-pages\n')])])]),a("p",[t._v("然後就用官方給的 script:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#!/bin/bash\nhugo\ncd public && git add --all && git commit -m "Publishing to gh-pages `date`" && cd ..\ngit push origin gh-pages\n')])])]),a("p",[t._v("簡單來說，就是把 public 資料夾一股腦兒的推到 gh-pages 就對了。")]),t._v(" "),a("p",[t._v("以後不論是做了什麼修改，要把 public 資料夾的變更部署上去到 github pages 只要執行\n"),a("code",[t._v("commit-gh-pages-file.sh")]),t._v(" 就行了。")]),t._v(" "),a("p",[t._v("打完收工。")])])}),[],!1,null,null,null);e.default=r.exports}}]);