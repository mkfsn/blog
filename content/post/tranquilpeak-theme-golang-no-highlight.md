---
title: "tranquilpeak 主題中 Golang 沒有 Highlight"
date: 2018-08-19T16:36:19+08:00
category:
- programming
tags:
- hugo
- tranquilpeak
- highlight
keywords:
- tech
---

身為一個工程師，寫部落格文章最重要當然是要可以 highlight 程式碼，但沒想到
tranquilpeak 主題中使用的 highlight.js 竟然預設沒有把 golang 包進來。

<!--more-->

tranquilpeak 中 highlight 的方式有兩種：

1. highlight.js
2. prism.js (似乎在實驗中)

但是 highlight.js 預設沒有 golang，只有包含一些“常見”的語法

https://github.com/highlightjs/highlight.js/issues/1218

從 highlight.js 官網也可以看到 golang 沒有在 common 裡面：

https://highlightjs.org/download/

所以必須要另外去 include cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/languages/go.min.js

這通常意味著要去修改 theme 的程式碼。

所幸 tranquilpeak 有方法可以去載入其他 JavaScript

# params.customJS

在 config.toml 裡面，有提供 params.customJS 可以去 import 額外的 JavaScript，可
以是 CDN 的 URL，也可以是 static folder 中的 local file。

在這邊我是先把我要的 highlight 抓下來放到 static/js/ 資料夾裡面

{{< codeblock lang="bash" >}}
$ mkdir -p static/js/highlight.js/9.4.0/languages

# 這邊我抓了 go, typescript, yaml, scss
$ wget https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/languages/go.min.js -P static/js/highlight.js/9.4.0/languages
$ wget https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/languages/typescript.min.js -P static/js/highlight.js/9.4.0/languages
$ wget https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/languages/yaml.min.js -P static/js/highlight.js/9.4.0/languages
$ wget https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/languages/scss.min.js -P static/js/highlight.js/9.4.0/languages
{{< /codeblock >}}

然後修改設定檔

{{< codeblock lang="ini" title="config.toml" >}}
  # Custom JS. Put here your custom JS files. They are loaded after the theme JS;
  # they have to be referred from static root. Example
  [[params.customJS]]
    src = "js/highlight.js/9.4.0/languages/go.min.js"
  [[params.customJS]]
    src = "js/highlight.js/9.4.0/languages/typescript.min.js"
  [[params.customJS]]
    src = "js/highlight.js/9.4.0/languages/yaml.min.js"
  [[params.customJS]]
    src = "js/highlight.js/9.4.0/languages/scss.min.js"
{{< /codeblock >}}

# 成果

{{< codeblock lang="go" >}}
package main

import "fmt"

func main() {
    fmt.Println("Hello world")
}
{{< /codeblock >}}
