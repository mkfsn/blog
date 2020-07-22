---
title: "TIL: 用 includeIf 對不同 repo 設定 commit author"
date: 2020-07-17T09:23:59+08:00
author: mkfsn
categories:
- technology
tags:
- git
- includeIf
---

## 前言

在 Twitter 上看到朋友在討論 git commit author，發現原來我自己也是公私混用，公司的 repo 還是設定我自己個人的 email (驚)。

<!-- more -->

公司的 repo 還是應該要用公司的 email 比較恰當，但是又不想要每一個 repo 一個一個設定 ... 雖然公司的 repo 不多，但我就是懶嘛。

這時候可以使用 [includeIf](https://git-scm.com/docs/git-config#_conditional_includes) 針對不同的 gitdir 來 include 不同的 git config 。

> 請確認 git 版本至少要 2.13 ，這篇使用的版本是 2.23.0

## includeIf

那麼要怎麼設定 gitdir 呢？我的情況是我把公司的 repo 都放在 `~/Workspace/Glasnostic/src` 底下，所以在 `~/.gitconfig` 裡面可以這樣設定

```inc
[user]
	name = Pei-Ming Wu
	email = _foo_@gmail.com
...
[includeIf "gitdir:~/Workspace/Glasnostic/src"]
    path = ~/.gitconfig-glasnostic
```

然後在 `~/.gitconfig-glasnostic` 就可以設定不同的 user.name/user.email:

```inc
[user]
	name = Pei-Ming Wu
	email = _bar_@glasnostic.com
```

不過，誰知道之後我會不會移動 `Glasnostic` 這個資料夾到其他地方呢？

所以我後來 includeIf 的設定方式是：

```
gitdir:Glasnostic/
```

而這跟底下的 condition 是等價的：

```
gitdir:**/Glasnostic/**
```

除非我哪天想不開把 Glasnostic 資料夾名稱改掉，否則應該都不需要再設定 gitconfig 了吧。
