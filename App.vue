<script>
	export default {
		onLoad() {
		},
		onLaunch: function() {     
			console.log('App Launch');
		},
		onShow: function() {	
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		} 
	}
</script>  

<style  lang="scss">
	/*每个页面公共css */
	@import url("/style/style.css");
	@import url("/style/style_rpx.css");
	@import "/style/ty_style_scss.scss";
	
	/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
	::-webkit-scrollbar{
	　　width: 2rpx!important;
	　　height: 2rpx!important;
	　　background-color:red !important;
	}
	/*定义滚动条轨道 内阴影+圆角*/
	::-webkit-scrollbar-track{
	　　border-radius: 2rpx!important;   
	　　background-color:red  !important;
	}
	/*定义滑块 内阴影+圆角*/
	::-webkit-scrollbar-thumb{
	　　border-radius: 2rpx!important;
	　　background-color: red !important;
	}
</style>
