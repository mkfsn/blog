(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{496:function(t,e,s){"use strict";s.r(e);var a=s(4),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("看官網寫的有夠複雜的：在 spec 底下的 affinity 裡面的 nodeAffinity，可以給設定兩個選項：")]),t._v(" "),s("ul",[s("li",[t._v("requiredDuringSchedulingIgnoredDuringExecution")]),t._v(" "),s("li",[t._v("preferedDuringSchedulingIgnoredDuringExecution")])]),t._v(" "),s("p",[t._v("先別暈過去 ... 這還沒完。")]),t._v(" "),s("p",[t._v("這兩個名字非常長的選項底下你可以設定： "),s("code",[t._v("nodeSelectorTerms")]),t._v(" 然後是一個 list/array。")]),t._v(" "),s("p",[s("code",[t._v("nodeSelectorTerms")]),t._v(" 其中的每一個 item 的內容可以設定 "),s("code",[t._v("matchExpressions")]),t._v(" ，而他也是一個 list/array。")]),t._v(" "),s("p",[t._v("這個 "),s("code",[t._v("matchExpressions")]),t._v(" 裡面每一個 item 的內容則是 "),s("code",[t._v("key")]),t._v(", "),s("code",[t._v("operator")]),t._v(" 以及 "),s("code",[t._v("values")]),t._v("。")]),t._v(" "),s("p",[t._v("這邊的 "),s("code",[t._v("key")]),t._v(" 終於是我們設定 node 的 label key 了（撒花）， 而 "),s("code",[t._v("operator")]),t._v(" 則可以設定 "),s("code",[t._v("In")]),t._v(", "),s("code",[t._v("NotIn")]),t._v(" 跟 "),s("code",[t._v("Exists")]),t._v("。")]),t._v(" "),s("p",[t._v("看到 "),s("code",[t._v("operator")]),t._v(" 接受 "),s("code",[t._v("In")]),t._v(" 跟 "),s("code",[t._v("NotIn")]),t._v(" 大概可以猜得到 "),s("code",[t._v("values")]),t._v(" 也是一個 list/array。")]),t._v(" "),s("p",[t._v("講了半天越看越不懂，直接看內容的話，他就是長這個樣子：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("affinity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nodeAffinity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("requiredDuringSchedulingIgnoredDuringExecution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nodeSelectorTerms")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchExpressions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kubernetes.io/hostname\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("operator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" In\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ucpworker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),s("p",[t._v("好，現在可以暈倒了。（倒")])])}),[],!1,null,null,null);e.default=n.exports}}]);