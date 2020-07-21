---
title: "純 CSS 顯示 PTT 網頁版樓層"
date: 2019-02-23T19:36:19+08:00
author: mkfsn
categories:
- technology
tags:
- css
---

PTT 的網頁版在回文是沒有顯示幾樓的，所以就把腦筋動到瀏覽器擴充元件上，但是在想有沒有純 CSS 的作法呢？

<!-- more -->

於是就找到了 CSS 的 Counter。

主要是用到:
- counter-reset
- counter-increment
- counter()

## counter-reset

首先我想要把 `div.push` 的前面顯示樓層，所以就在 `div.push` 的 parent `div#main-content` 把 counter reset:

```css
div#main-content {
  counter-reset: line-number;
}
```

## counter-increment

那麼既然是樓層，當然要逐樓增加囉？ ~~五樓的樓上就是四樓嘛~~

所以在 `div.push` 裡面要增加 line-number:

```css
div.push {
  counter-increment: line-number;
}
```

## counter()

剩下最後一步，把樓層顯示在 `div.push` 的最前面：

```css
div.push:before {
  content: counter(line-number);
  padding-right: 1ch;
}
```

## 合體

我另外還把顯示樓層跟 ID 的中間加了一個字元的寬度 (1ch)，看起來比較順眼一點。

組合起來就是：

```css
div#main-content {
  counter-reset: line-number;
}

div.push {
  counter-increment: line-number;
}

div.push:before {
  content: counter(line-number);
  padding-right: 1ch;
}
```

打完收工！
