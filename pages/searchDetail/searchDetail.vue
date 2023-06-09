<template>
	<!-- 搜索详情页 -->
	<view class="">
		<view class="search">
			<input v-model="inputWord" type="text" maxlength="20" focus placeholder="在这里写下你想寻找的" class="search-text" />
			<view class="search-ico">
				<image @click="clickSearch" src="../../static/image/icon/searchbox.svg" mode=""></image>
			</view>
		</view>

		<view class="">
			<musicList :musicList="musicList" ></musicList>
		</view>
		
	</view>
</template>

<script>
	import musicList from '../../component/musicList/musicList.vue'
	export default {

		data() {
			return {
				inputWord: '',
				searchData: '',
				//传给 单曲列表 的数据 
				musicList: [],
				icon:['../../static/image/icon/play2.svg','../../static/image/icon/play1.svg'],
				// 歌曲封面
				musicUrl:'',
				// 显示在状态栏的歌曲名称
				musicName:'听点什么~',
				// 控制图标
				iconAction:0,
			}
		},
		methods: {
			clickSearch() {
				uni.request({
					url: this.serverUrl + '/cloudsearch',
					data: {
						keywords: this.inputWord,
						type: 1
					},
					success: (res) => {
						console.log(res.data)
						this.musicList = res.data.result.songs
					}
				})
			}
		},
		onLoad(obj) {
			this.inputWord = obj.inputWord
			this.clickSearch()
		},
		components: {
			musicList: musicList
		}
	}
</script>

<style>
	@import url("searchDetail.css");
</style>
