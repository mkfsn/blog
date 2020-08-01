---
title: "用 Gobot 跟 Firmata 來控制 LinkIt™ Smart 7688 Duo 的週邊設備"
date: 2020-08-01T16:31:06+08:00
author: mkfsn
categories:
- technology
tags:
- go
- iot
- firmata
- gobot
- linkit-smart-7688-duo
---

在[上一篇](/posts/write-go-in-linkit-smart-7688-duo.html)嘗試使用 go 在 LinkIt™ Smart 7688 Duo 開發之後，這篇要來嘗試如何控制週邊設備，例如 LED 或者其他模組。

<!-- more -->

## Programming models on LinkIt™ Smart 7688 Duo

首先要在 LinkIt™ Smart 7688 Duo 上面控制硬體有很多種不同的方式：

1. UART connectivity
2. Firmata protocol 
3. Arduino Yun Bridge Library

詳細可以看 [官方PDF](https://s3-ap-southeast-1.amazonaws.com/mediatek-labs-imgs/downloads/c9174962c0a4b65fe4a2d70f6c691937.pdf)
或者 [線上官方文件](https://docs.labs.mediatek.com/resource/linkit-smart-7688/en/tutorials/linkit-smart-7688-duo) 。

## Firmata Protocol

這篇使用的是第二種方式 - Firmata protocol

原因是這種方式只需要將 [StandardFirmata](https://github.com/firmata/arduino/blob/master/examples/StandardFirmata/StandardFirmata.ino)
燒進去 MCU(Arduino) 之後，就可以專心在 MPU(OpenWRT) 上面開發。

![Through Firmata protocol](https://docs.labs.mediatek.com/resource/linkit-smart-7688/files/en/6914441/6914785/1/1469525226192/duo-firmata-arch.png)

## Gobot

[Gobot](https://gobot.io/) 是一個 Go-based 的框架支援多種 Platform 上的開發（撰文時總共 35 個 Platforms）。
這篇會介紹怎麼利用 Gobot 來控制 LinkIt™ Smart 7688 Duo 上面的 LED 燈。

## 開發過程

### 開發環境

- MacOS 10.15.6（19G73)

### 準備 Arduino

首先先下載 [Arduino](https://www.arduino.cc/en/Main/Software)，這篇使用的版本是 `1.8.12`。

然後照著官方給的 [步驟](https://docs.labs.mediatek.com/resource/linkit-smart-7688/en/get-started/get-started-with-the-linkit-smart-7688-duo-development-board/install-arduino-ide-with-board-support-package)
安裝 board support package 。

### 將 StandardFirmata 燒錄到 Arduino

先找到範例的 StandardFirmata:

![image](https://user-images.githubusercontent.com/667169/89098459-61024b80-d41a-11ea-9af2-b0adcfb571f0.png)

然後依照官方文件的步驟，先找到以下這行：

```c
Firmata.begin(57600);
```

並把它換成

```c
Serial1.begin(57600);
Firmata.begin(Serial1);
```

要注意的是，除了更改這幾行以外，下面的 while loop 也要註解掉，否則從 MPU 上面的 process 會遇到 connection timeout。

總結來說是這樣：

![image](https://user-images.githubusercontent.com/667169/89098615-c0ad2680-d41b-11ea-88c4-f49945fe015b.png)

之後就把 StandardFirmata 上傳：

![image](https://user-images.githubusercontent.com/667169/89098681-44ffa980-d41c-11ea-9fca-afcbad86f7fc.png)

記得要確認 USB 是不是接在板子上的 MCU 那一側，以及下圖的 Board 跟 Port 是否設定正確：

![image](https://user-images.githubusercontent.com/667169/89098656-0cf86680-d41c-11ea-9c69-36db844ba220.png)

### 開始寫 Go!

Go 的部分就沒那麼複雜了，參考 Gobot 的[範例](https://gobot.io/#the-hello-world-of-things)，只要找到正確的 Serial Port 跟 Pin 就可以了！

先看範例：

```go
package main

import (
  "time"

  "gobot.io/x/gobot"
  "gobot.io/x/gobot/drivers/gpio"
  "gobot.io/x/gobot/platforms/firmata"
)

func main() {
  firmataAdaptor := firmata.NewAdaptor("/dev/ttyACM0")
  led := gpio.NewLedDriver(firmataAdaptor, "13")

  work := func() {
    gobot.Every(1*time.Second, func() {
      led.Toggle()
    })
  }

  robot := gobot.NewRobot("bot",
    []gobot.Connection{firmataAdaptor},
    []gobot.Device{led},
    work,
  )

  robot.Start()
}
```

根據官方的表格(如下所示)，

![image](https://user-images.githubusercontent.com/667169/89098756-e2f37400-d41c-11ea-8d2f-930a2d9c167b.png)

必須要將

```go
firmataAdaptor := firmata.NewAdaptor("/dev/ttyACM0")
```

改成

```go
firmataAdaptor := firmata.NewAdaptor("/dev/ttyS0")
```

而 Pin 的部分則根據[官方圖所示](https://s3-ap-southeast-1.amazonaws.com/mediatek-labs-imgs/downloads/d0846032988f44428f790eb930f7e78c.pdf)
，都是 13 所以不用變動。

> 我把範例稍微修改過後放到 https://github.com/mkfsn/linkit-lab，有興趣的話可以參考看看。

### 執行結果

照 [上一篇](/posts/write-go-in-linkit-smart-7688-duo.html) 的步驟 build 完以後，透過 scp 上傳到板子上執行的結果如下：

```bash
root@mylinkit:~# ./linkit-lab 
2020/08/01 06:49:09 Initializing connections...
2020/08/01 06:49:09 Initializing connection Firmata-6567A5C ...
2020/08/01 06:49:09 Initializing devices...
2020/08/01 06:49:09 Initializing device LED-74654622 ...
2020/08/01 06:49:09 Robot bot initialized.
2020/08/01 06:49:09 Starting Robot bot ...
2020/08/01 06:49:09 Starting connections...
2020/08/01 06:49:09 Starting connection Firmata-6567A5C on port /dev/ttyS0...
2020/08/01 06:49:09 Starting devices...
2020/08/01 06:49:09 Starting device LED-74654622 on pin 13...
2020/08/01 06:49:09 Starting work...
^C2020/08/01 06:49:16 Stopping Robot bot ...
```

然後就看到板子上的 LED 燈一閃一閃的啦～

## 參考資料

1. https://s3-ap-southeast-1.amazonaws.com/mediatek-labs-imgs/downloads/c9174962c0a4b65fe4a2d70f6c691937.pdf
2. https://s3-ap-southeast-1.amazonaws.com/mediatek-labs-imgs/downloads/d0846032988f44428f790eb930f7e78c.pdf
3. https://gobot.io/
4. https://docs.labs.mediatek.com/resource/linkit-smart-7688/en/get-started/get-started-with-the-linkit-smart-7688-duo-development-board/install-arduino-ide-with-board-support-package
5. https://docs.labs.mediatek.com/resource/linkit-smart-7688/en/tutorials/linkit-smart-7688-duo
6. https://boywhy.blogspot.com/2016/05/linkit-samrt-7688-using-firmata-with.html

## 致謝

因為是第一次接觸硬體，所以感謝同事 [LSChyi](http://github.com/LSChyi) 的幫忙，讓我沒有走太多歪路 XD

另外要特別感謝 <a href="https://boywhy.blogspot.com/2016/05/linkit-samrt-7688-using-firmata-with.html">[LinkIt Samrt 7688] Using Firmata with Python</a>
的作者，我找了一個晚上的問題跟翻了官方文件很多次，都沒注意到原來 StandardFirmata 上面的那段 while loop 要註解掉。
