(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"27c6":function(t,i,e){"use strict";e.r(i);var a=e("a014"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a},"33af":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".carousel[data-v-2202a3cc]{width:100%;height:%?300?%}\r\n\r\n/* 每日图文 */.picture[data-v-2202a3cc]{width:%?750?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.pic uni-image[data-v-2202a3cc]{width:%?625?%}.text[data-v-2202a3cc]{width:%?500?%;padding:30px}.day[data-v-2202a3cc]{font-size:%?30?%;font-weight:700;margin-bottom:10px;margin-top:10px}.model[data-v-2202a3cc]{-webkit-box-shadow:3px 3px 8px silver;box-shadow:3px 3px 8px silver}.collection[data-v-2202a3cc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.collection uni-image[data-v-2202a3cc]{width:20px;height:40px;margin-right:30px}\r\n\r\n/* -----------------------新的！----------------------------- */.pic-2[data-v-2202a3cc]{text-align:center}.pic-2 uni-image[data-v-2202a3cc]{width:%?625?%;height:%?625?%}.user[data-v-2202a3cc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:5px}.userIcon[data-v-2202a3cc]{width:30px;height:30px;-webkit-border-radius:30px;border-radius:30px}.userName[data-v-2202a3cc]{color:#999;font-size:15px}.songName-box[data-v-2202a3cc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.songName[data-v-2202a3cc]{color:#999;font-weight:700;font-size:15px;-webkit-align-self:flex-end;align-self:flex-end}.item-pic uni-video[data-v-2202a3cc]{width:%?500?%;height:%?400?%;-webkit-border-radius:10px;border-radius:10px}.item-text[data-v-2202a3cc]{font-size:16px;width:%?350?%;height:%?60?%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mv[data-v-2202a3cc]{width:%?625?%}.items[data-v-2202a3cc]{display:-webkit-box;display:-webkit-flex;display:flex}.video[data-v-2202a3cc]{margin-right:%?50?%}",""]),t.exports=i},"3c69":function(t,i,e){"use strict";var a=e("d8cd"),s=e.n(a);s.a},a014:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{carouselList:[],hotComments:[],songDetail:{},songFlag:!1,mvids:[],mvUrl:[]}},methods:{getbanner:function(){var t=this,i=this.serverUrl;uni.request({url:i+"/banner",method:"POST",success:function(i){if(i.data.code>=200){var e=i.data.banners;t.carouselList=e}}})},getTuWen:function(){var t=this,i=569200210;uni.request({url:this.serverUrl+"/song/detail",data:{ids:i},success:function(e){console.log("歌曲信息",e.data.songs[0]),t.songDetail=e.data.songs[0],uni.request({url:t.serverUrl+"/comment/hot",data:{id:i,type:"0"},success:function(i){console.log("热门评论",i.data.hotComments),t.hotComments=i.data.hotComments,t.songFlag=!0}})}})},clickTuWen:function(t){uni.navigateTo({url:"../musicDetail/musicDetail?id="+t})},getMv:function(){var t=this;uni.request({url:this.serverUrl+"/personalized/mv",success:function(i){t.mvids=i.data.result,console.log("mv",t.mvids),t.getMvUrl()}})},getMvUrl:function(){for(var t=this,i=function(i){uni.request({url:t.serverUrl+"/mv/url",data:{id:t.mvids[i].id},success:function(e){console.log("mv地址",e.data),t.mvUrl.push(e.data.data.url),i==t.mvids.length-1&&console.log("",t.mvUrl)}})},e=0;e<this.mvids.length;e++)i(e)}},onLoad:function(){this.getbanner(),this.getTuWen(),this.getMv()}};i.default=a},aac2:function(t,i,e){"use strict";e.r(i);var a=e("dc90"),s=e("27c6");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("3c69");var c,o=e("f0c5"),r=Object(o["a"])(s["default"],a["b"],a["c"],!1,null,"2202a3cc",null,!1,a["a"],c);i["default"]=r.exports},c7c1:function(t,i,e){t.exports=e.p+"static/img/collection.e0bd3070.svg"},d8cd:function(t,i,e){var a=e("33af");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("2b87488a",a,!0,{sourceMap:!1,shadowMode:!1})},dc90:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"carousel"},[a("v-uni-swiper",{staticClass:"carousel",attrs:{"indicator-dots":!0,autoplay:!0}},t._l(t.carouselList,(function(i){return a("v-uni-swiper-item",[a("v-uni-image",{staticClass:"carousel",attrs:{src:i.imageUrl,mode:""}}),t._v("11")],1)})),1),a("v-uni-view",{staticClass:"picture"},[a("v-uni-view",{},[a("v-uni-view",{staticClass:"day"},[a("v-uni-text",[t._v("每日图文")])],1),a("v-uni-view",{staticClass:"model"},[a("v-uni-view",{staticClass:"pic"},[a("v-uni-image",{attrs:{src:e("fe0b"),mode:""}})],1),a("v-uni-view",{staticClass:"text"},[a("v-uni-text",[t._v("一个人如果刻意逃避他所惧怕的东西，到头来会发现自己只是抄了条近路去见它")])],1)],1),a("v-uni-view",{staticClass:"collection"},[a("v-uni-image",{attrs:{src:e("c7c1"),mode:""}}),a("v-uni-image",{attrs:{src:e("fcdd"),mode:""}})],1)],1)],1),t.songFlag?a("v-uni-view",{staticClass:"picture"},[a("v-uni-view",{},[a("v-uni-view",{staticClass:"day"},[a("v-uni-text",[t._v("歌曲推荐")])],1),a("v-uni-view",{staticClass:"model",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickTuWen(t.songDetail.id)}}},[a("v-uni-view",{staticClass:"pic-2"},[a("v-uni-image",{attrs:{src:t.songDetail.al.picUrl,mode:""}})],1),a("v-uni-view",{staticClass:"text"},[a("v-uni-text",[t._v(t._s(t.hotComments[5].content))]),a("v-uni-view",{staticClass:"user"},[a("v-uni-image",{staticClass:"userIcon",attrs:{src:t.hotComments[5].user.avatarUrl,mode:""}}),a("v-uni-text",{staticClass:"userName"},[t._v(t._s(t.hotComments[5].user.nickname))])],1),a("v-uni-view",{staticClass:"songName-box"},[a("v-uni-view",{staticClass:"songName"},[t._v("———— "+t._s(t.songDetail.name))])],1)],1)],1)],1)],1):t._e(),a("v-uni-view",{staticClass:"picture"},[a("v-uni-view",{staticClass:"mv"},[a("v-uni-view",{staticClass:"day"},[a("v-uni-text",[t._v("精选mv")])],1),a("v-uni-scroll-view",{attrs:{"scroll-x":"true"}},[a("v-uni-view",{staticClass:"items"},t._l(t.mvids,(function(i,e){return a("v-uni-view",{staticClass:"video"},[a("v-uni-view",{staticClass:"item-pic"},[a("v-uni-video",{attrs:{src:t.mvUrl[e],controls:!0}})],1),a("v-uni-view",{staticClass:"item-text"},[t._v(t._s(i.name))])],1)})),1)],1)],1)],1)],1)},n=[]},fcdd:function(t,i,e){t.exports=e.p+"static/img/up.80b6e52a.svg"},fe0b:function(t,i,e){t.exports=e.p+"static/img/2.41d8791a.jpg"}}]);