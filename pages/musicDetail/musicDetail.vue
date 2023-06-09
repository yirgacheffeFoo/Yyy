<template>
	<view v-if="songFlag" class="box">
		
		<view class="music">
		    <image class="music-image" :src="songDetail.al.picUrl" mode="">
				<view class="music-icon-box">
					<image @click="setIcon" :src="icon[iconAction]"  class="music-icon" mode=""></image>
				</view>
			</image>
			<view class="name">《{{songDetail.name}}》 </view>
			<view class="">{{songDetail.ar[0].name}}</view>
		</view>
		<!-- 评论 -->
		<view class="comment-box">
		   <view @click="clickRemove" class="click">
			<image src="../../static/image/icon/prev.svg" mode=""></image>
	    	</view>
			<view class="comment">
			
					{{hotComments[index].content}}
			
			</view>
			
			<view @click="clickAdd" class="click">
				<image src="../../static/image/icon/next.svg" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				id:'',
				hotComments:[],
				songDetail:{},
				songFlag:false,
				index:4,
				limit:20,
				offset:0,
				icon:['../../static/image/icon/play2.svg','../../static/image/icon/play1.svg'],
				iconAction:1
			}
		},
		methods:{
			setIcon(){
				if(this.iconAction==0){
					// 播放
					this.iconAction=1
					this.musicPlay.play()
				}else{
					// 暂停
					this.musicPlay.pause()
					this.iconAction=0
				}
			},
			// 获取歌曲信息和评论
			getMessage(){
				console.log(this.id)
				uni.request({
					url:this.serverUrl+'/song/detail',
					data:{
						ids:this.id
					},	
					success:(res)=>{
				      this.songDetail=res.data.songs[0]
					  //给全局设置
					  this.musicPlay.name=this.songDetail.name
					  this.musicPlay.url=this.songDetail.al.picUrl
					  this.getComment()
					}
				})
			},
			getComment(){
				// 获取热门评论
				   uni.request({
				   	url:this.serverUrl+'/comment/hot',
				   	data:{
				   		id:this.id,
				   		type:'0',
						limit:this.limit,
						offset:this.offset
				   	},
				   	success:(res)=>{
				   		this.hotComments=[...this.hotComments,...res.data.hotComments]
				   		this.songFlag=true
						this.offset=this.offset+this.limit
				   	}
				})
			},
		    clickAdd(){
				this.index++
				if((this.index+1)==this.offset){
					this.getComment()
				}
			},
			clickRemove(){
				if(this.index!=0){
					this.index--
				}else{
					uni.showToast({
						title:'已经是第一条了~'
					})
				}
			},						
			// 获取音乐url 获取到后 放入音乐播放的全局实例
			getMusicUrl(musicId,musicName,musicUrl){
							console.log('歌曲id',musicId)
							uni.request({
								url:this.serverUrl+'/song/url',
								data:{
								  id:musicId,
								},
								success:(res)=>{
									// 音乐的url
									let url=res.data.data[0].url
									console.log(url)
									this.musicPlay.src=url
									// 把播放歌曲的数据放进this.musicPlay对象中存储
								
								}
							})	
						}
		},
		onLoad(obj){
			this.id=obj.id
			this.getMessage()
			this.getMusicUrl(this.id)
		}
	}
</script>

<style>
	@import url("musicDetail.css");
</style>
