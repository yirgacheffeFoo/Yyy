(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-musicDetail-musicDetail"],{"06af":function(t,e,i){"use strict";i.r(e);var n=i("31df"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"06c5":function(t,e,i){"use strict";i("a630"),i("fb6a"),i("d3b7"),i("25f0"),i("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var n=a(i("6b75"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(t){if("string"===typeof t)return(0,n.default)(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?(0,n.default)(t,e):void 0}}},"07e3":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".music-icon-box[data-v-eed8962a]{position:absolute;width:%?150?%;height:%?150?%;-webkit-border-radius:%?150?%;border-radius:%?150?%;top:36%;left:40%}.music-icon[data-v-eed8962a]{width:%?150?%;height:%?150?%}.music[data-v-eed8962a]{text-align:center;position:relative}.music-image[data-v-eed8962a]{position:none;border:1px #676767 solid;width:%?400?%;height:%?400?%;-webkit-border-radius:%?400?%;border-radius:%?400?%;margin-top:50px;-webkit-box-shadow:3px 3px 8px silver;box-shadow:3px 3px 8px silver}.name[data-v-eed8962a]{margin-top:10px;margin-bottom:10px}.comment[data-v-eed8962a]{width:%?350?%;-webkit-box-shadow:3px 3px 8px #e3e3e3;box-shadow:3px 3px 8px #e3e3e3;-webkit-border-radius:5px;border-radius:5px;padding:5px;background-color:#fff}.comment-box[data-v-eed8962a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.click[data-v-eed8962a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?100?%;height:%?100?%;-webkit-border-radius:%?100?%;border-radius:%?100?%;background-color:#fff;-webkit-box-shadow:3px 3px 8px #e3e3e3;box-shadow:3px 3px 8px #e3e3e3}.click uni-image[data-v-eed8962a]{width:%?70?%;height:%?70?%}",""]),t.exports=e},2909:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var n=c(i("6005")),a=c(i("db90")),o=c(i("06c5")),s=c(i("3427"));function c(t){return t&&t.__esModule?t:{default:t}}function r(t){return(0,n.default)(t)||(0,a.default)(t)||(0,o.default)(t)||(0,s.default)()}},"31df":function(t,e,i){"use strict";var n=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("2909")),o={data:function(){return{id:"",hotComments:[],songDetail:{},songFlag:!1,index:4,limit:20,offset:0,icon:["../../static/image/icon/play2.svg","../../static/image/icon/play1.svg"],iconAction:1}},methods:{setIcon:function(){0==this.iconAction?(this.iconAction=1,this.musicPlay.play()):(this.musicPlay.pause(),this.iconAction=0)},getMessage:function(){var t=this;console.log(this.id),uni.request({url:this.serverUrl+"/song/detail",data:{ids:this.id},success:function(e){t.songDetail=e.data.songs[0],t.musicPlay.name=t.songDetail.name,t.musicPlay.url=t.songDetail.al.picUrl,t.getComment()}})},getComment:function(){var t=this;uni.request({url:this.serverUrl+"/comment/hot",data:{id:this.id,type:"0",limit:this.limit,offset:this.offset},success:function(e){t.hotComments=[].concat((0,a.default)(t.hotComments),(0,a.default)(e.data.hotComments)),t.songFlag=!0,t.offset=t.offset+t.limit}})},clickAdd:function(){this.index++,this.index+1==this.offset&&this.getComment()},clickRemove:function(){0!=this.index?this.index--:uni.showToast({title:"已经是第一条了~"})},getMusicUrl:function(t,e,i){var n=this;console.log("歌曲id",t),uni.request({url:this.serverUrl+"/song/url",data:{id:t},success:function(t){var e=t.data.data[0].url;console.log(e),n.musicPlay.src=e}})}},onLoad:function(t){this.id=t.id,this.getMessage(),this.getMusicUrl(this.id)}};e.default=o},3427:function(t,e,i){"use strict";function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},6005:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var n=a(i("6b75"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t))return(0,n.default)(t)}},"6b75":function(t,e,i){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},8209:function(t,e,i){t.exports=i.p+"static/img/prev.ac800502.svg"},b237:function(t,e,i){"use strict";i.r(e);var n=i("eacd"),a=i("06af");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("e360");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"eed8962a",null,!1,n["a"],s);e["default"]=r.exports},db90:function(t,e,i){"use strict";function n(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("d3b7"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},e360:function(t,e,i){"use strict";var n=i("f3ac"),a=i.n(n);a.a},eacd:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.songFlag?n("v-uni-view",{staticClass:"box"},[n("v-uni-view",{staticClass:"music"},[n("v-uni-image",{staticClass:"music-image",attrs:{src:t.songDetail.al.picUrl,mode:""}}),n("v-uni-view",{staticClass:"music-icon-box"},[n("v-uni-image",{staticClass:"music-icon",attrs:{src:t.icon[t.iconAction],mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setIcon.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"name"},[t._v("《"+t._s(t.songDetail.name)+"》")]),n("v-uni-view",{},[t._v(t._s(t.songDetail.ar[0].name))])],1),n("v-uni-view",{staticClass:"comment-box"},[n("v-uni-view",{staticClass:"click",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickRemove.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:i("8209"),mode:""}})],1),n("v-uni-view",{staticClass:"comment"},[t._v(t._s(t.hotComments[t.index].content))]),n("v-uni-view",{staticClass:"click",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickAdd.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:i("fbef"),mode:""}})],1)],1)],1):t._e()},o=[]},f3ac:function(t,e,i){var n=i("07e3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4f2c012a",n,!0,{sourceMap:!1,shadowMode:!1})},fbef:function(t,e,i){t.exports=i.p+"static/img/next.97868d7d.svg"}}]);