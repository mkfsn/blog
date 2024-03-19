(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{579:function(s,t,a){"use strict";a.r(t);var n=a(8),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("身為一個工程師，寫部落格文章最重要當然是要可以 highlight 程式碼，但沒想到\ntranquilpeak 主題中使用的 highlight.js 竟然預設沒有把 golang 包進來。")]),s._v(" "),a("p",[s._v("tranquilpeak 中 highlight 的方式有兩種：")]),s._v(" "),a("ol",[a("li",[s._v("highlight.js")]),s._v(" "),a("li",[s._v("prism.js (似乎在實驗中)")])]),s._v(" "),a("p",[s._v("但是 highlight.js 預設沒有 golang，只有包含一些“常見”的語法")]),s._v(" "),a("p",[s._v("https://github.com/highlightjs/highlight.js/issues/1218")]),s._v(" "),a("p",[s._v("從 highlight.js 官網也可以看到 golang 沒有在 common 裡面：")]),s._v(" "),a("p",[s._v("https://highlightjs.org/download/")]),s._v(" "),a("p",[s._v("所以必須要另外去 include cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/languages/go.min.js")]),s._v(" "),a("p",[s._v("這通常意味著要去修改 theme 的程式碼。")]),s._v(" "),a("p",[s._v("所幸 tranquilpeak 有方法可以去載入其他 JavaScript")]),s._v(" "),a("h2",{attrs:{id:"params-customjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#params-customjs"}},[s._v("#")]),s._v(" params.customJS")]),s._v(" "),a("p",[s._v("在 config.toml 裡面，有提供 params.customJS 可以去 import 額外的 JavaScript，可\n以是 CDN 的 URL，也可以是 static folder 中的 local file。")]),s._v(" "),a("p",[s._v("在這邊，我是先把我要的 highlight 抓下來放到 static/js/ 資料夾裡面")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p static/js/highlight.js/9.4.0/languages\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 這邊我抓了 go, typescript, yaml, scss")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/languages/go.min.js -P static/js/highlight.js/9.4.0/languages\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/languages/typescript.min.js -P static/js/highlight.js/9.4.0/languages\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/languages/yaml.min.js -P static/js/highlight.js/9.4.0/languages\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/languages/scss.min.js -P static/js/highlight.js/9.4.0/languages\n")])])]),a("p",[s._v("然後修改設定檔")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('  # Custom JS. Put here your custom JS files. They are loaded after the theme JS;\n  # they have to be referred from static root. Example\n  [[params.customJS]]\n    src = "js/highlight.js/9.4.0/languages/go.min.js"\n  [[params.customJS]]\n    src = "js/highlight.js/9.4.0/languages/typescript.min.js"\n  [[params.customJS]]\n    src = "js/highlight.js/9.4.0/languages/yaml.min.js"\n  [[params.customJS]]\n    src = "js/highlight.js/9.4.0/languages/scss.min.js"\n')])])]),a("h2",{attrs:{id:"成果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#成果"}},[s._v("#")]),s._v(" 成果")]),s._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);