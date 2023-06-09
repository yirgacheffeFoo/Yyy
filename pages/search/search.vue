<template>
	<view class="page">
		<view class="search">
			<input v-model="inputWord" type="text" maxlength="20" focus placeholder="在这里写下你想寻找的" class="search-text" />
			<view class="search-ico">
				<image @click="clickSearch" src="../../static/image/icon/searchbox.svg" mode=""></image>
			</view>
		</view>

		<view class="hot">

			<text class="text">热搜榜</text>
			<view class="line"></view>
			<view v-if="hotFlag" class="hot-box">
				<view @click="clickHot(hotSearch[i].searchWord)" class="hot-num-1" v-for="i in 6" :key="i">
					<image class="hot-icon-1" :src="hotIcon[i]" mode=""></image>
					<text>{{hotSearch[i].searchWord}}</text>
					<image class="hot-icon-2" :src="hotSearch[i].iconUrl" mode=""></image>
				</view>

			</view>

		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				hotSearch: [],
				// 热搜前图标
				hotIcon: [
					'../../static/image/icon/1.png',
					'../../static/image/icon/2.png',
					'../../static/image/icon/3.png',
					'../../static/image/icon/4.png',
					'../../static/image/icon/5.png',
					'../../static/image/icon/6.png',
				],
				// 搜索的关键字
				inputWord: '',
				// 是否显示
				hotFlag: false
			}
		},
		methods: {
			gethotSearch() {
				uni.request({
					url: this.serverUrl + '/search/hot/detail',
					success: (res) => {
						this.hotSearch = res.data.data
						// 当热搜数据加载完成后 显示热搜
						this.hotFlag = true
					}
				})
			},
			// 点击热搜词时，搜索热搜词
			clickHot(hotword) {
				this.inputWord = hotword
				this.clickSearch()
			},
			// 点击搜索图标时，搜索
			clickSearch() {
				uni.navigateTo({
					url: '../searchDetail/searchDetail?inputWord=' + this.inputWord
				})
			}
		},
		onLoad() {
			this.gethotSearch()
		}

	}
</script>

<style>
	@import url("search.css");
</style>
