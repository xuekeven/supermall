(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68e36286"],{5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"60b4":function(t,e,r){"use strict";r("c6c0")},aaeb:function(t,e,r){},b64b:function(t,e,r){var a=r("23e7"),n=r("7b0b"),c=r("df75"),i=r("d039"),o=i((function(){c(1)}));a({target:"Object",stat:!0,forced:o},{keys:function(t){return c(n(t))}})},bb51:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"category"}},[r("NavBar",{staticClass:"category-nav",scopedSlots:t._u([{key:"center",fn:function(){return[t._v("分类")]},proxy:!0}])}),r("div",{staticClass:"content"},[r("CategoryMenu",{attrs:{categories:t.categories},on:{selectItem:t.selectItem}}),r("CategoryContent",{attrs:{subcategories:t.showSubcategory}})],1)],1)},n=[],c=r("5530"),i=r("a7ac"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Scroll",{attrs:{id:"cate-left"}},[r("div",{attrs:{id:"cate-menu"}},t._l(t.categories,(function(e,a){return r("div",{key:a,staticClass:"menu-item",class:{active:a===t.currentIndex},on:{click:function(e){return t.itemClick(a)}}},[t._v(" "+t._s(e.title)+" ")])})),0)])},s=[],u=r("5d17"),l={components:{Scroll:u["a"]},props:{categories:Array},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("selectItem",t)}}},f=l,g=(r("60b4"),r("2877")),b=Object(g["a"])(f,o,s,!1,null,"2f96aecd",null),y=b.exports,d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Scroll",{ref:"scroll",attrs:{id:"cate-right"}},[t.subcategories.list?r("div",{attrs:{id:"aaa"}},t._l(t.subcategories.list,(function(e,a){return r("div",{key:a,staticClass:"item"},[r("a",{attrs:{href:e.link}},[r("img",{staticClass:"item-img",attrs:{src:e.image,alt:""}}),r("div",{staticClass:"item-text"},[t._v(t._s(e.title))])])])})),0):t._e()])},p=[],m=r("eecb"),h={mixins:[m["b"],m["a"]],components:{Scroll:u["a"]},props:{subcategories:{type:Object,default:function(){return[]}}}},v=h,O=(r("fa73"),Object(g["a"])(v,d,p,!1,null,"f06448e8",null)),j=O.exports,D=r("1bab");function w(){return Object(D["a"])({url:"/category"})}function C(t){return Object(D["a"])({url:"/subcategory",params:{maitKey:t}})}function x(t,e){return Object(D["a"])({url:"/subcategory/detail",params:{miniWallkey:t,type:e}})}var I={components:{NavBar:i["a"],CategoryMenu:y,CategoryContent:j},data:function(){return{categories:[],categoryData:{},itemIndex:-1}},created:function(){this.getCategory()},activated:function(){},computed:{showSubcategory:function(){return-1===this.itemIndex?{}:this.categoryData[this.itemIndex].subcategories},showCategoryDetail:function(){return-1===this.itemIndex?[]:this.categoryData[this.itemIndex].categoryDetail[this.currentType]}},methods:{getCategory:function(){var t=this;w().then((function(e){t.categories=e.data.category.list;for(var r=0;r<t.categories.length;r++)t.categoryData[r]={subcategories:{},categoryDetail:{pop:[],new:[],sell:[]}};t.getSubcategories(0)}))},getSubcategories:function(t){var e=this;this.itemIndex=t;var r=this.categories[t].maitKey;C(r).then((function(r){e.categoryData[t].subcategories=r.data,e.categoryData=Object(c["a"])({},e.categoryData),e.getCategoryDetail("pop"),e.getCategoryDetail("sell"),e.getCategoryDetail("new")}))},getCategoryDetail:function(t){var e=this,r=this.categories[this.itemIndex].miniWallkey;x(r,t).then((function(r){e.categoryData[e.itemIndex].categoryDetail[t]=r,e.categoryData=Object(c["a"])({},e.categoryData)}))},selectItem:function(t){this.getSubcategories(t)}}},_=I,k=(r("de31"),Object(g["a"])(_,a,n,!1,null,"65d6873f",null));e["default"]=k.exports},c1b0:function(t,e,r){},c6c0:function(t,e,r){},dbb4:function(t,e,r){var a=r("23e7"),n=r("83ab"),c=r("56ef"),i=r("fc6a"),o=r("06cf"),s=r("8418");a({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,a=i(t),n=o.f,u=c(a),l={},f=0;while(u.length>f)r=n(a,e=u[f++]),void 0!==r&&s(l,e,r);return l}})},de31:function(t,e,r){"use strict";r("c1b0")},e439:function(t,e,r){var a=r("23e7"),n=r("d039"),c=r("fc6a"),i=r("06cf").f,o=r("83ab"),s=n((function(){i(1)})),u=!o||s;a({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(t,e){return i(c(t),e)}})},fa73:function(t,e,r){"use strict";r("aaeb")}}]);
//# sourceMappingURL=chunk-68e36286.a649f1f8.js.map