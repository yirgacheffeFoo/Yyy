<template>
	<view class="">

		<view class="all">

			<view @click="setFlag(index)" v-for="(item,index) in navs" class="singer" :class="{'bc':item.flag}">
				<text>{{item.name}}</text>
			</view>


		</view>
		<view class="singer-items">
			<view class="items" v-for="item in singerList">
				<view class="item-pic">

					<image :src="item.img1v1Url" mode=""></image>
				</view>
				<view class="item-text">

					{{item.name}}
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				singerList: [],
				navs: [{
						name: '全部',
						flag: true
					},
					{
						name: '男歌手',
						flag: false
					},
					{
						name: '女歌手',
						flag: false
					},
					{
						name: '乐队',
						flag: false
					}
				]
			}
		},
		methods: {
			setFlag(index) {
				for (let i = 0; i < this.navs.length; i++) {
					this.navs[i].flag = false
				}
				this.navs[index].flag = true
			},
			getSinger() {
				uni.request({
					url: this.serverUrl + '/artist/list',
					success: (res) => {
						this.singerList = res.data.artists
					}
				})
			}
		},
		created() {
			console.log('页面创建')
			this.getSinger()
		}
	}
</script>

<style>
	@import url("singer.css");
</style>
