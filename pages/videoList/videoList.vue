<template>
	<view class="colonn">
		<image mode="widthFix" src="/static/zhucetop.png" style="width: 750rpx;"></image>
		<view class="bghomeP colonn center_center" style="height: 730px;">
			<view class="colonn center_center"  style=" height: 80%; bottom: 0px;">
				<image style="width: 350px;height: 68px; margin-top: 0px;" src="/static/gogsimi.png"></image>
				<view style="height: 20px;"></view>
				<view class="loginimgP colonn "style="width: 350px;height: 470px; margin-top: 30px; margin: 0 auto;">  
					<view class="h-100;" style="height: 77px"></view>
					<view class="scrollview colonn" style="overflow-y: scroll; width: 370px; height: 370px;" scroll-y >
						<view class="colonn center_center w-600;" style="margin-right: 42px;" >
							<view class="h-60;" style="height: 12px"></view>
							<view class="videoviewitejm roww center_center"
							@click.stop="toShowVideo(item)"
							v-for="(item,index) in videoList">
								<image style="width: 56rpx;height: 56rpx;margin-right:20rpx;" src="/static/videoimg.png"></image>
								<view class="videoname txtShowLength">{{item.name}}</view>
							</view>
							<view style="height: 50rpx;"></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <image mode="widthFix" style="pointer-events: none;" src="/static/sucai3.png" class="bottomimgP"></image> -->
		
		
		
		<view class="huuibeijing colonn center_center" v-if="alertShow">
			<view class="alertviewP colonn center_center">
				<view >系统无法查询到您的信息，请联系您所在的行业工会分会</view>
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
				alertShow:false,
				videoList:[]
			}
		},
		onLoad() {
			this.getVideoList();
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
			toShowVideo(item){
				uni.setStorageSync("videoInfo",item)
				uni.navigateTo({
					url:"/pages/viewoInfo/viewoInfo"
				})
			},
			alertShowClicl(){
				this.alertShow=!this.alertShow;
			},
			getVideoList(){  
				this.$axios
					.axios('post',this.$paths.getVideos,{
						'uuid':uni.getStorageSync("uuid")
					})
					.then(res => {
						if(res.code==1){
							this.videoList=res.data
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
	
	@import url(videoList.css);
/* 这个主要的必须要设置的 */
::-webkit-scrollbar {
    background:none;
	/* 这个值是必须设置的,否则颜色除了scrollbar-corner都是无效的 */
	/* background-color:blue; */
	/* 这样写也是可以的 */
}
/* 内部滚动条 */
::-webkit-scrollbar-thumb {
    /* background-color: red; */
	background: #F5A100;
}
/* 两边-边上的-块 */
::-webkit-scrollbar-button {
    /* background-color: red; */
	background: rgba(0, 0, 0, 0);
}
/* 滚动条没滚到的地方的-块 */
::-webkit-scrollbar-track-piece {
    /* background-color: yellow; */
	background: rgba(0, 0, 0, 0);
}
/* 垂直与水平滚动条交汇点的颜色 */
/* 不依赖scrollbar就可以自己设置颜色的特殊存在 */
::-webkit-scrollbar-corner {
	background: rgba(0, 0, 0, 0);
}
/* .......无知 */
::-webkit-resizer {
    /* background-color: orange; */
	background: rgba(0, 0, 0, 0);
}
</style>