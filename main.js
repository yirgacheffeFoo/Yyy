import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 公共请求地址头
Vue.prototype.serverUrl="http://localhost:3000"
// Vue.prototype.serverUrl="https://autumnfish.cn/"
// Vue.prototype.serverUrl = "http://8.129.13.34:3000"

// 全局播放对象
const musicObj = uni.createInnerAudioContext()

// 歌曲名
musicObj.name = ''
// 歌曲图片
musicObj.url = ''
// 播放状态 state=0为暂停 state=1为正在播放 
musicObj.state = ''
// 设置监听
musicObj.onPlay(function() {
	musicObj.state = 1
})
musicObj.onPause(function() {
	musicObj.state = 0
})
musicObj.onStop(function() {
	musicObj.state = 0
})

musicObj.autoplay = true
// 设置全局对象
Vue.prototype.musicPlay = musicObj

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
