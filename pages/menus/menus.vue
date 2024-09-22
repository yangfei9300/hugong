<template>
	<view class="colonn">
		<image mode="widthFix" 
		src="/static/zhucetop.png" style="width: 750rpx;"></image>
		<view class="bghomeP">
			<view class="colonn center_center" 
			>
			<!-- style="min-height: 100%;" -->
				<view style="height:50px;"></view>
				<image style="width: 350px;height: 68px; margin-top:50px;" 
				src="/static/gogsimi.png"></image>
				<view style="height: 20px;"></view>
				<view class="loginimgP colonn ">
					<view class="h-100"></view>
					<image style="width: 342px; height: 380px; margin:0 auto; margin-top: -25px;"
					 class="dajweisa" 
					 src="/static/zhidaodanwei.png"></image>
					<view class="h-30"></view>
					<view class="roww rowsa" >
						<view></view>
						<view class="menu1 center_center colonn" @click.stop="toviewosP">
							<image class="iconimg" src="/static/Component 201@2x.png"></image>
							<view style="color: #0053FD;">视频学习</view>
						</view>
						<view class="menu1 center_center colonn" @click="tovieXuexi">
							<image class="iconimg" src="/static/Component 200@2x.png"></image>
							<view style="color: #0053FD;">理论学习</view>
						</view>
							<view></view>
					</view>
					<view class="h-40"></view>
				</view>
				
					<view class="h-40"></view>
			</view>
			<!-- <view class="h-150"></view> -->
		</view>
		<!-- <image mode="widthFix" src="/static/bottomimg.png" class="bottomimgP"></image> -->



		<view class="huuibeijing colonn center_center" v-if="alertShow">
			<view class="alertviewP colonn center_center">
				<view>系统无法查询到您的信息，请联系您所在的行业工会分会</view>
				<view style="height: 34rpx;"></view>
				<view class="quedingbtnP" @click.stop="alertShowClicl">确定</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				alertShow: false
			}
		},
		onLoad() {
this.toShare();
		},
		methods: {
			toShare(){
				console.error("分享");
				var url=window.location.href
							let os = ""
						    var xinxi=uni.getSystemInfoSync();
							console.log()
							
						    var link = "";
							link = window.location.href.split('#')[0];
				
				var data={  
					params:{
						exhType:"2",
						url:link
					}
				}
				var url="https://shandongtibohui.zsyflive.com/miniapp/wx/ticket"
				uni.request({
					url:url,
					method:"post",
					data:data,
					success: (res) => {
						console.log("--",res);
						var data1=res.data;
						
						var exType=uni.getStorageSync("exType")
						console.log("this.util",this.util)
							this.util.jwxModule(
							data1,
							"this.$tools.gettitle()",
							"this.$tools.gettitle()",
							window.location.href,
							"https://shandongtibohui.zsyflive.com/profile/upload/2022/08/03/16b9760cd7064e6aa756604b7202d396_20220803092628A006.png"
							)
						
					}
				})
				
			},
			toDati(){
				
			},
			alertShowClicl() {
				this.alertShow = !this.alertShow;
			},
			toviewosP() {
				uni.navigateTo({
					url: "/pages/videoList/videoList"
				})
			},
			tovieXuexi() {
				uni.navigateTo({
					url: "/pages/datiList/datiList"
				})
			}
		}
	}
</script>

<style>
	@import url(menus.css);

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