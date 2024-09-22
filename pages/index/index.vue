<template>
	<view class="colonn">
		<image mode="widthFix" src="/static/zhucetop.png" style="width: 750rpx;"></image>
		<view class="bghomeP">
			<view class="colonn center_center" style="height: 95%;">
				<view style="height:10%;"></view>
				<image style="width: 350px;height: 68px; margin-top:50px;" src="/static/gogsimi.png"></image>
				<view style="height: 1%;"></view>
				<view class="loginimgP colonn " style="width: 350px;height: 462px; margin-top:50px;">    
					<view class="h-240"></view>
					<view class="roww center_center w-550 m-left-60" style="width:90%; margin: 0 auto; border-bottom:1px solid #1351de;">
						<image style="width: 40rpx;height: 40rpx; margin-right:20px" src="/static/Component 206@2x.png"></image>
						<input v-model="form.name" placeholder="请输入姓名" class="allline" placeholder-style="color:#4572d7;" /> 
					</view>
					<view style="height:80rpx;"></view>
					<view class="roww center_center w-550 m-left-60" style="width:90%; margin: 0 auto; border-bottom:1px solid #1351de;">
						<image style="width: 40rpx;height: 40rpx; margin-right:20px" src="/static/Component 205@2x.png"></image>
						<input v-model="form.idcard"  placeholder="请输入身份证号"  class="allline"  placeholder-style="color:#4572d7;" /> 
					</view>
					<view style="height:45px;"></view>
					<view style="margin: 0 auto;" class="dengluview" @click="toSubmit">登录</view>
				</view>

			</view>
		</view>
		<!-- <image mode="widthFix" src="/static/bottomimg.png" class="bottomimgP"></image> -->
		
		
		
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
				form:{
					name:"",
					idcard:""
				}
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
			
			toSubmit(){
				if(!this.isSubmit()){
					return
				}
				
				this.$axios
					.axios('post',this.$paths.login,this.form)
					.then(res => {
						console.log('轮播图颜色', res);
						if(res.code==1){
							uni.setStorageSync("uuid",res.data.uuid)
							setTimeout(res=>{
								uni.redirectTo({
									url:"/pages/menus/menus"
								})
							},1000)
						}else{
							this.$tools.showToast(res.info);
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			isSubmit(){
				if(this.form.name==""&&this.form.idcard==""){
					this.$tools.showToast("请输入任意一个信息");
					return
				}
				return true;
			},
			alertShowClicl(){
				this.alertShow=!this.alertShow;
			}
		}
	}
</script>

<style>
	@import url(index.css);

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