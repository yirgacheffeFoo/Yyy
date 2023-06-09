<template>
	<!-- 这个组件用在 了 搜索页 pages/searchDetail/serchDetail.vue -->
	<view class="">
		<view class="musicBox">
			<view @click="getMusicUrl(item.id,item.name,item.al.picUrl)" class="musicItem" v-for="(item,index) in musicSelfList" :key="index">
				<view class="">
					<text class="musicIndex">{{index+1}}. </text>
					<text class="musicName"> {{item.name}}</text>
				</view>
				<view class="singer">----{{item.ar[0].name}}</view>
			</view>
		</view>
		<view class="tabbar">
			<image class="musicImg" :src="musicUrl" mode=""></image>
			<text>{{musicName}}</text>
			<image @click="setIcon" class="icon" :src="icon[iconAction]" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['musicList'],
		data() {
			return {
				musicSelfList: [],
				// 歌曲封面
				musicUrl:'',
				// 显示在状态栏的歌曲名称
				musicName:'听点什么~',
				// 控制图标
				iconAction:0,
				// 播放和暂停按钮
				icon:['../../static/image/icon/播放(2).svg','../../static/image/icon/播放(1).svg']
			}
		},
		methods: {
			setIcon(){
				if(this.iconAction==0){
					// 播放
					this.iconAction=1
					this.musicPlay.play()
				}else{
					// 暂停
					this.musicPlay.pause()
					this.iconAction=0
				}
			},
			// 获取音乐url 获取到后 放入音乐播放的全局实例
			getMusicUrl(musicId,musicName,musicUrl) {
				console.log('歌曲id', musicId)
				uni.request({
					url: this.serverUrl + '/song/url',
					data: {
						id: musicId,
					},
					success: (res) => {
						// 音乐的url
						let url = res.data.data[0].url
						console.log(url)
						// 给播放实例的src赋值
						this.musicPlay.src = url
						// 改变当前状态栏
						this.iconAction=1
						this.musicName=musicName
						this.musicUrl=musicUrl
						// 把播放歌曲的数据放进this.musicPlay对象中存储
						this.musicPlay.name=musicName
						this.musicPlay.url=musicUrl
						
					}
				})
			}
		},
		// 监听父组件传递的数据是否发生变化
		watch: {
			musicList: {
				handler() {
					this.musicSelfList = this.musicList
				}
			}
		}

	}
</script>

<style>
	@import url("musicList.css");
</style>
