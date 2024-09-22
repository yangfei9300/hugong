<template>
	<view class="w750 colonn center_center" style="height: 100vh;">
		<video  ref="vdiep" autoplay v-if="src" :src="src.cover"></video>
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
			setTimeout(res=>{
				
			},1000)
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

</style>
