---
title: "用 Hugo 來架設部落格並部署到 Github Pages"
date: 2018-08-19T15:25:40+08:00
categories:
- programming
tags:
- hugo
- tranquilpeak
- github
keywords:
- hugo
- go
- github pages
---

最近將服務都移過去 linode 上面，因為受限於選擇的方案儲存空間不夠，所以把腦筋動到
<username>.github.io 上面 ...

<!--more-->

之前有玩過一些 static site generator，像是

  - python base: [pelican](https://blog.getpelican.com/)
  - nodejs base: [hexo](https://hexo.io/zh-tw/index.html)

不過最近發現滿多人在用 go base 的 [hugo](https://gohugo.io/)，於是就來嘗試看看。

# Github Page

這次的目標是要把 blog 架設到 https://mkfsn.github.io/blog/ ，換句話說是要部署到
**blog** 這個 repo 的 project page，所以就先來建立 local 的 repo.

{{< codeblock lang="bash" >}}
$ cd /path/to/github.com/mkfsn/

# Repository Name
$ mkdir blog

$ git init
$ echo "# mkfsn.github.io/blog" > README.md
$ git commit -m "init: blog repo."
{{</ codeblock >}}

# Repository Branches

因為 github 預設的 branch 是 master (當然可以改，但還是需要一個介紹的 branch)，
所以我打算開一些 branch 做不同的用途：

- master: 如同剛剛說的，就只是放 README.md 用的
- hugo: 放 hugo 的 code 除了 public 資料夾
- gh-pages: 這就是要放 generated code 的 branch，所以只放 public 資料夾的東西

master branch 就不多做描述，先切到 hugo branch 來開始正題吧。

{{< codeblock lang="bash" >}}
$ git ch --orphan hugo
{{</ codeblock >}}

# Install Hugo

在 macOS 上面安裝很簡單：

{{< codeblock lang="bash" >}}
$ brew install hugo
{{</ codeblock >}}

## Hugo New Site

在 hugo branch 我們要忽略 pulbic 這個資料夾的所有東西

{{< codeblock lang="bash" >}}
$ echo "public" >> .gitignore
{{</ codeblock >}}

接著用 hugo 來幫我初始化整個 site

{{< codeblock lang="bash" >}}
$ hugo new site ./
Error: /Users/mkfsn/Repository/github.com/mkfsn/blog already exists and is not empty
{{</ codeblock >}}

然後就會報錯：說資料夾不是空的 ... WTF

很好，所以一個無腦的解法是先創一個新的資料夾，再把東西從新增的資料夾搬出來。

{{< codeblock lang="bash" >}}
$ hugo new site hugo
$ mv hugo/* ./
$ rmdir hugo
{{</ codeblock >}}

建立好以後，你會發現 hugo 幫你建了很多空的資料夾：

{{< codeblock lang="bash" >}}
$ tree
.
├── archetypes
│   └── default.md
├── config.toml
├── content
├── data
├── layouts
├── static
└── themes
{{</ codeblock >}}

<s>當然之後會把這些資料夾填好填滿。</s>

# Hugo Theme

hugo 有許多主題可以用，可以從這邊去挑一個你喜歡的： https://themes.gohugo.io/

一開始亂試了幾個以後，看到一篇[日文文章](https://qiita.com/bake0937/items/e0914efbd9434be474a4)的介紹，

覺得其中介紹到的 [tranquilpeak](https://github.com/kakawait/hugo-tranquilpeak-theme.git) 還不錯，所以就來試試看。

{{< codeblock lang="bash" >}}
$ git submodule add https://github.com/kakawait/hugo-tranquilpeak-theme.git themes/hugo-tranquilpeak-theme
{{</ codeblock >}}

再來就是修改 config.toml，當然是先複製 exampleSite 裡面的 config.toml 來用：

{{< codeblock lang="bash" >}}
$ cp themes/hugo-tranquilpeak-theme/exampleSite/config.toml ./
$ vim config.toml
{{</ codeblock >}}

## baseURL

那因為我是要部署到 mkfsn.github.io/blog (注意：後面有個 /blog) config.toml 裡面
的 `baseURL` 也要記得在最後面加上 /blog，像這樣：

{{< codeblock lang="ini" title="config.toml" >}}
baseURL = "https://mkfsn.github.io/blog/"
{{</ codeblock >}}

## coverImage

tranquilpeak 主題中要說我最看不順眼的，就是他預設的黃色主題（不喜歡黃色 XD），所
以當然是要來修改一下：

{{< codeblock lang="ini" title="config.toml" >}}
# Your blog cover picture. I STRONGLY recommend you to use a CDN to speed up loading of pages.
# There is many free CDN like Cloudinary or you can also use indirectly
# by using services like Google Photos.
# Current image is on AWS S3 and delivered by AWS CloudFront.
# Otherwise put your image in folder `static/_images/` (development)  or in `source/assets/images/` if you can't or don't want to build the theme,
# and use relative url : `your-image.png`
coverImage = "cover.jpg"
{{</ codeblock >}}

不過呢，因為我暫時沒地方放我的圖片，所以只好直接把 cover.jpg 放到 repo 裡面來，
目標位置是在 `static/images/cover.jpg`

{{< codeblock lang="bash" >}}
$ mkdir -p static/images
$ mv /path/to/my/cover.jpg static/images/cover.jpg
{{</ codeblock >}}

> 其他的設定就自己摸索吧 :P

# Hugo New Post

設定檔修改完以後，就可以來寫文章囉～

{{< codeblock lang="bash" >}}
$ hugo new post/my-first-post.md
$ vim content/post/my-first-post.md
{{</ codeblock >}}

最後啟動 localhost 的 server，並用瀏覽器打開 http://localhost:1313/blog/ 就可以看到
blog 現在的樣子。

{{< codeblock lang="bash" >}}
$ hugo server -D
{{</ codeblock >}}

恰啦～到這一步已經完成一大半了，剩下把靜態頁面推到 github 就完成了。

# Git Commit / Git Push

做了這麼多，最重要的當然是先來 commit 一下所有的修改。

{{< codeblock lang="bash" >}}
$ git add ./
$ git commit -m "init: hugo new site, use tranquilpeak, new post"
{{</ codeblock >}}

然後先把 master 跟 hugo branch 推到 github 上面：

{{< codeblock lang="bash" >}}
$ git push origin master
$ git push origin hugo
{{</ codeblock >}}

# Publish

master/hugo branch 的管理我就不多加描述，因為重點是要怎麼 publish 我的文章到
mkfsn.github.io/blog。

其實還滿簡單的，首先要先建立 gh-pages 這個 branch，不過 [hugo 官方](https://gohugo.io/hosting-and-deployment/hosting-on-github/#build-and-deployment) 是推薦使用 [worktree](https://git-scm.com/docs/git-worktree):

{{< codeblock lang="bash" >}}
# 先建立 gh-pages branch
$ git checkout --orphan gh-pages
$ git reset --hard
$ git commit --allow-empty -m "Initializing gh-pages branch"
$ git push origin gh-pages
$ git checkout hugo

$ rm -rf public
$ git worktree add -B gh-pages public origin/gh-pages
{{</ codeblock >}}

然後就用官方給的 script:

{{< codeblock lang="bash" title="commit-gh-pages-files.sh" >}}
#!/bin/bash
hugo
cd public && git add --all && git commit -m "Publishing to gh-pages `date`" && cd ..
git push origin gh-pages
{{</ codeblock >}}

簡單來說，就是把 public 資料夾一股腦兒的推到 gh-pages 就對了。

以後不論是做了什麼修改，要把 public 資料夾的變更部署上去到 github pages 只要執行
`commit-gh-pages-file.sh` 就行了。

打完收工。
