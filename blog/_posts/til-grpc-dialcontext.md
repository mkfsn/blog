---
title: "TIL: gRPC DialContext"
date: 2019-12-11
author: mkfsn
tags:
- golang
- gRPC
- context
summary: 最近遇到最大的一個問題，大到我想來寫下來紀錄一下
---

## 問題

這篇使用的 grpc-go 版本是 `v1.20.1`:

```
# go.mod
...
google.golang.org/grpc v1.20.1
```

一般來說，client 在 dial 到 server 的時候，通常會設定一個 timeout 時間然後處理 timeout error。
而 Go 在設定 timeout 通常是利用 [context](https://pkg.go.dev/context?tab=doc) 的
[WithTimeout](https://pkg.go.dev/context?tab=doc#WithTimeout) 或者
[WithDeadline](https://pkg.go.dev/context?tab=doc#WithDeadline) 來設定。

[grpc-go](https://pkg.go.dev/google.golang.org/grpc?tab=doc) 提供了
[DialContext](https://pkg.go.dev/google.golang.org/grpc?tab=doc#DialContext)
讓使用者可以傳入一個 context.Context，而我也就很自然地寫了這樣的 code:

```go
ctx, cancel := context.WithTimeout(context.Background(), time.Minute)
conn, err := grpc.DialContext(ctx, targetUri, grpc.WithInsecure())
if err != nil {
    ... // handle error
}
// handle conn
```

這樣寫會有什麼問題呢？其實沒什麼太大的問題，因為 grpc-go 會很貼心地幫你處理底層的連線：
在需要的時候才建立連線，或者幫你重新連線。**真貼心！** 換句話說，這邊的 DialContext 其實並不會立刻去建立連線。

> DialContext creates a client connection to the given target.
> By default, it’s a non-blocking dial (the function won’t wait for connections to be established,
> and connecting happens in the background)

因為 DialContext 並不是立刻去建立連線，所以傳入的 ctx 所設定的 timeout 並不是針對「建立連線」所設定的 timeout，
而是僅對於 DialContext 這個 function call 的 timeout 而已。對於想要控制 dial timeout 的使用者來說，
這邊的 ctx 根本是有設定等於沒設定… 這時候就要搭配 [grpc.WithBlock()](https://pkg.go.dev/google.golang.org/grpc?tab=doc#WithBlock) 服用。

> To make it a blocking dial, use WithBlock() dial option.

個人覺得這個 default 真是設定的莫名其妙，就不能 default blocking 嗎？
想當然爾[有人也有一樣的疑問](https://github.com/grpc/grpc-go/issues/1953)，可是看完討論還是覺得這個決定很莫名妙。

## 解法

所以上面的 code 有兩種改法：

1. 放棄 timeout/deadline/cancel，只用 context.Background() 或者 context.TODO()

   ```go
   conn, err := grpc.DialContext(context.Background(), targetUri, grpc.WithInsecure())
   if err != nil {
       ... // handle error
   }
   // handle conn
   ```

2. 使用 grpc.WithBlock()

   ```go
   ctx, cancel := context.WithTimeout(context.Background(), time.Minute)
   conn, err := grpc.DialContext(ctx, targetUri, grpc.WithInsecure(), grpc.WithBlock())
   if err != nil {
       ... // handle error
   }
   // handle conn
   ```
   
## 總結

RTFM