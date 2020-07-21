---
title: "TIL: Golang Generic 20200616 更新"
date: 2020-06-27T17:40:59+08:00
author: mkfsn
categories:
- technology
tags:
- go
- generic programming
---

官方在 2020/06/16 發佈了關於 Generic Programming 的一個新的 draft。

<!-- more -->

## 前言

早在 2016 年，Golang 就有關於 generic programming 的討論： https://github.com/golang/go/issues/15292.

在[上一個版本的 draft](https://go.googlesource.com/proposal/+/refs/heads/master/design/go2draft-contracts.md) 中，
有提出一個新的 keyword [contract](https://go.googlesource.com/proposal/+/refs/heads/master/design/go2draft-contracts.md#type-contracts) ，
而最近在 2020/06/16 這天又發佈的一個[更新](https://blog.golang.org/generics-next-step) ，
看起來最後因為 contract 跟 type 的重疊性太高，於是就把 contract 拿掉了。

但這次更新不僅如此，還提供了一個 [playground](https://go2goplay.golang.org/) 讓我們可以~~隨便玩~~體驗一下 Golang 的 Generic Programming。

## 為什麼需要 Generic Programming

在現在 golang 的任何一個版本中 (<= 1.14)，如果我要『取得兩個整數中最小的那一個』，我可以寫一個 function：

```go
package main

func min(x, y int) int {
    if x > y {
        return y
    }
    return x
}
```

乍看之下沒什麼問題，可是如果我還要一個 float64 的版本呢？

```go
package main

func minInt(x, y int) int {
    if x > y {
        return y
    }
    return x
}

func minFloat64(x, y float64) float64 {
    if x > y {
        return y
    }
    return x
}
```

嗯，到這邊應該不是只有我覺得這不是一個很好的解決方式，畢竟在 go 裡面我們有以下這些 type：

- int
- int8
- int16
- int32
- int64
- uint
- uint8
- uint16
- uint32
- uint64
- uintptr
- float32
- float64

... 應該沒人會想要每一個 type 都寫一個 function 吧？

## Golang Generic Programming

以剛剛提到的『取得兩個整數中最小的那一個』為例，在 go2 我們(希望)可以這樣做：

```go
package main

import (
	"fmt"
)

// 在上一個版本中，是使用 Contract 來定義 Constraint。
type Ordered interface {
	type int, int8, int16, int32, int64,
		uint, uint8, uint16, uint32, uint64, uintptr,
		float32, float64,
		string
}

// type T 要符合 Ordered 這個 Constraint，換句話說，
// 只有 Ordered 裡面定義的那些 type 才能傳入這個 function。
func min(type T Ordered) (x, y T) T {
	if x > y {
		return y
	}
	return x
}

func main() {
	// 所以我們可以傳入 int
	fmt.Printf("min(2, 3) = %d\n", min(2, 3))
	// 也可以傳入 float64
	fmt.Printf("min(2.0, 3.0) = %f\n", min(2.0, 3.0))
	// 然後當然也可以傳 string
	fmt.Printf("min(x, Y) = %s\n", min("x", "Y"))
}
```

> https://go2goplay.golang.org/p/YC2eBAo0jAj

如此一來，就可以只寫一個 function 然後可以傳入不同的 type。

## Anonymous function

自己在玩的時候發現好像 anonymous function 似乎沒辦法使用 generic，
我把上面的 code 改成用 anonymous function 之後就 build 不了，
然後會有以下錯誤：

```
prog.go2:15:13: function type must have no type parameters
```

> https://go2goplay.golang.org/p/8bI8c6d3flg

也許在下一個版本就會修掉了吧。