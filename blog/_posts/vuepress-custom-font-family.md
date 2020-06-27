---
title: "在 vuepress 中使用自訂字型"
date: 2020-06-27T11:43:05+08:00
author: mkfsn
description: "test"
tags:
- vuepress
- theme-blog
- font-family
---

從 hugo 換成 vuepress 之後，雖然主題好看多了，字型卻不甚滿意。

使用 `@vuepress/theme-blog` 主題時，預設的字體是 `PT Serif, Serif`，

> 這時候使用的 @vuepress/theme-blog 版本是 2.2.0

然而似乎沒有方式可以去修改預設的字體，倒是有一個 [Open Issue #79](https://github.com/vuepressjs/vuepress-theme-blog/issues/79) 。

雖然沒辦法去『設定』字體，其實還是可以寫 CSS 去 override 你想要的字體。

這邊我就用一個很簡單的方式去覆寫掉整個 blog 的字體，在 `blog/styles/index.styl` 裡面加上這幾行：

```css
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC');
@import url('https://fonts.googleapis.com/css?family=Noto+Sans');

* {
  font-family: 'Noto Sans TC', 'Noto Sans', sans-serif !important;
}
```

只是這個方法太暴力，如果你想要去另外設定不同的標題字體的話，就要再另外寫其他 CSS rule 了。

