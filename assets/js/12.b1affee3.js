(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{488:function(t,a,s){"use strict";s.r(a);var n=s(4),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("在"),s("RouterLink",{attrs:{to:"/posts/write-go-in-linkit-smart-7688-duo.html"}},[t._v("上一篇")]),t._v("嘗試使用 go 在 LinkIt™ Smart 7688 Duo 開發之後，這篇要來嘗試如何控制週邊設備，例如 LED 或者其他模組。")],1),t._v(" "),s("h2",{attrs:{id:"programming-models-on-linkit™-smart-7688-duo"}},[t._v("Programming models on LinkIt™ Smart 7688 Duo")]),t._v(" "),s("p",[t._v("首先要在 LinkIt™ Smart 7688 Duo 上面控制硬體有很多種不同的方式：")]),t._v(" "),s("ol",[s("li",[t._v("UART connectivity")]),t._v(" "),s("li",[t._v("Firmata protocol")]),t._v(" "),s("li",[t._v("Arduino Yun Bridge Library")])]),t._v(" "),s("p",[t._v("詳細可以看 "),s("a",{attrs:{href:"https://s3-ap-southeast-1.amazonaws.com/mediatek-labs-imgs/downloads/c9174962c0a4b65fe4a2d70f6c691937.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方PDF"),s("OutboundLink")],1),t._v("\n或者 "),s("a",{attrs:{href:"https://docs.labs.mediatek.com/resource/linkit-smart-7688/en/tutorials/linkit-smart-7688-duo",target:"_blank",rel:"noopener noreferrer"}},[t._v("線上官方文件"),s("OutboundLink")],1),t._v(" 。")]),t._v(" "),s("h2",{attrs:{id:"firmata-protocol"}},[t._v("Firmata Protocol")]),t._v(" "),s("p",[t._v("這篇使用的是第二種方式 - Firmata protocol")]),t._v(" "),s("p",[t._v("原因是這種方式只需要將 "),s("a",{attrs:{href:"https://github.com/firmata/arduino/blob/master/examples/StandardFirmata/StandardFirmata.ino",target:"_blank",rel:"noopener noreferrer"}},[t._v("StandardFirmata"),s("OutboundLink")],1),t._v("\n燒進去 MCU(Arduino) 之後，就可以專心在 MPU(OpenWRT) 上面開發。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://docs.labs.mediatek.com/resource/linkit-smart-7688/files/en/6914441/6914785/1/1469525226192/duo-firmata-arch.png",alt:"Through Firmata protocol"}})]),t._v(" "),s("h2",{attrs:{id:"gobot"}},[t._v("Gobot")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gobot.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gobot"),s("OutboundLink")],1),t._v(" 是一個 Go-based 的框架支援多種 Platform 上的開發（撰文時總共 35 個 Platforms）。\n這篇會介紹怎麼利用 Gobot 來控制 LinkIt™ Smart 7688 Duo 上面的 LED 燈。")]),t._v(" "),s("h2",{attrs:{id:"開發過程"}},[t._v("開發過程")]),t._v(" "),s("h3",{attrs:{id:"開發環境"}},[t._v("開發環境")]),t._v(" "),s("ul",[s("li",[t._v("MacOS 10.15.6（19G73")])]),t._v(" "),s("h3",{attrs:{id:"準備-arduino"}},[t._v("準備 Arduino")]),t._v(" "),s("p",[t._v("首先先下載 "),s("a",{attrs:{href:"https://www.arduino.cc/en/Main/Software",target:"_blank",rel:"noopener noreferrer"}},[t._v("Arduino"),s("OutboundLink")],1),t._v("，這篇使用的版本是 "),s("code",[t._v("1.8.12")]),t._v("。")]),t._v(" "),s("p",[t._v("然後照著官方給的 "),s("a",{attrs:{href:"https://docs.labs.mediatek.com/resource/linkit-smart-7688/en/get-started/get-started-with-the-linkit-smart-7688-duo-development-board/install-arduino-ide-with-board-support-package",target:"_blank",rel:"noopener noreferrer"}},[t._v("步驟"),s("OutboundLink")],1),t._v("\n安裝 board support package 。")]),t._v(" "),s("h3",{attrs:{id:"將-standardfirmata-燒錄到-arduino"}},[t._v("將 StandardFirmata 燒錄到 Arduino")]),t._v(" "),s("p",[t._v("先找到範例的 StandardFirmata:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/667169/89098459-61024b80-d41a-11ea-9af2-b0adcfb571f0.png",alt:"image"}})]),t._v(" "),s("p",[t._v("然後依照官方文件的步驟，先找到以下這行：")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("Firmata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("57600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("並把它換成")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("Serial1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("57600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nFirmata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Serial1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("要注意的是，除了更改這幾行以外，下面的 while loop 也要註解掉，否則從 MPU 上面的 process 會遇到 connection timeout。")]),t._v(" "),s("p",[t._v("總結來說是這樣：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/667169/89098615-c0ad2680-d41b-11ea-88c4-f49945fe015b.png",alt:"image"}})]),t._v(" "),s("p",[t._v("之後就把 StandardFirmata 上傳：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/667169/89098681-44ffa980-d41c-11ea-9fca-afcbad86f7fc.png",alt:"image"}})]),t._v(" "),s("p",[t._v("記得要確認 USB 是不是接在板子上的 MCU 那一側，以及下圖的 Board 跟 Port 是否設定正確：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/667169/89098656-0cf86680-d41c-11ea-9c69-36db844ba220.png",alt:"image"}})]),t._v(" "),s("h3",{attrs:{id:"開始寫-go"}},[t._v("開始寫 Go!")]),t._v(" "),s("p",[t._v("Go 的部分就沒那麼複雜了，參考 Gobot 的"),s("a",{attrs:{href:"https://gobot.io/#the-hello-world-of-things",target:"_blank",rel:"noopener noreferrer"}},[t._v("範例"),s("OutboundLink")],1),t._v("，只要找到正確的 Serial Port 跟 Pin 就可以了！")]),t._v(" "),s("p",[t._v("先看範例：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gobot.io/x/gobot"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gobot.io/x/gobot/drivers/gpio"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gobot.io/x/gobot/platforms/firmata"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  firmataAdaptor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" firmata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewAdaptor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/dev/ttyACM0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  led "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" gpio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewLedDriver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("firmataAdaptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"13"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  work "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    gobot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Every")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      led"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Toggle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  robot "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" gobot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewRobot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bot"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("gobot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("firmataAdaptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("gobot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("led"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    work"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  robot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("根據官方的表格(如下所示)，")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/667169/89098756-e2f37400-d41c-11ea-8d2f-930a2d9c167b.png",alt:"image"}})]),t._v(" "),s("p",[t._v("必須要將")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("firmataAdaptor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" firmata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewAdaptor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/dev/ttyACM0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("改成")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("firmataAdaptor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" firmata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewAdaptor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/dev/ttyS0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("而 Pin 的部分則根據"),s("a",{attrs:{href:"https://s3-ap-southeast-1.amazonaws.com/mediatek-labs-imgs/downloads/d0846032988f44428f790eb930f7e78c.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方圖所示"),s("OutboundLink")],1),t._v("\n，都是 13 所以不用變動。")]),t._v(" "),s("blockquote",[s("p",[t._v("我把範例稍微修改過後放到 https://github.com/mkfsn/linkit-lab，有興趣的話可以參考看看。")])]),t._v(" "),s("h3",{attrs:{id:"執行結果"}},[t._v("執行結果")]),t._v(" "),s("p",[t._v("照 "),s("RouterLink",{attrs:{to:"/posts/write-go-in-linkit-smart-7688-duo.html"}},[t._v("上一篇")]),t._v(" 的步驟 build 完以後，透過 scp 上傳到板子上執行的結果如下：")],1),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("root@mylinkit:~"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./linkit-lab ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("/08/01 06:49:09 Initializing connections"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("/08/01 06:49:09 Initializing connection Firmata-6567A5C "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("/08/01 06:49:09 Initializing devices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("/08/01 06:49:09 Initializing device LED-74654622 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("/08/01 06:49:09 Robot bot initialized.\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("/08/01 06:49:09 Starting Robot bot "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("/08/01 06:49:09 Starting connections"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("/08/01 06:49:09 Starting connection Firmata-6567A5C on port /dev/ttyS0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("/08/01 06:49:09 Starting devices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("/08/01 06:49:09 Starting device LED-74654622 on pin "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("/08/01 06:49:09 Starting work"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n^C2020/08/01 06:49:16 Stopping Robot bot "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),s("p",[t._v("然後就看到板子上的 LED 燈一閃一閃的啦～")]),t._v(" "),s("h2",{attrs:{id:"參考資料"}},[t._v("參考資料")]),t._v(" "),s("ol",[s("li",[t._v("https://s3-ap-southeast-1.amazonaws.com/mediatek-labs-imgs/downloads/c9174962c0a4b65fe4a2d70f6c691937.pdf")]),t._v(" "),s("li",[t._v("https://s3-ap-southeast-1.amazonaws.com/mediatek-labs-imgs/downloads/d0846032988f44428f790eb930f7e78c.pdf")]),t._v(" "),s("li",[t._v("https://gobot.io/")]),t._v(" "),s("li",[t._v("https://docs.labs.mediatek.com/resource/linkit-smart-7688/en/get-started/get-started-with-the-linkit-smart-7688-duo-development-board/install-arduino-ide-with-board-support-package")]),t._v(" "),s("li",[t._v("https://docs.labs.mediatek.com/resource/linkit-smart-7688/en/tutorials/linkit-smart-7688-duo")]),t._v(" "),s("li",[t._v("https://boywhy.blogspot.com/2016/05/linkit-samrt-7688-using-firmata-with.html")])]),t._v(" "),s("h2",{attrs:{id:"致謝"}},[t._v("致謝")]),t._v(" "),s("p",[t._v("因為是第一次接觸硬體，所以感謝同事 "),s("a",{attrs:{href:"http://github.com/LSChyi",target:"_blank",rel:"noopener noreferrer"}},[t._v("LSChyi"),s("OutboundLink")],1),t._v(" 的幫忙，讓我沒有走太多歪路 XD")]),t._v(" "),s("p",[t._v("另外要特別感謝 "),s("a",{attrs:{href:"https://boywhy.blogspot.com/2016/05/linkit-samrt-7688-using-firmata-with.html"}},[t._v("[LinkIt Samrt 7688] Using Firmata with Python")]),t._v("\n的作者，我找了一個晚上的問題跟翻了官方文件很多次，都沒注意到原來 StandardFirmata 上面的那段 while loop 要註解掉。")])])}),[],!1,null,null,null);a.default=r.exports}}]);