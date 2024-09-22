<template>
	<view class="colonn">
		<image mode="widthFix" src="/static/zhucetop.png" style="width: 750rpx;"></image>
		<view class="bghomeP colonn center_center">
			<view  class="viewbigview colonn center_center">
				<view style="color:white;font-weight: bold;">{{src.name}}</view>
				<view style="height: 30rpx;"></view>
				<video :src="src.cover"></video>
			</view>
		</view>
		<!-- <image mode="widthFix" src="/static/bottomimg.png" class="bottomimgP"></image> -->
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:null
			}
		},
		onLoad() {
			this.src=uni.getStorageSync("videoInfo")
			this.historyI();
			
		},
		methods: {
			historyI(){
				this.$axios
					.axios('post',this.$paths.userView,{
						video_id:this.src.id,
						'uuid':uni.getStorageSync("uuid")})
					.then(res => {
						console.log('轮播图颜色', res);
						if(res.code==1){
							
						}else{
							this.$tools.showToast(res.info);
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			}
		}
	}
</script>


<style>
	@import url(viewoInfo.css);

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;  
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>