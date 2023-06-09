<template>
	<view class="box">
		<view class="box-width">

			<view class="titleBox">
				<view class="title">
					{{mvDetail.name}}
				</view>
				<view class="">
					<video @play="setplay()" :src="mvUrl" controls></video>
				</view>

			</view>
			<!-- 简介 -->

			<view class="mvDesc">
				<text>简介:</text>
				<view class="">
					{{mvDetail.desc}}
				</view>
			</view>
			<!-- mv评论 -->
			<view class="mvComment">
				<view class="mvComment-title">评论区</view>
				<view v-for="(item,index) in mvComment" class="user" :key="index">
					<view class="userShow">
						<image :src="item.user.avatarUrl" mode="" class="userImg"></image>
						<view class="userName">{{item.user.nickname}}</view>

					</view>
					<view class="userText">{{item.content}}</view>

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mvid: '',
				mvDetail: {},
				mvUrl: '',
				mvComment: {}
			}
		},
		methods: {
			// 获取MV的URL
			getMvUrl() {
				uni.request({
					url: this.serverUrl + '/mv/url',
					data: {
						id: this.mvid,
						r: 720
					},
					success: (res) => {
						this.mvUrl = res.data.data.url
					}
				})
			},
			// 获取MV数据
			getMvDetail() {
				uni.request({
					url: this.serverUrl + '/mv/detail',
					data: {
						mvid: this.mvid,
					},
					success: (res) => {
						this.mvDetail = res.data.data
						console.log(this.mvDetail)
					}
				})
			},
			// 获取mv评论
			getMvComment() {
				uni.request({
					url: this.serverUrl + '/comment/mv',
					data: {
						id: this.mvid,
					},
					success: (res) => {
						this.mvComment = res.data.comments
					}
				})
			},
			setplay() {
				this.musicPlay.pause()
			}

		},
		onLoad(obj) {
			this.mvid = obj.id
			this.getMvDetail()
			this.getMvUrl()
			this.getMvComment()
		}
	}
</script>

<style>
	@import url("mvDetail.css");
</style>
