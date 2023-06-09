<template>
	<view class="">
		<view class="songBox-one">
			<view class="">
				<image class="songsImg" :src="songsListDetail.coverImgUrl" mode=""></image>
			</view>
			<text class="songsText">{{songsListDetail.name}}</text>
		</view>
		<view class="musicBox">
			<view @click="getMusicUrl(item.id,item.name,item.al.picUrl)" class="musicItem" v-for="(item,index) in musicList" :key="index">
				<text class="musicIndex">{{index+1}}.</text>
				<text class="musicName"> {{item.name}}</text>
			</view>
		</view>

		<!-- 播放栏 -->
		<view class="tabbar">
			<image class="musicImg" :src="musicUrl" mode=""></image>
			<text>{{musicName}}</text>
			<!-- ../../static/image/icon/播放(2).svg -->
			<!-- ../../static/image/icon/播放(1).svg -->
			<image @click="setIcon" class="icon" :src="icon[iconAction]" mode=""></image>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 歌曲封面
				musicUrl:'',
				// 显示在状态栏的歌曲名称
				musicName:'听点什么~',
				// 控制图标
				iconAction:0,
				// 播放和暂停按钮
				icon:['../../static/image/icon/play2.svg','../../static/image/icon/play1.svg'],
				// 歌单详情对象 （对象属性 name歌单名称 description歌单描述 coverImgUrl歌单封面）
				songsListDetail: {},
				// 歌曲id字符串  每个id用逗号分隔 
				musicStr: '',
				// 歌曲数组（数组项 id歌曲id  name歌曲名称  ar歌手数组 |用法|musicList[0].ar[0].name  -->歌手1名称）
				musicList: []
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
			// 获取歌单详情
			getSongsDetail(id) {
				uni.request({
					url: this.serverUrl + '/playlist/detail',
					data: {
						id: id
					},
					success: (res) => {
						console.log(res.data.playlist)
						this.songsListDetail = res.data.playlist
						// 音乐id数组
						let idArray = res.data.playlist.trackIds

						// 获取音乐id字符串  用于查询音乐详情
						for (let i = 0; i < idArray.length; i++) {
							if (i == idArray.length - 1) {
								this.musicStr = this.musicStr + idArray[i].id
							} else {
								this.musicStr = this.musicStr + idArray[i].id + ','
							}
						}
						//获取音乐详情
						this.getMusicDetail()
					}
				})
			},
			// 获取音乐详细信息
			getMusicDetail(idStr) {
				uni.request({
					url: this.serverUrl + '/song/detail',
					data: {
						ids: this.musicStr
					},
					success: (res) => {
						// 音乐列表数组
						this.musicList = res.data.songs
						console.log(res.data.songs)
					}
				})
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
			},
			// 初始化状态栏
			init(){
				if(this.musicPlay.state==1){
					this.iconAction=1
					this.musicName=this.musicPlay.name
					this.musicUrl=this.musicPlay.url
				}else{
					this.iconAction=0
					this.musicName=this.musicPlay.name
					this.musicUrl=this.musicPlay.url
				}
			}
		},
		created(){
			this.init()
		},
		onLoad(obj) {
			// 调用获取歌单详情的方法
			this.getSongsDetail(obj.id)
		}
	}
</script>

<style>
	@import url("songsListdetail.css");
</style>
