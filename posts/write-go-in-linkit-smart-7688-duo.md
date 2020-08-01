---
title: "在 LinkIt™ Smart 7688 Duo 寫 Go"
date: 2020-07-31T08:10:03+08:00
author: mkfsn
categories:
- technology
tags:
- go
- openwrt
- mips
- linkit-smart-7688-duo
---

很久之前買了一塊 [linkit smart 7688 duo](https://docs.labs.mediatek.com/resource/linkit-smart-7688/en/get-started/get-started-with-the-linkit-smart-7688-duo-development-board)
開發版，但是都被我擱置在一邊，最近才想到可以拿來玩一些 IoT 的東西。
7688 讓開發者可以在上面寫 Node.js, Python 以及 C，可以寫 Python 還不夠潮，竟然還可以寫 JavaScript ，不過在這篇我打算來試試看寫 Go！

<!-- more -->

首先，因為 7688 Ｄuo 其實就是跑 [openwrt](https://openwrt.org/)，而剛好現在 Go 也已經支援 mips，原本是嘗試使用 [這篇](https://blog.wu-boy.com/2016/04/write-golang-in-linkit-smart-7688/)
的方式來建構開發環境，但是進去 docker container 裡面 build openwrt 一直失敗，所以就想來直接試試看 Go 的 cross compile。

## 環境

- MacOS: 10.15.6（19G73）
- Go: 1.14.2 darwin/amd64

## Hello World

首先，先寫一個簡單的 `helloworld.go`:

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello World!")
}
```

## Cross Compile

分別需要設定：
- GOOS: 這邊給 `linux`
- GOARCH： 這邊原本以為要給 mips 後來查了一下因為 7688 duo 是 little endian ，所以要用 mipsle (64 位元的情況用 mips64le)
- GOMIPS: 這邊可以給 `hardfloat` (default) 或者 `softfloat`，我自己試了一下似乎兩個都可以讓程式正確執行，也查不太到兩個的差異
- CGO_ENABLED: 預設是 1，我查到的是要把它關掉，但是我實際測試也是沒有影響，檔案大小也一樣（或許是因為 helloworld 很單純？）

```bash
GOOS=linux GOARCH=mipsle GOMIPS=softfloat CGO_ENABLED=0 go build -o helloworld
```

> 在 linux 確認 big/little endian 可以用
> `echo -n I | hexdump -o | awk '{ print substr($2,6,1); exit}'`

## 在 Linkit 7688 Duo 上面執行

```bash
# SCP 上傳到 Linkit 7688 Duo

# 執行
root@mylinkit:~# ./helloworld
Hello World!
root@mylinkit:~#
```

很順利的成功啦！這麼一來可以挑戰寫更複雜的東西，像是操作 GPIO 等等，不過這等到下一次吧 XD

## 參考連結

1. [在 linkit smart 7688 寫 golang](https://blog.wu-boy.com/2016/04/write-golang-in-linkit-smart-7688/)
1. [How to tell if a Linux system is big endian or little endian?](https://serverfault.com/questions/163487/how-to-tell-if-a-linux-system-is-big-endian-or-little-endian)
1. [GOMIPS=hardfloat/softfloat](https://golang.org/doc/go1.10#ports)
1. [golang 編譯各平台](https://www.echochio.nctu.me/2018/06/golang_multiple_platforms/)