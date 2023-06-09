<template>
	<view class="page">
		<!-- 上面star -->
		<view :style="{backgroundImage:`url(${backgroundimgpath})`}" class="me-top">
			<view class="me-top-img">
				<image v-bind:src="usericon" mode=""></image>
				<text class="text" @click='getfile'>{{name}}</text>
			</view>
		</view>
		<!-- 上面end -->

		<!-- 我的收藏star -->
		<view class="collection-1">
			<view class="me-collection-text">
				我的收藏
			</view>
			<view class="me-collection-icon">
				<view class="me-collection-item">
					<image src="../../static/image/icon/singger.png" mode=""></image>
					<view>
						歌手
					</view>
				</view>
				<view @click="likeSongs()" class="me-collection-item">
					<image src="../../static/image/icon/music.png" mode=""></image>
					<view>
						喜欢的音乐
					</view>
				</view>
				<view class="me-collection-item">
					<image src="../../static/image/icon/film.svg" mode=""></image>
					<view>
						视频
					</view>
				</view>
			</view>
		</view>


		<!-- 最下面star -->
		<view class="me-end">
			<view class="me-end-items">
				<image src="../../static/image/icon/setup.png" mode=""></image>
				<text>设置</text>
			</view>
			<view class="line"></view>
			<view class="me-end-items">
				<image src="../../static/image/icon/call.png" mode=""></image>
				<text @click="contact">联系我们</text>
			</view>
			<view class="line"></view>
			<view class="me-end-items">
				<image src="../../static/image/icon/exit.png" mode=""></image>
				<text @click="exit">退出登录</text>
			</view>
			<view class="line"></view>
		</view>
		<!-- 最下面end -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '未登录',
				usericon: '../../static/image/icon/head.png',
				backgroundimgpath: '../../static/image/background-image/me-1.png',
				userid: '',
				likeSongsId: ''
			}
		},
		methods: {
			likeSongs() {
				uni.navigateTo({
					url: '../../pages/songsListdetail/songsListdetail?id=' + this.likeSongsId
				})
			},
			getfile() {
				uni.navigateTo({
					url: '../login/login'
				})
			},

			//最开始页面就调用 getApp()全局变量
			setfile() {
				let file = getApp().globalData.profile
					console.log(file)
				if (file == null) {

				} else {
					this.name = file.profile.nickname
					this.usericon = file.profile.avatarUrl
					this.userid = file.profile.userId
				
					this.getUserSongs()
				}

			},
			contact() {
				uni.navigateTo({
					url: '../contact/contact'
				})
			},
			exit() {
				uni.navigateTo({
					url: '../exit/exit'
				})
			},


			getUserSongs() {
				uni.request({
					url: this.serverUrl + '/user/playlist',
					data: {
						uid: this.userid
					},
					success: (res) => {
						console.log('用户歌单数据', res.data.playlist)
						this.likeSongsId = res.data.playlist[0].id
					}
				})

			}


		},
		onShow() {
			this.setfile()

		}

	}
</script>

<style>
	@import url("me.css");
</style>
