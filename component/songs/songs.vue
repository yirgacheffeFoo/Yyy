<template>
	<!-- 歌单列表组件 接收父组件传递的歌单列表数组  -->
	<view class="box">
		<view @click="clickDetail(item.id)" class="music" v-for="item in selfSongsList" :key="item.id">
			<view class="music-items">
				<view class="item-pic">
					<image :src="item.coverImgUrl" mode=""></image>
				</view>
				<view class="num">
					<image src="../../static/image/icon/play.svg" mode=""></image>
					<text>{{item.playCount}}</text>
				</view>
				<view class="item-text">
					{{item.name}}
					<!-- description详情  -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['songsList'],
		data() {
			return {
				selfSongsList: []
			}
		},
		methods: {

			// 点击歌单 装转跳页面 传递歌单id
			clickDetail(id) {
				uni.navigateTo({
					url: '../../pages/songsListdetail/songsListdetail?id=' + id
				})
			}
		},
		// 监听父组件传递的数据是否发生变化
		watch: {
			songsList: {
				handler() {
					console.log('songs组件数据变化')
					this.selfSongsList = this.songsList
				}
			}
		}

	}
</script>

<style>
	@import url("songs.css");
</style>
