(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["hall"],{"0363":function(t,e,n){var o={"./fisheranimal.jpg":"f067","./fisheranimal2.jpg":"fd6d"};function r(t){var e=i(t);return n(e)}function i(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id="0363"},"249d":function(t,e,n){},7731:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"HallOfFame"},[n("h1",{staticStyle:{"font-size":"2vw"}},[t._v(" Important People ")]),t._m(0),n("hr",{staticStyle:{height:"2px","border-width":"0",color:"blue","background-color":"blue"}}),t._l(t.people,(function(t,e){return n("HOFBlock",{key:e,attrs:{photo:t.photo,name:t.name,contribution:t.contribution,link:t.link}})}))],2)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticStyle:{"font-size":"1.15vw"}},[t._v(" Thank you so much for all of your hard work for this organization."),n("br"),t._v(" We wish you all the best in your professional life. ")])}],i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hof-block"},[n("div",{staticClass:"solid"},[n("img",{staticStyle:{float:"left",width:"280px",height:"213px",padding:"5px"},attrs:{src:t.getImgUrl()}}),n("div",{staticStyle:{padding:"20px"}},[n("h5",[t._v(t._s(t.name))]),n("p",[t._v(t._s(t.contribution)+" ")]),n("p",[t._v(" "+t._s(t.name)+" ")]),n("a",{attrs:{href:t.link,target:"_blank"}},[n("p",[t._v(t._s(t.link))])])])])])},l=[],s=i["a"].extend({name:"LoadIcon",props:{photo:{type:String,required:!0},name:{type:String,required:!0},contribution:{type:String,required:!0},link:{type:String,required:!0}},methods:{getImgUrl:function(){return n("0363")("./".concat(this.photo))}}}),c=s,u=(n("ab11"),n("2877")),p=Object(u["a"])(c,a,l,!1,null,"1e6b6c2e",null),h=p.exports,f=i["a"].extend({name:"Hall",components:{HOFBlock:h},data:function(){return{people:[{name:"Jacob Fischer",photo:"fisheranimal.jpg",contribution:"Creer",link:"google.com"},{name:"Blakob Fisher",photo:"fisheranimal2.jpg",contribution:"Creer2",link:"https://www.google.com"}]}}}),d=f,m=Object(u["a"])(d,o,r,!1,null,null,null);e["default"]=m.exports},ab11:function(t,e,n){"use strict";n("249d")}}]);
//# sourceMappingURL=hall.e4e34ce9.js.map