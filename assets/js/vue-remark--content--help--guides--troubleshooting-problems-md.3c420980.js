(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"7CXe":function(e,t,o){"use strict";o.r(t);var i=o("KHd+"),n=o("UQSp"),a=o("Kw5r");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var r={VueRemarkRoot:n.a},l=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(r).forEach((function(e){"object"===s(r[e])&&"function"==typeof r[e].render||"function"==typeof r[e]&&"function"==typeof r[e].options.render?t[e]=r[e]:o[e]=function(){return r[e]}}))},c=a.a.config.optionMergeStrategies,h="__vueRemarkFrontMatter",v={excerpt:null,description:"Encountered an issue with a source or the app? Here are resources to help you troubleshoot it.",sidebar:"guides",prev:"/help/guides/getting-started/",next:"/help/guides/source-migration/",title:"Troubleshooting problems"};var p=function(e){e.options[h]&&(e.options[h]=v),a.a.util.defineReactive(e.options,h,v),e.options.computed=c.computed({$frontmatter:function(){return e.options[h]}},e.options.computed)},d=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("VueRemarkRoot",[i("h1",{attrs:{id:"troubleshooting-problems"}},[i("a",{attrs:{href:"#troubleshooting-problems","aria-hidden":"true"}},[i("span",{staticClass:"icon icon-link"})]),e._v("Troubleshooting problems")]),i("p",[e._v("This page is for when you encounter a problem with a source or the app.")]),i("div",{staticClass:"custom-block c-danger"},[i("h4",{staticClass:"title"},[e._v("Common error messages")]),i("div",{staticClass:"admonition-content"},[i("p",[e._v("This is just a list of some errors. Go through "),i("a",{attrs:{href:"#diagnosis"}},[e._v("Diagnosis")]),e._v(" even if your problem isn't on the list.")]),i("ul",[i("li",[e._v("HTTP Error 4xx")]),i("li",[e._v("HTTP Error 5xx")]),i("li",[e._v("Unexpected URL")]),i("li",[e._v("Page List is empty")]),i("li",[e._v("Unable to resolve host")]),i("li",[e._v("Failed to bypass Cloudflare")]),i("li",[e._v("java.security.cert.CertPathValidatorException")]),i("li",[e._v("Attempt to invoke virtual method 'java.lang.String org.jsoup.nodes.Node.attr(java.lang.String)' on a null object reference")])])])]),i("h2",{attrs:{id:"diagnosis"}},[i("a",{attrs:{href:"#diagnosis","aria-hidden":"true"}},[i("span",{staticClass:"icon icon-link"})]),e._v("Diagnosis")]),i("ul",[i("li",[e._v("Verify your extensions are up to date. ("),i("Navigation",{attrs:{item:"browse"}}),e._v(" → Extensions, make sure no extensions have an update button)")],1),i("li",[e._v("Check if "),i("strong",[e._v("Tachiyomi")]),e._v(" has an update ("),i("Navigation",{attrs:{item:"more"}}),e._v(" → "),i("Navigation",{attrs:{item:"about"}}),e._v(" then click "),i("strong",[e._v("Check for updates")]),e._v(")")],1),i("li",[e._v("Try opening the manga in "),i("Navigation",{attrs:{item:"webview"}}),e._v(". If there is "),i("a",{attrs:{href:"#solving-a-captcha"}},[e._v("CAPTCHA")]),e._v(", solve it and see if it helped.")],1),i("li",[e._v("Change your internet connection ("),i("em",[e._v('switch to Wi-Fi, mobile data or a VPN, use a "What\'s my IP" site to confirm your IP has changed')]),e._v("), then try again.")]),i("li",[e._v("Ask other users to try the action that gives you the error.")]),i("li",[e._v("Check if the source is either down, or is having issues in a browser.")]),i("li",[e._v("Press the retry button in the middle of your manga page if one exists.")]),i("li",[e._v("Try the following at "),i("Navigation",{attrs:{item:"more"}}),e._v(" → "),i("Navigation",{attrs:{item:"settings"}}),e._v(" → "),i("Navigation",{attrs:{item:"settings_advanced"}}),i("ul",[i("li",[i("strong",[e._v("Clear Cache")])]),i("li",[i("strong",[e._v("Clear Cookies")])]),i("li",[i("strong",[e._v("Clear Database")])]),i("li",[i("strong",[e._v("DNS over HTTPS")])])])],1),i("li",[e._v("If your downloads are getting stuck, try deleting the queue and trying again.")]),i("li",[e._v("Force close "),i("strong",[e._v("Tachiyomi")]),e._v(" and reopen it.")])]),i("div",{staticClass:"custom-block c-tip"},[i("h4",{staticClass:"title"},[e._v("Tip")]),i("div",{staticClass:"admonition-content"},[i("p",[e._v("Your issue may have been fixed in the Preview version already, just wait for a new Stable release.")])])]),i("p",[e._v("If any of these help, go to "),i("a",{attrs:{href:"#it-only-happens-to-me"}},[e._v("it only happens to me")]),e._v(".\nIf it's not just you, go to "),i("a",{attrs:{href:"#everyone-is-having-this-problem"}},[e._v("everyone is having this problem")]),e._v(".")]),i("p",[e._v("If none of these help, try asking in our "),i("a",{attrs:{href:"https://discord.gg/tachiyomi",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Discord Server")]),e._v(". State app version, source, manga and chapter with the problem.")]),i("h3",{attrs:{id:"it-only-happens-to-me"}},[i("a",{attrs:{href:"#it-only-happens-to-me","aria-hidden":"true"}},[i("span",{staticClass:"icon icon-link"})]),e._v("It only happens to me")]),i("p",[e._v("You may be getting a "),i("strong",[e._v("CAPTCHA")]),e._v(", may have been IP-banned, or encountered some other counter-measure that website owners deploy against programs like "),i("strong",[e._v("Tachiyomi")]),e._v(". If that is the case, there is probably nothing that can be done about that. Some of them (like "),i("strong",[e._v("CAPTCHA")]),e._v(") have to be manually solved, some are temporary (IP bans).")]),i("p",[i("strong",[e._v("Workarounds that can lower chance of it happening again:")])]),i("ul",[i("li",[e._v("Don't use downloads with the source.")]),i("li",[e._v("Have less manga in library from the source.")])]),i("div",{staticClass:"custom-block c-warning"},[i("h4",{staticClass:"title"},[e._v("Warning")]),i("div",{staticClass:"admonition-content"},[i("p",[e._v("All of the above are very imprecise and fuzzy rules, because each site has their own, non-public limits and triggers.")])])]),i("h3",{attrs:{id:"everyone-is-having-this-problem"}},[i("a",{attrs:{href:"#everyone-is-having-this-problem","aria-hidden":"true"}},[i("span",{staticClass:"icon icon-link"})]),e._v("Everyone is having this problem")]),i("p",[e._v("If the site is reachable and fully functional then there may be an issue with the extension or app.\n1. Have a look at open issues "),i("a",{attrs:{href:"https://github.com/inorichi/tachiyomi/issues",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("for the app")]),e._v(" and/or "),i("a",{attrs:{href:"https://github.com/inorichi/tachiyomi-extensions/issues",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("extensions")]),e._v(".\n1. It may have been fixed already, but not released yet, so look at closed issues ("),i("a",{attrs:{href:"https://github.com/inorichi/tachiyomi/issues?q=is%3Aissue+is%3Aclosed",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("app")]),e._v(" / "),i("a",{attrs:{href:"https://github.com/inorichi/tachiyomi-extensions/issues?q=is%3Aissue+is%3Aclosed",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("extensions")]),e._v(") issues as well.\n1. If you can't find the issue there, open a new one.")]),i("p",[e._v("If the site is not reachable or having issues then all you can do is wait for the site to become functional again.")]),i("h3",{attrs:{id:"what-are-some-common-errors"}},[i("a",{attrs:{href:"#what-are-some-common-errors","aria-hidden":"true"}},[i("span",{staticClass:"icon icon-link"})]),e._v("What are some common errors?")]),i("p",[e._v(':::: el-collapse\n:::el-collapse-item title="Java.lang Exception: Challenge not found"\nOften this will be resolved by force-quitting and reopening '),i("strong",[e._v("Tachiyomi")]),e._v('.\n:::\n:::el-collapse-item title="Loader not implemented"\nIt means that the respective extension for the manga is not installed. To fix, install the extension for the manga. If it still doesn\'t work, uninstall then reinstall the extension again.\n:::\n:::el-collapse-item title="Value Manga is licensed at data of type java.lang.String cannot be converted to JSONObject"\nThis means that the manga has been licensed and can no longer be read on that source. Try a different source to read the manga.\n:::\n:::el-collapse-item title="HTTP error 403"\nThe source you selected may have '),i("strong",[e._v("Cloudflare")]),e._v(" protection on and is enforcing "),i("a",{attrs:{href:"#solving-a-captcha"}},[e._v("CAPTCHA")]),e._v(". Please complete the "),i("a",{attrs:{href:"#solving-a-captcha"}},[e._v("CAPTCHA")]),e._v(' to fix it.\n:::\n:::el-collapse-item title="HTTP error 429 (Too Many Requests)"\nThe source banned your IP address (in most cases it\'s temporary). We suggest to '),i("g-link",{attrs:{to:o("dpdN")}},[e._v("migrate")]),e._v(' part of your manga to another source.\n:::\n:::el-collapse-item title="HTTP error 5xx"\nMost probably the source you are trying to access has problems on their side. Open the source in '),i("Navigation",{attrs:{item:"webview"}}),e._v(' and check if the site is down.\n:::\n:::el-collapse-item title="Unable to resolve host / Connection failed"\nThat means that something prevents your connection with the site. Possible reasons: your internet connection is bad, the app doesn\'t have access to internet, your ISP have blocked the site, the site is down. Try using different internet connection (switch to Wi-Fi, mobile data or a VPN). Try to enable '),i("Navigation",{attrs:{item:"more"}}),e._v(" → "),i("Navigation",{attrs:{item:"settings"}}),e._v(" → "),i("Navigation",{attrs:{item:"settings_advanced"}}),e._v(" → "),i("strong",[e._v("DNS over HTTPS")]),e._v('.\n:::\n:::el-collapse-item title="java.security.cert.CertPathValidatorException / Chain validation failed"\nThat means there is a problem with validating source\'s sertificate.')],1),i("ul",[i("li",[i("p",[e._v("Check if the site's certificate have expired. Use an online service for checking SSL certificates. If the certificate have expired, then wait while the site owner will renew it.")])]),i("li",[i("p",[e._v("Ensure that you have right date and time set on your phone.")])]),i("li",[i("p",[e._v("Try "),i("Navigation",{attrs:{item:"more"}}),e._v(" → "),i("Navigation",{attrs:{item:"settings"}}),e._v(" → "),i("Navigation",{attrs:{item:"settings_advanced"}}),e._v(" → "),i("strong",[e._v("Clear cache")]),e._v(" and "),i("strong",[e._v("Clear cookies")]),e._v(".")],1)]),i("li",[i("p",[e._v("Try using different internet connection (switch to Wi-Fi, mobile data or a VPN).")])]),i("li",[i("p",[e._v('Try to restart the device.\n:::\n:::el-collapse-item title="App not installed"\nYou may encounter this if you\'re installing an official build over an existing '),i("strong",[e._v("F-Droid")]),e._v(' build due to differing signatures.\nBackup your data, uninstall the app, then restore the data in the fresh install.\n:::\n:::el-collapse-item title="Attempt to invoke virtual method \'com.hippo.unifile..."\nThis error can be caused by a variety of reasons, all to do with storage.')])]),i("li",[i("p",[e._v("Most commonly it is caused by full storage, check to see if your device or SD Card is full.")])]),i("li",[i("p",[e._v("Check if "),i("strong",[e._v("Tachiyomi")]),e._v(" has access to the SD card. You can enable it in the android settings for app permissions.")])]),i("li",[i("p",[e._v("If you're downloading and this error pops up, that means the app might not be able to access the folder you're trying to download to. This may be because the folder is corrupted or does not exist. Use a file manager to check that the folder(s) exist and every folder in the sequence is available and accessible.")])]),i("li",[i("p",[e._v("The drive you're writing to is corrupted. Check using a file manager to see if it is accessible.\n:::\n:::el-collapse-item title=\"Cannot Access SD Card\"\nThis error is typically caused by having a file or folder name that is too long. Android's file manager does not support filenames longer than 255 characters. If you know the file or folder name that is the culprit, you can connect your SD card to your computer and shorten it. Otherwise, delete the Tachiyomi downloads folder off of the SD Card.\n:::\n::::")])])]),i("h2",{attrs:{id:"solving-a-captcha"}},[i("a",{attrs:{href:"#solving-a-captcha","aria-hidden":"true"}},[i("span",{staticClass:"icon icon-link"})]),e._v("Solving a CAPTCHA")]),i("p",[i("strong",[e._v("Please note that WebView is not the same as using your browser.")])]),i("p",[e._v("You must solve the "),i("strong",[e._v("CAPTCHA")]),e._v(" in "),i("strong",[e._v("WebView")]),e._v(".")]),i("div",{staticClass:"guide"},[i("p",{staticClass:"title"},[e._v("How to open WebView")]),i("div",{staticClass:"admonition-content"},[i("ol",[i("li",[e._v("Go to "),i("Navigation",{attrs:{item:"browse"}}),e._v(" in the bottom navbar.")],1),i("li",[e._v("Press the source you'd like to access.")]),i("li",[e._v("Press the "),i("Navigation",{attrs:{item:"webview"}}),e._v(" icon."),i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",{pre:!0,attrs:{class:"language-text"}},[e._v('\t\t<figure class="centered">\n\t\t\t<img class="zoomable" :src="$withBase(\'/assets/guides_webview-open.jpg\')">\n\t\t</figure>')])])],1),i("li",[e._v("Complete "),i("strong",[e._v("CAPTCHA")]),e._v(" if one is present.")]),i("li",[e._v("Once done, press the "),i("em",[e._v("Back Arrow")]),e._v(" at the top left to return.")])])])]),i("h3",{attrs:{id:"webview-not-working"}},[i("a",{attrs:{href:"#webview-not-working","aria-hidden":"true"}},[i("span",{staticClass:"icon icon-link"})]),e._v("WebView not working?")]),i("p",[e._v("If "),i("strong",[e._v("WebView")]),e._v(" doesn't work for you, please update the "),i("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.google.android.WebView",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Android System WebView")]),e._v(" app.")]),i("p",[e._v("When you've updated go to "),i("a",{attrs:{href:"https://developer.android.com/studio/debug/dev-options",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Developer Options")]),e._v(" in your phone's settings and set "),i("strong",[e._v("WebView Implementation")]),e._v(" to "),i("code",{pre:!0},[e._v("Android System WebView")]),e._v(".")]),i("div",{staticClass:"custom-block c-tip"},[i("h4",{staticClass:"title"},[e._v("Tip")]),i("div",{staticClass:"admonition-content"},[i("p",[e._v("If "),i("code",{pre:!0},[e._v("Android System WebView")]),e._v(" doesn't work, try setting "),i("code",{pre:!0},[e._v("Google Chrome")]),e._v(" as the default "),i("strong",[e._v("WebView Implementation")]),e._v(" instead.")])])])])}),[],!1,null,null,null);"function"==typeof l&&l(d),"function"==typeof p&&p(d);t.default=d.exports},UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},dpdN:function(e,t){e.exports={type:"file",mimeType:"text/markdown",src:"/assets/files/source-migration.8b82b1d4055f0b334f163586c3561915.md"}}}]);