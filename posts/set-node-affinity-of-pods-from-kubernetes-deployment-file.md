---
title: 在 Kubernetes Deployment 裡面設定 Pod 的 Node Affinity
date: 2020-07-25T21:20:26+08:00
author: mkfsn
categories:
- technology
tags:
- kubernetes
---

看官網寫的有夠複雜的：在 spec 底下的 affinity 裡面的 nodeAffinity，可以給設定兩個選項：

- requiredDuringSchedulingIgnoredDuringExecution
- preferedDuringSchedulingIgnoredDuringExecution

先別暈過去 ... 這還沒完。

這兩個名字非常長的選項底下你可以設定： `nodeSelectorTerms` 然後是一個 list/array。

`nodeSelectorTerms` 其中的每一個 item 的內容可以設定 `matchExpressions` ，而他也是一個 list/array。

這個 `matchExpressions` 裡面每一個 item 的內容則是 `key`, `operator` 以及 `values`。

這邊的 `key` 終於是我們設定 node 的 label key 了（撒花）， 而 `operator` 則可以設定 `In`, `NotIn` 跟 `Exists`。

看到 `operator` 接受 `In` 跟 `NotIn` 大概可以猜得到 `values` 也是一個 list/array。

講了半天越看越不懂，直接看內容的話，他就是長這個樣子：

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  ...
spec:
  template:
    spec:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: kubernetes.io/hostname
                operator: In
                values:
                - ucpworker-0
```

好，現在可以暈倒了。（倒
