<template>
	<!-- 背景图 -->
	<view :style="{backgroundImage:`url(${backgroundimgpath})`}" class="box">
		<!-- 头 -->
		<view class="hand">
			<image src="../../static/image/icon/alien.png" mode=""></image>
		</view>
		<!-- 账号密码 -->
		<view class="login">
			<view class="id">
				<image src="../../static/image/icon/id.svg" mode="" class="img"></image>
				<input type="text" v-model="id" value="" class="input" placeholder="手机号码登录" />
			</view>
			<view class="psd">
				<image src="../../static/image/icon/pwd.svg" mode="" class="img"></image>
				<input type="password" v-model="password" value="" class="input" placeholder="密码" />
			</view>
			<view class="btn">
				<image src="../../static/image/icon/btn.svg" mode="" @click="login"></image>
			</view>
		</view>
		<!-- 其他登录方式 -->
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
				uni.showToast({
					title:'登录成功'
				})
				getApp().globalData.profile = {
					profile:{
						nickname:"用户1",
						avatarUrl:"/static/image/icon/1.png",
						userId:"123"
					}
					
				}
				setTimeout(()=>{
					uni.navigateBack()
				},200)
				
				// uni.request({
				// 	url: this.serverUrl + '/login/cellphone',
				// 	method: "POST",
				// 	// 传递参数
				// 	data: {
				// 		phone: this.id,
				// 		password: this.password
				// 	},
				// 	// 接收数据
				// 	success: (res) => {
				// 		if (res.data.code == 200) {
				// 			console.log(res.data)
				// 			getApp().globalData.profile = res.data
				// 			uni.navigateBack()
				// 		} else {
				// 			uni.showToast({
				// 				title: '账号或密码错误'
				// 			})
				// 		}
				// 	}
				// })
			}

		}
	}
</script>

<style>
	@import url("login.css");
</style>
