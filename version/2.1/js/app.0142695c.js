(function(t){function e(e){for(var r,a,i=e[0],u=e[1],s=e[2],f=0,l=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},c=[];function i(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-04bc55cb":"5e94612b","chunk-512f8a4c":"71ffa4f0","chunk-011915af":"06aafd22","chunk-158853b6":"780ec562","chunk-16a127a4":"dfd3b961","chunk-b5c46b44":"2bc61bf5","chunk-1be125f4":"e979629a"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-04bc55cb":1,"chunk-512f8a4c":1,"chunk-011915af":1,"chunk-158853b6":1,"chunk-16a127a4":1,"chunk-b5c46b44":1,"chunk-1be125f4":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-04bc55cb":"d1190faf","chunk-512f8a4c":"c760791a","chunk-011915af":"92a79427","chunk-158853b6":"33fd8c1b","chunk-16a127a4":"61f59c3d","chunk-b5c46b44":"64f2a2c6","chunk-1be125f4":"a8fd7557"}[t]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===o))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],f=s.getAttribute("data-href");if(f===r||f===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[t],p.parentNode.removeChild(p),n(c)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=i(t);var l=new Error;s=function(e){f.onerror=f.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=f;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0733":function(t,e,n){},2872:function(t,e,n){t.exports=n.p+"img/shopcart.fbc81098.svg"},3522:function(t,e,n){},3704:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),n("MainTabBar")],1)},o=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("TabBar",[r("TabBarItem",{attrs:{path:"/home",activeColor:"deepPink"},scopedSlots:t._u([{key:"item-icon",fn:function(){return[r("img",{attrs:{src:n("9443"),alt:""}})]},proxy:!0},{key:"item-icon-active",fn:function(){return[r("img",{attrs:{src:n("b508"),alt:""}})]},proxy:!0},{key:"item-text",fn:function(){return[r("div",[t._v("首页")])]},proxy:!0}])}),r("TabBarItem",{attrs:{path:"/category",activeColor:"deepPink"},scopedSlots:t._u([{key:"item-icon",fn:function(){return[r("img",{attrs:{src:n("57cd"),alt:""}})]},proxy:!0},{key:"item-icon-active",fn:function(){return[r("img",{attrs:{src:n("a5ef"),alt:""}})]},proxy:!0},{key:"item-text",fn:function(){return[r("div",[t._v("分类")])]},proxy:!0}])}),r("TabBarItem",{attrs:{path:"/cart",activeColor:"deepPink"},scopedSlots:t._u([{key:"item-icon",fn:function(){return[r("img",{attrs:{src:n("2872"),alt:""}})]},proxy:!0},{key:"item-icon-active",fn:function(){return[r("img",{attrs:{src:n("c3f8"),alt:""}})]},proxy:!0},{key:"item-text",fn:function(){return[r("div",[t._v("购物车")])]},proxy:!0}])}),r("TabBarItem",{attrs:{path:"/profile",activeColor:"deepPink"},scopedSlots:t._u([{key:"item-icon",fn:function(){return[r("img",{attrs:{src:n("e55d"),alt:""}})]},proxy:!0},{key:"item-icon-active",fn:function(){return[r("img",{attrs:{src:n("d151"),alt:""}})]},proxy:!0},{key:"item-text",fn:function(){return[r("div",[t._v("我的")])]},proxy:!0}])})],1)},i=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},s=[],f={},l=f,p=(n("7bf3"),n("2877")),d=Object(p["a"])(l,u,s,!1,null,null,null),h=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:function(e){return t.itemClick()}}},[t.isActive?n("div",[t._t("item-icon-active")],2):n("div",[t._t("item-icon")],2),n("div",{style:t.activeStyle},[t._t("item-text")],2)])},b=[],v=(n("ac1f"),n("5319"),{name:"TabBarItem",props:{path:String,activeColor:{type:String,default:"red"}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}},methods:{itemClick:function(){this.$router.replace(this.path)}}}),g=v,y=(n("6721"),Object(p["a"])(g,m,b,!1,null,null,null)),k=y.exports,x={name:"MainTabBar",components:{TabBar:h,TabBarItem:k}},_=x,w=Object(p["a"])(_,c,i,!1,null,null,null),C=w.exports,S={name:"App",components:{MainTabBar:C}},T=S,P=(n("beba"),Object(p["a"])(T,a,o,!1,null,"507ae21c",null)),O=P.exports,j=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(j["a"]);var E=function(){return Promise.all([n.e("chunk-512f8a4c"),n.e("chunk-011915af"),n.e("chunk-158853b6")]).then(n.bind(null,"b3d7"))},B=function(){return Promise.all([n.e("chunk-512f8a4c"),n.e("chunk-011915af"),n.e("chunk-16a127a4")]).then(n.bind(null,"bb51"))},L=function(){return Promise.all([n.e("chunk-512f8a4c"),n.e("chunk-1be125f4")]).then(n.bind(null,"c228"))},$=function(){return n.e("chunk-04bc55cb").then(n.bind(null,"3b42"))},A=function(){return Promise.all([n.e("chunk-512f8a4c"),n.e("chunk-011915af"),n.e("chunk-b5c46b44")]).then(n.bind(null,"6ab7"))},I=[{path:"",redirect:"/home"},{path:"/home",component:E},{path:"/category",component:B},{path:"/cart",component:L},{path:"/profile",component:$},{path:"/detail/:iid",component:A}],M=new j["a"]({routes:I,mode:"history"}),N=M,D=n("2f62"),q={addCounter:function(t,e){e.count++},addToCart:function(t,e){e.checked=!0,t.cartList.push(e)}},J=q,F={cartLength:function(t){return t.cartList.length},cartList:function(t){return t.cartList}},H=F,K=(n("7db0"),{addCart:function(t,e){return new Promise((function(n,r){var a=t.state.cartList.find((function(t){return t.iid===e.iid}));a?(t.commit("addCounter",a),n("当前商品数量加1"),r("添加失败，稍后再试")):(e.count=1,t.commit("addToCart",e),n("添加到购物车成功"),r("添加失败，稍后再试"))}))}}),U=K;r["a"].use(D["a"]);var z={cartList:[]},G=new D["a"].Store({state:z,mutations:J,getters:H,actions:U}),Q=G,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"toast"},[n("div",[t._v(t._s(t.message))])])},V=[],W={name:"Toast",data:function(){return{isShow:!1,message:"我是弹窗"}},methods:{show:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500;this.isShow=!0,this.message=t,setTimeout((function(){e.isShow=!1,e.message="我是弹窗"}),n)}}},X=W,Y=(n("f701"),Object(p["a"])(X,R,V,!1,null,"79a97786",null)),Z=Y.exports,tt={install:function(t){var e=t.extend(Z),n=new e;n.$mount(document.createElement("div")),document.body.appendChild(n.$el),t.prototype.$toast=n}},et=tt,nt=n("fe3c"),rt=n.n(nt);r["a"].config.productionTip=!1,r["a"].prototype.$bus=new r["a"],r["a"].use(et),rt.a.attach(document.body),new r["a"]({render:function(t){return t(O)},router:N,store:Q}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.11368804.svg"},6721:function(t,e,n){"use strict";n("3704")},"7bf3":function(t,e,n){"use strict";n("3522")},"934e":function(t,e,n){},9443:function(t,e,n){t.exports=n.p+"img/home.43fd8010.svg"},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.e3dac1fb.svg"},b508:function(t,e,n){t.exports=n.p+"img/home_active.74d1cc4d.svg"},beba:function(t,e,n){"use strict";n("934e")},c3f8:function(t,e,n){t.exports=n.p+"img/shopcart_active.3857810e.svg"},d151:function(t,e,n){t.exports=n.p+"img/profile_active.3ba58f85.svg"},e55d:function(t,e,n){t.exports=n.p+"img/profile.c2b75dfe.svg"},f701:function(t,e,n){"use strict";n("0733")}});
//# sourceMappingURL=app.0142695c.js.map