<template>
	<view :style="{backgroundImage:`url(${backgroundimgpath})`}" class="box">
		<view class="hand">
			<image src="../../static/image/icon/alien.png" mode=""></image>
		</view>
		<view class="login">
			<view class="id" @click="login">
				登录
			</view>
			<view class="psd" @click="regist">
				注册
			</view>

		</view>
		<view class="other">
			<view class="line"></view>
			<view class="other-text">其它方式登录</view>
			<view class="line"></view>
		</view>
		<view class="icon">
			<image src="../../static/image/icon/vx.svg" mode=""></image>
			<image src="../../static/image/icon/qq.svg" mode=""></image>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				id: "",
				password: "",
				backgroundimgpath: '../../static/image/background-image/login.jpg',
			}
		},
		methods: {
			login() {
				uni.navigateTo({
					url: '../login/login'
				})
			},
			regist() {
				uni.navigateTo({
					url: '../regist/regist'
				})
			}
		}
	}
</script>

<style>
	@import url("exit.css");
</style>
