(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{390:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("從 hugo 換成 vuepress 之後，雖然主題好看多了，字型卻不甚滿意。")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("@vuepress/theme-blog")]),s._v(" 主題時，預設的字體是 "),a("code",[s._v("PT Serif, Serif")]),s._v("，")]),s._v(" "),a("blockquote",[a("p",[s._v("這時候使用的 @vuepress/theme-blog 版本是 2.2.0")])]),s._v(" "),a("p",[s._v("然而似乎沒有方式可以去修改預設的字體，倒是有一個 "),a("a",{attrs:{href:"https://github.com/vuepressjs/vuepress-theme-blog/issues/79",target:"_blank",rel:"noopener noreferrer"}},[s._v("Open Issue #79"),a("OutboundLink")],1),s._v(" 。")]),s._v(" "),a("p",[s._v("雖然沒辦法去『設定』字體，其實還是可以寫 CSS 去 override 你想要的字體。")]),s._v(" "),a("p",[s._v("這邊我就用一個很簡單的方式去覆寫掉整個 blog 的字體，在 "),a("code",[s._v("blog/styles/index.styl")]),s._v(" 裡面加上這幾行：")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("'https://fonts.googleapis.com/css?family=Noto+Sans+TC'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("'https://fonts.googleapis.com/css?family=Noto+Sans'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Noto Sans TC'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Noto Sans'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sans-serif "),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("!important")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("只是這個方法太暴力，如果你想要去另外設定不同的標題字體的話，就要再另外寫其他 CSS rule 了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);