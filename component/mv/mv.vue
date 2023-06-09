<template>
	<view class="">
		<view class="film" v-for="(item,index) in mvSelfList" :key="index">
			<view class="name">
				{{item.name}}
			</view>
			<view @click="mvDetail(item.id)" class="film-pic">
				<image v-if="videoFalg" :src="item.cover" mode=""></image>
				<video v-else controls autoplay="true"></video>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['mvList'],
		data() {
			return {
				mvSelfList: [],
				videoFalg: true
			}
		},
		methods: {
			// 进入mv详情播放页面
			mvDetail(id) {
				uni.navigateTo({
					url: '../../pages/mvDetail/mvDetail?id=' + id
				})

			}
		},
		// 监听父组件传递的数据是否发生变化
		watch: {
			mvList: {
				handler() {
					console.log('mv组件数据变化')
					this.mvSelfList = this.mvList
					console.log('mv列表数据', this.mvSelfList)
				}
			}
		}
	}
</script>

<style>
	@import url("mv.css");
</style>
