(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["blog"],{"0c89":function(t,e,n){},"0ef5":function(t,e,n){"use strict";n("3c5e")},2532:function(t,e,n){"use strict";var i=n("23e7"),r=n("5a34"),a=n("1d80"),o=n("ab13");i({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~String(a(this)).indexOf(r(t),arguments.length>1?arguments[1]:void 0)}})},"3c5e":function(t,e,n){},"44e7":function(t,e,n){var i=n("861d"),r=n("c6b6"),a=n("b622"),o=a("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==r(t))}},4995:function(t,e,n){"use strict";n("0c89")},"5a34":function(t,e,n){var i=n("44e7");t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},6986:function(t,e,n){"use strict";n("f0a7")},ab13:function(t,e,n){var i=n("b622"),r=i("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,"/./"[t](e)}catch(i){}}return!1}},b888:function(t,e,n){},caad:function(t,e,n){"use strict";var i=n("23e7"),r=n("4d64").includes,a=n("44d2"),o=n("ae40"),l=o("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:!l},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},d927:function(t,e,n){"use strict";n("b888")},f0a7:function(t,e,n){},fd3f:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"blog-page"}},[t._m(0),n("div",{staticClass:"blog-panel"},[n("div",{staticClass:"blog-controls bg-blue-200"},[n("BlogFilter",{on:{select:function(e){t.filter.type=e}}}),n("BlogSearch",{on:{input:function(e){t.filter.text=e}}})],1),n("hr"),n("div",{staticClass:"blog-list"},t._l(t.filteredBlogs,(function(t,e){return n("BlogPreview",{key:e,attrs:{title:t.title,author:t.author,photo:t.photo,"publish-date":t.publishDate,type:t.type}})})),1)])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-header"},[n("h1",[t._v("ACM Game Blog")]),n("p",[t._v("This is our blog! We write about all things AI, programming, and more!")]),n("p",[t._v(" Interested in writing for us? Have an idea for an article? "),n("br"),t._v(" Send an email to "),n("strong",[t._v("siggame@umsystem.edu")]),t._v(" for information on how to contribute. ")])])}],a=(n("4de4"),n("caad"),n("2532"),n("2b0e")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-search"},[n("input",{staticClass:"bg-blue-600 gray-100",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.searchText},on:{input:t.handleInput}})])},l=[],s=a["a"].extend({name:"BlogSearch",data:function(){return{searchText:""}},methods:{handleInput:function(t){t.target&&(this.searchText=t.target.value,this.$emit("input",this.searchText.toLowerCase()))}}}),c=s,u=(n("4995"),n("2877")),p=Object(u["a"])(c,o,l,!1,null,"40b982ce",null),d=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-filter"},t._l(t.types,(function(e){return n("div",{key:e,staticClass:"type-option",on:{click:function(n){return t.select(e)}}},[n("p",{staticClass:"gray-600"},[t._v(" "+t._s(e)+" ")]),n("hr",{class:[e===t.selected?"selected":"unselected"]})])})),0)},h=[],g=a["a"].extend({name:"BlogFilter",data:function(){return{types:["all","tutorial","announcement","experience"],selected:"all"}},methods:{select:function(t){this.selected=t,this.$emit("select",t)}}}),b=g,m=(n("6986"),Object(u["a"])(b,f,h,!1,null,"ac1ea734",null)),v=m.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-preview"},[n("img",{staticClass:"blog-thumbnail",attrs:{alt:t.title,src:t.getImg("blogs/"+t.photo)}}),n("div",{staticClass:"blog-info"},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("h4",[t._v(t._s(t.publishDate))]),n("p",[t._v(t._s(t.author))]),n("p",[t._v(t._s(t.type))])])])},_=[],x=n("37eb"),C=a["a"].extend({name:"BlogPreview",props:{photo:{type:String,default:"logo.png"},title:{type:String,required:!0},author:{type:String,default:"ACM Game"},type:{type:String,required:!0},publishDate:{type:String,required:!0}},methods:{getImg:x["a"]}}),w=C,S=(n("d927"),Object(u["a"])(w,y,_,!1,null,"0e8c850c",null)),B=S.exports,A=a["a"].extend({name:"Home",components:{BlogSearch:d,BlogFilter:v,BlogPreview:B},data:function(){return{blogs:[{title:"Happening Now: MegaMinerAI",type:"announcement",publishDate:"3/18/2021",author:"ACM Game"},{title:"How to make an awesome AI",type:"tutorial",publishDate:"3/1/2022",author:"ACM Game"},{title:"Easy Vue tutorial",type:"tutorial",publishDate:"12/22/2025",author:"ACM Game"},{title:"Epic gaming time",type:"experience",publishDate:"11/6/2002",author:"ACM Game"}],filter:{text:"",type:"all"}}},computed:{filteredBlogs:function(){var t=this;return this.blogs.filter((function(e){return!(!e.title.toLowerCase().includes(t.filter.text)&&!e.author.toLowerCase().includes(t.filter.text))&&("all"===t.filter.type||e.type===t.filter.type)}))}}}),E=A,I=(n("0ef5"),Object(u["a"])(E,i,r,!1,null,"1bc2beaa",null));e["default"]=I.exports}}]);
//# sourceMappingURL=blog.1caed589.js.map