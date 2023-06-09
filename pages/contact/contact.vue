<template>
	<view class="contact">
		<view class="callme">
			<image src="../../static/image/icon/contact.svg" mode="" class="call"></image>
			<text>有问题联系我们~</text>
		</view>
		<view class="info">
			<view class="phone" @click="phone">
				联系电话：11111111111
			</view>
			<view class="address">
				地址：闽江学院
			</view>
			<map :latitude="latitude" :longitude="longitude" class="map" markers="markers"></map>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 中心纬度
				longitude: 119.16751,
				// 中心经度
				latitude: 26.06515,
				markers: [{
					longitude: 119.16751,
					latitude: 26.06515,
					iconPath: '../../static/image/icon/biaoji.svg',
					width: 20,
					height: 20
				}]
			}
		},
		methods: {
			phone() {
				uni.makePhoneCall({
					phoneNumber: '11111111111'
				})
			}
		}
	}
</script>

<style>
	@import url("contact.css");
</style>
