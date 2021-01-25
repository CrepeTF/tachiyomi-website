(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"4UeM":function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/tachiyomi-website/assets/static/forks_logo-az.5dad409.9f4d9baac244896ee1adaf890d6dcc28.png",size:{width:28,height:28},sizes:"(max-width: 28px) 100vw, 28px",srcset:["/tachiyomi-website/assets/static/forks_logo-az.5dad409.9f4d9baac244896ee1adaf890d6dcc28.png 28w"]}},"5D1N":function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/tachiyomi-website/assets/static/forks_logo-sy.5dad409.5a4b561df7021be0b09fd560b526e6f7.png",size:{width:28,height:28},sizes:"(max-width: 28px) 100vw, 28px",srcset:["/tachiyomi-website/assets/static/forks_logo-sy.5dad409.5a4b561df7021be0b09fd560b526e6f7.png 28w"]}},OpGC:function(t,e,i){"use strict";i.r(e);var a=i("KHd+"),o=i("UQSp"),s=i("Kw5r");function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var r={VueRemarkRoot:o.a},c=function(t){var e=t.options.components=t.options.components||{},i=t.options.computed=t.options.computed||{};Object.keys(r).forEach((function(t){"object"===n(r[t])&&"function"==typeof r[t].render||"function"==typeof r[t]&&"function"==typeof r[t].options.render?e[t]=r[t]:i[t]=function(){return r[t]}}))},g=s.a.config.optionMergeStrategies,h="__vueRemarkFrontMatter",l={excerpt:null,description:"Backups can save you a lot of headache in case something happens to your installation or device.",sidebar:"default",prev:"/help/guides/source-migration/",next:"/help/guides/reading-local-manga/",title:"Creating backups"};var d=function(t){t.options[h]&&(t.options[h]=l),s.a.util.defineReactive(t.options,h,l),t.options.computed=g.computed({$frontmatter:function(){return t.options[h]}},t.options.computed)},p=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VueRemarkRoot",[a("h1",{attrs:{id:"creating-backups"}},[a("a",{attrs:{href:"#creating-backups","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Creating backups")]),a("p",[t._v("Backups are inter-compatible between "),a("strong",[t._v("Tachiyomi")]),t._v(" versions, with a few exceptions listed under "),a("a",{attrs:{href:"#forks-information"}},[t._v("forks information")]),t._v(".")]),a("p",[t._v("Backups can hold the following information:")]),a("ol",[a("li",[a("strong",[t._v("Titles")])]),a("li",[a("strong",[t._v("Categories")])]),a("li",[a("strong",[t._v("Read chapters")])]),a("li",[a("strong",[t._v("Tracking settings")])]),a("li",[a("strong",[t._v("Reading history")])])]),a("div",{staticClass:"custom-block c-guide c-empty"},[a("p",[t._v("You can do this by going to "),a("Navigation",{attrs:{item:"more"}}),t._v(" → "),a("Navigation",{attrs:{item:"settings"}}),t._v(" → "),a("Navigation",{attrs:{item:"settings_backup"}}),t._v(" and then selecting "),a("strong",[t._v("Create backup")]),t._v(" and select a location to save it.")],1)]),a("h2",{attrs:{id:"restoring"}},[a("a",{attrs:{href:"#restoring","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Restoring")]),a("p",[t._v("Restoring is done from the "),a("Navigation",{attrs:{item:"settings_backup"}}),t._v(" settings. To restore without issues be sure to:")],1),a("ul",[a("li",[t._v("Install all the "),a("Navigation",{attrs:{item:"tab_extensions"}}),t._v(" that were installed at the time of the backup.")],1),a("li",[t._v("Log into the "),a("Navigation",{attrs:{item:"settings_tracking"}}),t._v(" services that you use.")],1),a("li",[t._v("Log into "),a("strong",[t._v("MangaDex")]),t._v(" using "),a("strong",[t._v("WebView")]),a("a",{attrs:{href:"/help/faq/#no-results-when-searching"}},[t._v(" as explained here")]),t._v(".")]),a("li",[t._v("You're able to access all the sources through the "),a("strong",[t._v("WebView")]),t._v(".")]),a("li",[t._v("Be on a consistent internet connection.")])]),a("h2",{attrs:{id:"transferring-downloads"}},[a("a",{attrs:{href:"#transferring-downloads","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Transferring downloads")]),a("p",[t._v("You can transfer downloaded manga chapters from one version of "),a("strong",[t._v("Tachiyomi")]),t._v(" to another.")]),a("div",{staticClass:"custom-block c-guide c-empty"},[a("p",[t._v("You can do this by going to "),a("Navigation",{attrs:{item:"more"}}),t._v(" → "),a("Navigation",{attrs:{item:"settings"}}),t._v(" → "),a("Navigation",{attrs:{item:"settings_downloads"}}),t._v(" and then set the download directory to that of the download folder of your old "),a("strong",[t._v("Tachiyomi")]),t._v(", then restore the backup.")],1)]),a("h2",{attrs:{id:"turning-on-auto-backups"}},[a("a",{attrs:{href:"#turning-on-auto-backups","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Turning on auto-backups")]),a("p",[t._v("It is highly recommended you turn on auto backups, this will ensure you can recover if need be.")]),a("div",{staticClass:"custom-block c-guide c-empty"},[a("p",[t._v("You can do this by going to "),a("Navigation",{attrs:{item:"more"}}),t._v(" → "),a("Navigation",{attrs:{item:"settings"}}),t._v(" → "),a("Navigation",{attrs:{item:"settings_backup"}}),t._v(" and then setting a "),a("strong",[t._v("backup frequency")]),t._v(". In the case of a catastrophic failure, at least you will be able to recover.")],1)]),a("h2",{attrs:{id:"forks-information"}},[a("a",{attrs:{href:"#forks-information","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Forks information")]),a("div",{staticClass:"header-container"},[a("g-image",{staticClass:"inline align-top",attrs:{src:i("Xl5W"),width:"28",height:"28",fit:"contain",immediate:""}}),a("h3",[a("a",{attrs:{href:"/forks/Neko"}},[t._v("Neko")])])],1),a("p",[t._v("This fork can only restore "),a("strong",[t._v("MangaDex")]),t._v(" entries in a backup. If there are entries from other sources that are a part of that backup then they will not transfer.")]),a("div",{staticClass:"header-container"},[a("g-image",{staticClass:"inline align-top",attrs:{src:i("4UeM"),width:"28",height:"28",fit:"contain",immediate:""}}),a("h3",[a("a",{attrs:{href:"/forks/TachiyomiAZ/"}},[t._v("TachiyomiAZ")])]),a("h3",{staticStyle:{"margin-right":"0.25rem"}},[t._v(", ")]),a("g-image",{staticClass:"inline align-top",attrs:{src:i("5D1N"),width:"28",height:"28",fit:"contain",immediate:""}}),a("h3",[a("a",{attrs:{href:"/forks/TachiyomiSY/"}},[t._v("TachiyomiSY")])]),a("h3",{staticStyle:{"margin-left":"0.5rem","margin-right":"0.25rem"}},[t._v(" and ")]),a("g-image",{staticClass:"inline align-top",attrs:{src:i("v/cO"),width:"28",height:"28",fit:"contain",immediate:""}}),a("h3",[a("a",{attrs:{href:"/forks/TachiyomiEH/"}},[t._v("TachiyomiEH")])])],1),a("p",[t._v("These forks have some built-in extensions, namely: "),a("strong",[t._v("E-Hentai")]),t._v(", "),a("strong",[t._v("Hitomi.la")]),t._v(", and "),a("strong",[t._v("nHentai")]),t._v(" for "),a("Navigation",{attrs:{item:"tachiyomiaz"}}),t._v(" and "),a("Navigation",{attrs:{item:"tachiyomieh"}}),t._v(" while "),a("Navigation",{attrs:{item:"tachiyomisy"}}),t._v(" only has "),a("strong",[t._v("E-Hentai")]),t._v(".")],1),a("p",[t._v("Titles from said extensions will not be restored when restoring a backup made by these forks to standard Tachiyomi. It is possible to restore titles to these forks, but it is not possible to back them up out of these forks.")])])}),[],!1,null,null,null);"function"==typeof c&&c(p),"function"==typeof d&&d(p);e.default=p.exports},UQSp:function(t,e,i){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},Xl5W:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/tachiyomi-website/assets/static/forks_logo-neko.5dad409.734838dc2705fa1be971146aba9c52c8.png",size:{width:28,height:28},sizes:"(max-width: 28px) 100vw, 28px",srcset:["/tachiyomi-website/assets/static/forks_logo-neko.5dad409.734838dc2705fa1be971146aba9c52c8.png 28w"]}},"v/cO":function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/tachiyomi-website/assets/static/forks_logo-eh.5dad409.fa00058f3f5ae18c2f3384b5a7bc1b3e.png",size:{width:28,height:28},sizes:"(max-width: 28px) 100vw, 28px",srcset:["/tachiyomi-website/assets/static/forks_logo-eh.5dad409.fa00058f3f5ae18c2f3384b5a7bc1b3e.png 28w"]}}}]);