(function(e){function t(t){for(var r,o,s=t[0],u=t[1],c=t[2],p=0,l=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);g&&g(t);while(l.length)l.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return u.p+"js/"+({about:"about",error:"error",hall:"hall",home:"home",sponsors:"sponsors"}[e]||e)+"."+{about:"77b6b682",error:"057b1085",hall:"e4e34ce9",home:"e48b13de",sponsors:"5e7d0956"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1,hall:1,home:1,sponsors:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",error:"error",hall:"hall",home:"home",sponsors:"sponsors"}[e]||e)+"."+{about:"ca624900",error:"31d6cfe0",hall:"3e88d43c",home:"ec54ac7d",sponsors:"876d19c8"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],p=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(p===r||p===a))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){c=l[s],p=c.getAttribute("data-href");if(p===r||p===a)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],g.parentNode.removeChild(g),n(i)},g.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(g)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var c,p=document.createElement("script");p.charset="utf-8",p.timeout=120,u.nc&&p.setAttribute("nonce",u.nc),p.src=s(e);var l=new Error;c=function(t){p.onerror=p.onload=null,clearTimeout(g);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var g=setTimeout((function(){c({type:"timeout",target:p})}),12e4);p.onerror=p.onload=c,document.head.appendChild(p)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],p=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var g=p;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";n("85ec")},"0508":function(e,t,n){e.exports=n.p+"img/ai.1e359062.png"},"0739":function(e,t,n){e.exports=n.p+"img/server.f0b4be8d.png"},"0c09":function(e,t,n){e.exports=n.p+"img/games.2dc8a3a7.gif"},1771:function(e,t,n){var r={"./about/ai.png":"0508","./about/arena.png":"975d","./about/games.gif":"0c09","./about/logo.png":"c622","./about/mmaiphoto.jpg":"9e69","./about/publicity.png":"20a3","./about/server.png":"0739","./about/visualizer.png":"6e55","./about/web.png":"a1ea","./ai.png":"e81e","./arena.png":"5679","./arrow-right.svg":"50c3","./blogs/logo.png":"692b","./discordlogo.png":"f1be","./games.gif":"a96c","./hof/fisheranimal.jpg":"f067","./hof/fisheranimal2.jpg":"fd6d","./homeMMAI.jpg":"6b07","./mmaiphoto.jpg":"d321","./publicity.png":"b65f","./server.png":"2fe6","./sponsors/garmin.jpg":"8821","./sponsors/logo.png":"48a7","./styles/main.css":"927c","./twitchlogo.png":"92b0","./twitterlogo.png":"6d71","./visualizer.png":"d1dc","./web.png":"edbf","./wrench-light.svg":"39f0","./wrench.svg":"2d64"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="1771"},"20a3":function(e,t,n){e.exports=n.p+"img/publicity.dec2ff64.png"},"26ad":function(e,t,n){"use strict";n("6203")},"2d64":function(e,t,n){e.exports=n.p+"img/wrench.283e2a02.svg"},"2fe6":function(e,t,n){e.exports=n.p+"img/server.f0b4be8d.png"},"37eb":function(e,t,n){"use strict";function r(e){return n("1771")("./".concat(e))}n.d(t,"a",(function(){return r}))},"39f0":function(e,t,n){e.exports=n.p+"img/wrench-light.3771c10c.svg"},"48a7":function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},"50c3":function(e,t,n){e.exports=n.p+"img/arrow-right.fccce208.svg"},5679:function(e,t,n){e.exports=n.p+"img/arena.b8d7eb03.png"},6203:function(e,t,n){},"692b":function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},"6b07":function(e,t,n){e.exports=n.p+"img/homeMMAI.02f78068.jpg"},"6d71":function(e,t,n){e.exports=n.p+"img/twitterlogo.291b9300.png"},"6e0a":function(e,t,n){"use strict";n("f243")},"6e55":function(e,t,n){e.exports=n.p+"img/visualizer.94239a1d.png"},"85ec":function(e,t,n){},8821:function(e,t,n){e.exports=n.p+"img/garmin.c4b24df5.jpg"},"8ba1":function(e,t,n){},"927c":function(e,t,n){},"92b0":function(e,t,n){e.exports=n.p+"img/twitchlogo.53d9e766.png"},"975d":function(e,t,n){e.exports=n.p+"img/arena.b8d7eb03.png"},"9e69":function(e,t,n){e.exports=n.p+"img/mmaiphoto.b80ae180.jpg"},a1ea:function(e,t,n){e.exports=n.p+"img/web.bf22acfc.png"},a96c:function(e,t,n){e.exports=n.p+"img/games.2dc8a3a7.gif"},b65f:function(e,t,n){e.exports=n.p+"img/publicity.dec2ff64.png"},c622:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("TheNavigator"),e.isLoading?n("PageLoader"):e._e(),n("router-view"),n("TheFooter")],1)},a=[],i=n("5530"),s=n("2f62"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-gray-200",attrs:{id:"the-navigator"}},[n("div",{staticClass:"nav-section nav-side"},[n("router-link",{attrs:{to:"/"}},[n("img",{staticClass:"nav-icon",attrs:{src:e.getImg("wrench-light.svg")}}),n("p",{staticClass:"icon-text gray-600"},[e._v(" ACM Game ")])])],1),n("div",{staticClass:"nav-section"},e._l(e.routes,(function(t){return n("router-link",{key:t.name,staticClass:"nav-button",class:{"bg-gray-100":t.hovered},attrs:{to:t.uri},nativeOn:{mouseover:function(e){t.hovered=!0},mouseout:function(e){t.hovered=!1}}},[n("p",{staticClass:"gray-600 button-text"},[e._v(" "+e._s(t.name)+" ")])])})),1),n("div",{staticClass:"nav-section nav-side",staticStyle:{display:"flex","justify-content":"right"}},[n("router-link",{staticClass:"portal-side bg-blue-400",class:{"bg-blue-500":e.portalHovered},attrs:{to:"/"},nativeOn:{mouseover:function(t){e.portalHovered=!0},mouseout:function(t){e.portalHovered=!1}}},[n("p",{staticClass:"portal-text gray-600"},[e._v(" MegaMinerAI Portal ")]),n("img",{staticClass:"portal-icon",attrs:{src:e.getImg("arrow-right.svg")}})])],1)])},c=[],p=n("37eb"),l=r["a"].extend({name:"TheNavigator",data:function(){return{routes:[{name:"Home",uri:"/",hovered:!1},{name:"About",uri:"/about",hovered:!1},{name:"Sponsors",uri:"/sponsors",hovered:!1},{name:"Blog",uri:"/blog",hovered:!1},{name:"Hall of Fame",uri:"/hall",hovered:!1}],portalHovered:!1}},methods:{getImg:p["a"]}}),g=l,f=(n("26ad"),n("2877")),d=Object(f["a"])(g,u,c,!1,null,null,null),m=d.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-gray-100",attrs:{id:"page-loader"}},[n("div",{staticClass:"icon-container"},[n("img",{staticClass:"load-icon",attrs:{src:e.getImg("wrench.svg"),alt:"Loading..."}})])])},b=[],v=r["a"].extend({name:"LoadIcon",methods:{getImg:p["a"]}}),y=v,x=(n("ed81"),Object(f["a"])(y,h,b,!1,null,"8e155cd4",null)),w=x.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-gray-100",attrs:{id:"the-footer"}},[n("div",{staticClass:"footer-section"},[n("h2",{staticClass:"gray-600"},[e._v(" Navigate ")]),e._l(e.routes,(function(t){return n("router-link",{key:t.name,staticClass:"gray-500",attrs:{to:t.uri}},[n("p",[e._v(e._s(t.name))])])}))],2),n("div",{staticClass:"footer-section"},[n("h2",{staticClass:"gray-600"},[e._v(" Social Media ")]),e._l(e.social,(function(t){return n("a",{key:t.name,staticClass:"gray-500",attrs:{href:t.url,target:"_blank"}},[n("p",[e._v(e._s(t.name))])])}))],2),n("div",{staticClass:"footer-section"},[n("h2",{staticClass:"gray-600"},[e._v(" Other Sites ")]),e._l(e.other,(function(t){return n("a",{key:t.name,staticClass:"gray-500",attrs:{href:t.url}},[n("p",[e._v(e._s(t.name))])])}))],2)])},C=[],j=r["a"].extend({name:"TheFooter",data:function(){return{routes:[{name:"Home",uri:"/"},{name:"About",uri:"/about"},{name:"Sponsors",uri:"/sponsors"},{name:"Blog",uri:"/blog"},{name:"Hall of Fame",uri:"/hall"}],social:[{name:"Discord",url:"https://discord.gg/QmQqudn"},{name:"GitHub",url:"https://github.com/siggame"},{name:"Twitter",url:"https://twitter.com/megaminerai"}],other:[{name:"Missouri S&T ACM Chapter",url:"https://mstacm.org"}]}}}),O=j,k=(n("6e0a"),Object(f["a"])(O,_,C,!1,null,"40889c14",null)),E=k.exports,L=r["a"].extend({name:"App",components:{TheNavigator:m,PageLoader:w,TheFooter:E},computed:Object(i["a"])({},Object(s["b"])({isLoading:function(e){return e.isLoading}}))}),M=L,S=(n("034f"),Object(f["a"])(M,o,a,!1,null,null,null)),T=S.exports,A=(n("d3b7"),n("8c4f")),I=(n("c975"),n("b0c0"),n("96cf"),n("1da1")),P={isLoading:!1,userFound:!1,userInfo:{},error:!1,errorMessage:""},H={updateLoading:function(e,t){e.isLoading=t},updateUser:function(e,t){e.userFound=!0,e.userInfo=t},clearUser:function(e){e.userFound=!1,e.userInfo={}},updateError:function(e,t){e.error=!0,e.errorMessage=t},clearError:function(e){e.error=!1,e.errorMessage=""}},N={},F={};r["a"].use(s["a"]);var B=new s["a"].Store({state:P,mutations:H,actions:N,modules:F}),D=["Blog"];function U(e,t,n){return $.apply(this,arguments)}function $(){return $=Object(I["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.name&&-1!==D.indexOf(t.name)&&B.commit("updateLoading",!0),r();case 2:case"end":return e.stop()}}),e)}))),$.apply(this,arguments)}function z(){return R.apply(this,arguments)}function R(){return R=Object(I["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:B.commit("updateLoading",!1);case 1:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}var q=function(){return n.e("home").then(n.bind(null,"bb51"))},G=function(){return n.e("sponsors").then(n.bind(null,"2ee0"))},J=function(){return n.e("about").then(n.bind(null,"f820"))},Q=function(){return n.e("hall").then(n.bind(null,"7731"))},K=function(){return n.e("error").then(n.bind(null,"dda8"))};r["a"].use(A["a"]);var V=[{path:"/",name:"Home",component:q},{path:"/about",name:"About",component:J},{path:"/sponsors",name:"Sponsors",component:G},{path:"/hall",name:"Hall",component:Q},{path:"/Blog",name:"Blog",beforeEnter:function(e,t,n){window.location.href="https://medium.com/siggame"}},{path:"*",name:"NotFound",component:K}],W=new A["a"]({mode:"hash",routes:V});W.beforeEach(U),W.afterEach(z);var X=W;r["a"].config.productionTip=!1,new r["a"]({router:X,store:B,render:function(e){return e(T)}}).$mount("#app")},d1dc:function(e,t,n){e.exports=n.p+"img/visualizer.94239a1d.png"},d321:function(e,t,n){e.exports=n.p+"img/mmaiphoto.b80ae180.jpg"},e81e:function(e,t,n){e.exports=n.p+"img/ai.1e359062.png"},ed81:function(e,t,n){"use strict";n("8ba1")},edbf:function(e,t,n){e.exports=n.p+"img/web.bf22acfc.png"},f067:function(e,t,n){e.exports=n.p+"img/fisheranimal.ddf550d3.jpg"},f1be:function(e,t,n){e.exports=n.p+"img/discordlogo.bac204d4.png"},f243:function(e,t,n){},fd6d:function(e,t,n){e.exports=n.p+"img/fisheranimal2.edbe07c2.jpg"}});
//# sourceMappingURL=app.4897b433.js.map