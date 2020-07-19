---
title: 用 Github Actions 幫你的 Go Repository 加上 Codecov
date: 2020-07-19T21:05:53+08:00
author: mkfsn
tags:
- github actions
- codecov
- go
summary: Codecov 是一個服務可以幫你把 coverage report 加到 Github 上面，這邊利用 Github Actions 來對每個 Pull Request 都加上 Codecov 的比較結果。
---

[Codecov](https://codecov.io) 是一個服務可以幫你把 coverage report 加到 Github 上面，這篇將利用 [Github Actions](https://github.com/features/actions) 來對每個 Pull Request 都加上 Codecov 的比較結果。

在寫 go 的時候可以利用 `go test` 來看 coverage 也可以產生一個 report 檔案：

```bash
go test -short -coverprofile coverage.txt -covermode=atomic $(PKG_LIST)
```

我們可以把這個 `coverage.txt` 傳到 Codecov 上面，如此一來我們就可以比較每一個 Pull Request 是增加還是減少現在的 unittest 的 coverage 。

## Github Actions

Codecov 有提供 [Github Action](https://github.com/codecov/codecov-action) 讓我們可以很簡單的利用 Github Action 上傳 coverage report (`./coverage.txt`)：

```yaml
- name: Upload Coverage report to CodeCov
  uses: codecov/codecov-action@v1.0.0
  with:
    token: ${{secrets.CODECOV_TOKEN}}
    file: ./coverage.txt
    fail_ci_if_error: true
```

> 更多詳細設定可以看 [https://github.com/codecov/codecov-action#arguments](https://github.com/codecov/codecov-action#arguments)

要注意的是，這邊的 `${{secrets.CODECOV_TOKEN}}` 必須先去 codecov 的設定頁面找到你 repository 的 token:

![image](https://user-images.githubusercontent.com/667169/87875799-64530b80-ca06-11ea-888f-dc76cf265784.png)

然後到 Github 你的 repository 的 Settings > Secrets 中去新增一個 `CODECOV_TOKEN` 的 secret:

![image](https://user-images.githubusercontent.com/667169/87875961-3d490980-ca07-11ea-87c1-1ad2e00e5d70.png)

## Pull Request

對每一個 Pull Request 我想知道這一個修改影響了現有的 unittest coverage 多少，所以我在 workflow 設定針對每一個 Pull Request 都去上傳 coverage report:

```yaml
on:
  pull_request:
    branches:
      develop
```

接著在 jobs 的部分也很簡單，只要先想辦法產生 coverage report 就可以了：

```yaml
steps:
  - name: Set up Go
    uses: actions/setup-go@v1
    with:
      go-version: 1.13
  - name: Check out code
    uses: actions/checkout@v1
  - name: Run Unit tests.
    run: make test-coverage
  - name: Upload Coverage report to CodeCov
    uses: codecov/codecov-action@v1.0.0
    with:
      token: ${{secrets.CODECOV_TOKEN}}
      file: ./coverage.txt
      fail_ci_if_error: true
```

上面總共有四個步驟：
1. 準備 Go 1.13
2. 切換到當前 commit
3. 產生 coverage.txt
4. 上傳到 Codecov

其中第三個步驟我是用 Makefile 來產生 coverage report:

```Makefile
PKG = github.com/mkfsn/mizukinana
PKG_LIST = $(shell go list $(PKG)/...)

test-coverage: generate ## Run unittests with coverage
	@go test -short -coverprofile coverage.txt -covermode=atomic $(PKG_LIST)
```

完整的 workflow 如下所示：

```yaml
name: Test
on:
  pull_request:
    branches:
      develop
jobs:
  test:
    name: Test
    runs-on: ubuntu-latest
    steps:
      - name: Set up Go
        uses: actions/setup-go@v1
        with:
          go-version: 1.13
      - name: Check out code
        uses: actions/checkout@v1
      - name: Run Unit tests.
        run: make test-coverage
      - name: Upload Coverage report to CodeCov
        uses: codecov/codecov-action@v1.0.0
        with:
          token: ${{secrets.CODECOV_TOKEN}}
          file: ./coverage.txt
          fail_ci_if_error: true
```

## 成果

設定完以後，每當開一個新的 Pull Request，就可以看到 Covercov 會留下這一次的比較結果：

![image](https://user-images.githubusercontent.com/667169/87876224-30c5b080-ca09-11ea-9306-da2210a1244a.png)



