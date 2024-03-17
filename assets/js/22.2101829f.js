(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{526:function(e,t,o){"use strict";o.r(t);var n=o(5),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("I was recently working on a weird problem related to the build-in net/http package.")]),e._v(" "),o("h2",{attrs:{id:"how-to-reuse-http-client-s-connection"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-reuse-http-client-s-connection"}},[e._v("#")]),e._v(" How to reuse HTTP client’s connection?")]),e._v(" "),o("p",[e._v("As described in "),o("a",{attrs:{href:"https://godoc.org/net/http#Client.Do",target:"_blank",rel:"noopener noreferrer"}},[e._v("godoc"),o("OutboundLink")],1),e._v(", by default the http.Client would reuse the TCP connection,\nbut only if you read all the data from the http.Response Body and close the http.Response Body as well:")]),e._v(" "),o("blockquote",[o("p",[e._v("If the returned error is nil, the Response will contain a non-nil Body which the user is expected to close.\nIf the Body is not both read to EOF and closed, the Client’s underlying RoundTripper (typically Transport) may not\nbe able to re-use a persistent TCP connection to the server for a subsequent “keep-alive” request.")])]),e._v(" "),o("p",[e._v("To disable reuse of the connection, one could:")]),e._v(" "),o("ol",[o("li",[e._v("Set "),o("a",{attrs:{href:"https://godoc.org/net/http#Request",target:"_blank",rel:"noopener noreferrer"}},[e._v("http.Response"),o("OutboundLink")],1),e._v(" Close to true")]),e._v(" "),o("li",[e._v("Use "),o("a",{attrs:{href:"https://godoc.org/net/http#Transport",target:"_blank",rel:"noopener noreferrer"}},[e._v("http.Transport"),o("OutboundLink")],1),e._v(" and set DisableKeepAlives to true")])]),e._v(" "),o("p",[e._v("But still, it is recommended to reuse the connection, it saves some time and resources to establish a new connection.")]),e._v(" "),o("h2",{attrs:{id:"if-the-server-closes-the-reused-connection-on-the-client-side"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#if-the-server-closes-the-reused-connection-on-the-client-side"}},[e._v("#")]),e._v(" If the server closes the reused connection on the client-side?")]),e._v(" "),o("p",[e._v("OK, now we all know that by default the connection won’t be easily closed in the client-side,\nbut what if the server closes that connection?")]),e._v(" "),o("p",[e._v("Unfortunately, the error handling is not very ideal in the current implementation (Go 1.12 and Go 1.13).\nAll you’ll get is an EOF error, which is caused by reading the data from the connection buffer.")]),e._v(" "),o("p",[e._v("This EOF error is actually a "),o("strong",[e._v("transportReadFromServerError")]),e._v(" when *persistConn is processing it:\n"),o("a",{attrs:{href:"https://github.com/golang/go/blob/release-branch.go1.12/src/net/http/transport.go#L1625",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/golang/go/blob/release-branch.go1.12/src/net/http/transport.go#L1625"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("But back to the *Transport, it only returns the wrapped error (the EOF):\n"),o("a",{attrs:{href:"https://github.com/golang/go/blob/ecde0bfa1fb11328133bb335af80fc2a48a8f82a/src/net/http/transport.go#L574",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/golang/go/blob/ecde0bfa1fb11328133bb335af80fc2a48a8f82a/src/net/http/transport.go#L574"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("In the end, the user would only receive an *url.Error which is generated by the\n"),o("a",{attrs:{href:"https://github.com/golang/go/blob/ecde0bfa1fb11328133bb335af80fc2a48a8f82a/src/net/http/client.go#L588",target:"_blank",rel:"noopener noreferrer"}},[e._v("uerr"),o("OutboundLink")],1),e._v("\nanonymous function, but just contains an EOF error.")]),e._v(" "),o("h2",{attrs:{id:"tragedy-the-race-condition"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tragedy-the-race-condition"}},[e._v("#")]),e._v(" Tragedy: the race condition")]),e._v(" "),o("p",[e._v("The weird problem I have recently is related to the two descriptions above.")]),e._v(" "),o("p",[e._v("In my service, we send data periodically to the external database every n seconds,\nand the connections have been reuse without a problem, but:")]),e._v(" "),o("blockquote",[o("p",[e._v("The server closes the idle connection after n seconds")])]),e._v(" "),o("p",[e._v("And then, here comes the race condition …")]),e._v(" "),o("p",[e._v("What would the client do first:")]),e._v(" "),o("ol",[o("li",[e._v("It founds out the connection has been closed by the server")]),e._v(" "),o("li",[e._v("It tries to send the data to the external database")])]),e._v(" "),o("p",[e._v("Of course, there’s no problem for the first case, the client would just open a new connection,\nand my data is sent via this new connection — everything is just fine.")]),e._v(" "),o("p",[e._v("However, if it tries to send the data first, then for sure the data won’t be stored into the database,\nbut even worse — you only get an EOF error. What the hell does that EOF mean!")]),e._v(" "),o("h2",{attrs:{id:"the-solution-hotfix-or-workaround"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-solution-hotfix-or-workaround"}},[e._v("#")]),e._v(" The solution, hotfix, or workaround")]),e._v(" "),o("p",[e._v("As simple as you could imagine: Retry.")]),e._v(" "),o("p",[e._v("It’s just making no sense to receive an EOF error, or more precisely — an *url.Error.")])])}),[],!1,null,null,null);t.default=r.exports}}]);