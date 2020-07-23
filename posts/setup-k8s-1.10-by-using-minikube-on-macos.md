---
title: "Setup kubernetes 1.10 by using minikube on macOS"
date: 2020-07-23T20:32:17+08:00
author: mkfsn
categories:
- technology
tags:
- kubernetes
- minikube
---

Currently, the latest versions of kubernetes(k8s) and minikube are:
- k8s: v1.18
- minikube: v1.12

To set up an older version of k8s, for instance `v1.10`, we can use minikube:

```bash
curl -Lo minikube https://storage.googleapis.com/minikube/releases/v1.3.1/minikube-darwin-amd64 && chmod +x minikube
sudo mv minikube /usr/local/bin
minikube start --kubernetes-version v1.10.0
```

> NOTE: This requires VirtualBox installed in your system.
