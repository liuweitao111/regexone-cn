(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{386:function(t,e,a){"use strict";a.r(e);var r=a(48),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"特殊字符-5-分组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特殊字符-5-分组"}},[t._v("#")]),t._v(" 特殊字符 5：分组")]),t._v(" "),a("p",[t._v("在"),a("strong",[t._v("范围")]),t._v("的那一节中，有一个练习是匹配 cat 和 car 这两个单词，当时给的答案是"),a("code",[t._v("cat|car")]),t._v("\ncat 和 car 这两个单词的前面都是 ca，所以有没有可能提取前面公共的部分 ca，然后用"),a("code",[t._v("t|r")]),t._v("来匹配最后的字母呢？")]),t._v(" "),a("h2",{attrs:{id:"分组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分组"}},[t._v("#")]),t._v(" 分组")]),t._v(" "),a("p",[t._v("如果你直接写"),a("code",[t._v("cat|r")]),t._v("，发现它是错误的。那我们应该怎么写呢？只需要将"),a("code",[t._v("t|r")]),t._v("用括括起来就可以了。\n"),a("strong",[t._v("括号在正则中可以用于分组")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("符号")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("(x)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("匹配 'x' 并且记住匹配项，其中括号被称为捕获括号")])])])]),t._v(" "),a("Exercise",{attrs:{title:"试一试：匹配单词",data:[{type:"match",text:"cat"},{type:"match",text:"car"}]}},[a("SolutionLink",{attrs:{text:"ca(t|r)"}})],1),t._v(" "),a("p",[a("strong",[t._v("被括号括起来的部分“子表达式”会被保存成一个子组")]),t._v("。")]),t._v(" "),a("Exercise",{attrs:{title:"试一试：匹配单词，捕获子组",data:[{type:"capture",text:"cat",captureData:{results:["t"]}},{type:"capture",text:"car",captureData:{results:["r"]}}]}},[a("SolutionLink",{attrs:{text:"ca(t|r)"}})],1),t._v(" "),a("Exercise",{attrs:{title:"练习 1：提取图片文件名和后缀",data:[{type:"capture",text:"test.png",captureData:{results:["test","png"]}},{type:"capture",text:"test123.jpeg",captureData:{results:["test123","jpeg"]}},{type:"capture",text:"aaa.jpeg",captureData:{results:["aaa","jpeg"]}},{type:"skip",text:"aaa.pdf"}]}},[a("SolutionLink",{attrs:{text:"(\\w+).(png|jpeg)"}})],1),t._v(" "),a("h2",{attrs:{id:"引用子组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用子组"}},[t._v("#")]),t._v(" 引用子组")]),t._v(" "),a("p",[t._v("我们怎么引用被保存的子组呢？我们可以用"),a("code",[t._v("\\n")]),t._v("我们引用第 n 个括号的内容。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("符号")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\n")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回第 n 个子捕获匹配的子字符串")])])])]),t._v(" "),a("Exercise",{attrs:{title:"试一试：引用子组",data:[{type:"capture",text:"cat last letter is t",captureData:{results:["t"]}},{type:"capture",text:"car last letter is r",captureData:{results:["r"]}}]}},[a("SolutionLink",{attrs:{text:"ca(t|r) last letter is \\1"}})],1),t._v(" "),a("Exercise",{attrs:{title:"练习 2：查找重复的单词",data:[{type:"capture",text:"I have a cat cat.",captureData:{results:["cat"]}},{type:"capture",text:"I have a dog dog.",captureData:{results:["dog"]}},{type:"skip",text:"I have a dog"}]}},[a("SolutionLink",{attrs:{text:"(\\w+) \\1"}})],1),t._v(" "),a("h2",{attrs:{id:"不保存子组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不保存子组"}},[t._v("#")]),t._v(" 不保存子组")]),t._v(" "),a("p",[t._v("在括号里面的会保存成子组，但有些情况下，你可能只想用括号将某些部分看成一个整体，后续不用再用它，类似这种情况，在实际使用时，是没必要保存子组的。这时我们可以在括号里面使用 ?: 不保存子组。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("符号")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("(?:x)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("匹配 'x' 但是不记住匹配项")])])])]),t._v(" "),a("Exercise",{attrs:{title:"试一试：只提取图片的文件名",data:[{type:"capture",text:"test.png",captureData:{results:["test"]}},{type:"capture",text:"test123.jpeg",captureData:{results:["test123"]}},{type:"capture",text:"aaa.jpeg",captureData:{results:["aaa"]}},{type:"skip",text:"aaa.pdf"}]}},[a("SolutionLink",{attrs:{text:"(\\w+).(?:png|jpeg)"}})],1),t._v(" "),a("h2",{attrs:{id:"括号嵌套"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#括号嵌套"}},[t._v("#")]),t._v(" 括号嵌套")]),t._v(" "),a("p",[t._v("比如在括号嵌套的情况里，我们要看某个括号里面的内容是第几个分组怎么办？")]),t._v(" "),a("p",[t._v("我们只需要数左括号是第几个，就可以确定是第几个子组。")]),t._v(" "),a("Exercise",{attrs:{title:"试一试：匹配嵌套组",data:[{type:"capture",text:"Jan 1987",captureData:{results:["Jan 1987","1987"]}},{type:"capture",text:"May 1969",captureData:{results:["May 1969","1969"]}},{type:"capture",text:"Aug 2011",captureData:{results:["Aug 2011","2011"]}}]}},[a("SolutionLink",{attrs:{text:"((:?[A-Za-z]+) (\\d+))"}})],1)],1)}),[],!1,null,null,null);e.default=s.exports}}]);