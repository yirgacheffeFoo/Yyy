<template>
	<view class="type">
		<view class="me-collection-icon">
			<view @click="setAction(0)" class="me-collection-item">
				<image src="../../static/image/icon/singger.png" mode=""></image>
				<view>歌手</view>
			</view>
			<view @click="setAction(1),getSongsList(0)"  class="me-collection-item ">
				<image src="../../static/image/icon/music.png" mode=""></image>
				<view>歌单</view>
			</view>
			<view @click="setAction(2),getMvList()"  class="me-collection-item">
				<image src="../../static/image/icon/film.svg" mode=""></image>
				<view>视频</view>
			</view>
		</view>
			
		<view class="big">
			<image-text v-if="action[0].action"></image-text>
			<songs v-if="action[1].action" :songsList="songsList"></songs>
			<mv v-if="action[2].action" :mvList="mvList"></mv>
		</view>
	</view>
</template>

<script>
	// 引入组件
	import mv from '../../component/mv/mv.vue'
	import songs from '../../component/songs/songs.vue'
	import singer from '../../component/singer/singer.vue'
	export default {
		data(){
			return {
				action:[
					{type:'歌手',action:true},
				    {type:'歌单',action:false},
					{type:'视频',action:false}
				],
				// 传递给songs组件的数据
				songsList:[],
				// 传递给mv组件的数据
				mvList:[]
			}
		},
		methods: {
			// 控制组件显示的方法
			setAction(action){
				for(let i=0;i<this.action.length;i++){
					if(i==action){
						this.action[i].action=true
					}else{
						this.action[i].action=false
					}
				}
			},
			// 获取歌单列表数据
			getSongsList(before){
				uni.request({
					url:this.serverUrl+'/top/playlist/highquality',
					data:{
						limit:'20',
						before
					},
					method:'GET',
					success:(res)=>{
						//组合旧的数组和新获取的数组
						this.songsList=[...this.songsList,...res.data.playlists]
					}
				})
			},
			// 获取mv列表数据
			getMvList(){
				uni.request({
					url:this.serverUrl+'/mv/exclusive/rcmd',
					success:(res)=>{
					   this.mvList=res.data.data
					}
				})
			}
		},
		// 页面触底监听函数
		onReachBottom(){
			if(this.action[1].action==true){
				let before=this.songsList[this.songsList.length-1].updateTime
				this.getSongsList(before)
			}
		},
		// 注册子组件
		components:{
			mv:mv,
			songs:songs,
			imageText:singer
		}
	}
</script>

<style>
	@import url("classification.css");
</style>
