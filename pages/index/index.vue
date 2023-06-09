<template>
	<view class="carousel">
		<!-- 轮播图 star-->
		<swiper :indicator-dots="true" :autoplay="true" class="carousel">
			<swiper-item v-for="carousel in carouselList">
				<image :src="carousel.imageUrl" mode="" class="carousel">11</image>
			</swiper-item>
		</swiper>
		<!-- 轮播图end -->

		<view class="picture">
			<view class="">
				<view class="day">
					<text>每日图文</text>
				</view>
				<view class="model">
					<view class="pic">
						<image src="../../static/image/background-image/2.jpg" mode=""></image>
					</view>
					<view class="text">
						<text>一个人如果刻意逃避他所惧怕的东西，到头来会发现自己只是抄了条近路去见它</text>
					</view>
				</view>
				<view class="collection">
					<image src="../../static/image/icon/collection.svg" mode=""></image>
					<image src="../../static/image/icon/up.svg" mode=""></image>
				</view>
			</view>
		</view>

		<!-- 歌曲推荐 -->
		<view v-if="songFlag" class="picture">
			<view class="">
				<view class="day">
					<text>歌曲推荐</text>
				</view>
				<view @click="clickTuWen(songDetail.id)" class="model">
					<view class="pic-2">
						<image :src="songDetail.al.picUrl" mode=""></image>
					</view>
					<view class="text">
						<!-- 用户评论 -->
						<text>{{hotComments[5].content}}</text>

						<view class="user">
							<!-- 用户icon -->
							<image class="userIcon" :src="hotComments[5].user.avatarUrl" mode=""></image>
							<!-- 用户name -->
							<text class="userName">{{hotComments[5].user.nickname}}</text>
						</view>
						<view class="songName-box">
							<!-- 歌曲名 -->
							<view class="songName">———— {{songDetail.name}}</view>

						</view>

					</view>
				</view>
			</view>
		</view>

		<!-- 精选mv -->
		<view class="picture">
			<view class="mv">
				<view class="day">
					<text>精选mv</text>
				</view>

				<scroll-view scroll-x="true">
					<view class="items">
						<!-- 视频 -->
						<view class="video" v-for="(item,index) in mvids">
							<view class="item-pic">
								<video :src="mvUrl[index]" controls></video>
							</view>

							<view class="item-text">
								{{item.name}}
							</view>
						</view>

					</view>
				</scroll-view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				carouselList: [],
				hotComments: [],
				songDetail: {},
				songFlag: false,
				mvids: [],
				mvUrl: []
			}
		},
		methods: {
			getbanner() {
				//通过挂载到main.js中获取服务器的地址
				var serverUrl = this.serverUrl;
				//请求轮播图
				uni.request({
					url: serverUrl + '/banner',
					method: "POST",
					success: (res) => {
						//获取真实数据之前 判断状态是否为200
						if (res.data.code >= 200) {
							var carouselList = res.data.banners;
							this.carouselList = carouselList;
						}
					}
				});
			},
			// 获取  一个音乐信息 一个热门评论  
			getTuWen() {
				let id = 569200210
				uni.request({
					url: this.serverUrl + '/song/detail',
					data: {
						ids: id
					},
					success: (res) => {
						console.log('歌曲信息', res.data.songs[0])
						this.songDetail = res.data.songs[0]
						uni.request({
							url: this.serverUrl + '/comment/hot',
							data: {
								id: id,
								type: '0'
							},
							success: (res) => {
								console.log('热门评论', res.data.hotComments)
								this.hotComments = res.data.hotComments
								this.songFlag = true
							}
						})
					}
				})
			},
			clickTuWen(id) {
				uni.navigateTo({
					url: '../musicDetail/musicDetail?id=' + id
				})
			},

			getMv() {
				uni.request({
					//获取接口
					url: this.serverUrl + '/personalized/mv',
					//接收数据
					success: (res) => {
						this.mvids = res.data.result
						console.log('mv', this.mvids)
						this.getMvUrl()
					}
				})
			},
			//获取mv的地址
			getMvUrl() {
				for (let i = 0; i < this.mvids.length; i++) {
					uni.request({
						url: this.serverUrl + '/mv/url',
						//发送的参数
						data: {
							id: this.mvids[i].id,
						},
						success: (res) => {
							console.log('mv地址', res.data)
							this.mvUrl.push(res.data.data.url)
							if (i == this.mvids.length - 1) {
								console.log('', this.mvUrl)
							}
						}
					})
				}
			}

		},
		//页面加载
		onLoad() {
			this.getbanner()
			this.getTuWen()
			this.getMv()
		}

	}
</script>

<style>
	@import url("index.css");
</style>
