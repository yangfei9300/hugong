<template>
	<view class="colonn">
		<view class="jishiveiw roww center_center" style="position:fixed;right:0px;top:120px">
			<image style="width: 50rpx;height: 50rpx;margin-right:10rpx;" src="/static/timee.png"></image>
			<view>{{timeShow[0]}}:{{timeShow[1]}}:{{timeShow[2]}}</view>
		</view>
		<image mode="widthFix" src="/static/zhucetop.png" style="width: 750rpx;"></image>

		<view class="bghomeP">


			<view style="height: 85px;"></view>
			<view class="scrollview colonn" style="overflow-y: scroll; width: 382px; height: 620px;"  scroll-y>

				<view class="colonn center_center w-661">

					<view class="colonn fs-30 center_center" style="color: white;" v-if="tyep==1">

						<block v-if="iswanCheng">
							<view class="liluntivkuP">
								理论题库
							</view>
							<view class="h-20"></view>
							<view class="zailianyibia" @click="toSubmit">再来一遍</view>
							<view class="h-20"></view>
							<view class="manfen">
								满分330分
							</view>
							<view class="h-30"></view>
							<view class="resultview234 rowsa certer_center">
								<view class="colonn rowsa center_center" style="padding:20rpx 0rpx;">
									<view>答题时长</view>
									<view class="lancoP">{{re_exerciseResult.use_time}}</view>
								</view>
								<view class="colonn rowsa center_center" style="padding:20rpx 0rpx;">
									<view>提交时间</view>
									<view class="lancoP">{{re_exerciseResult.create_at}}</view>
								</view>
								<view class="fensashP">{{re_exerciseResult.fen}}<span style="font-size:25rpx;">分</span></view>
							</view>
							<view class="h-75"></view>
						</block>





						<block v-for="(item,index) in timuSlist">

							<view style="width: 661rpx;">
								<view class="datitypetxtP">{{item.type}}</view>
								<view class="allline"></view>
							</view>
							<view class="h-20"></view>






							<block v-for="(item1,index1) in item.list">


								<view class="w-661 m-top-20" style="text-align: left;">
									{{index1+1}}.{{item1.title}}
								</view>
								<view class="h-20"></view>
								<view class="w-650 dativiewbig">
									<block v-for="(item2,index2) in item1.options">
										
										
										<view class="roww center_center" style="min-height: 78rpx;padding:20rpx 0rpx;"
											@click.stop="selTimuClick(index,index1,index2)" :class="{
									'selimgviewP1':item2.isSel&&index2==0,
										'selimgviewPlast':item2.isSel&&index2==(item1.options.length-1),
										'selimgviewPlastPutong':item2.isSel&&(index2!=0&&index2!=(item1.options.length-1)),
								}">
											<view style="width: 20rpx;"></view>
											<image class="w-30 h-30" src="/static/Component 195@2x.png"></image>
											<view class="w-10"></view>
											<view style="width: 430rpx;">{{item2.txt}}</view>
											<view class="zhnegquebians" v-if="item1.isShowAnswer&&item2.isDui">正确答案
											</view>
											<view class="w-10"></view>
											<view class="allline"></view>
										</view>
										
										
									</block>
								</view>
								<view class="roww endend w-650">
									<view style="margin-top:10rpx" v-if="item.type=='多选'"
										@click.stop="showawers(index,index1)">查看正确答案</view>
								</view>

							</block>
						</block>

						<view class="roww center_center w-650">
							<view class="dengluview" @click="toSubmit">提交</view>
						</view>
						<view style="height: 30rpx;"></view>
	


					</view>
					<view v-if="tyep==2" class="colonn center_center">
						<view class="h-50"></view>
						<view class="yijinghuidatioP">
							您之前已经回答了1题是否继续上次回答？
						</view>
						<view class="h-101"></view>
						<view class="jixubtn">继续答题</view>
						<view class="h-31"></view>
						<view class="jixubtn">重新开始</view>
					</view>



				</view>
			</view>
		</view>
		<!-- <image mode="widthFix" style="pointer-events: none" src="/static/sucai3.png" class="bottomimgP"></image> -->



		<view class="huuibeijing colonn center_center" v-if="alertShow">
			<view class="alertviewP colonn center_center">
				<view>您还有{{weizuodaCVOunt}}道题没有做完,是否继续答题?</view>
				<view style="height: 34rpx;"></view>
				<view class="roww rowsa">
					<view class="quedingbtnP" @click.stop="alertShowClicl(1)">继续作答</view>
					<view style="width: 20rpx;"></view>
					<view class="quedingbtnP" @click.stop="alertShowClicl(2)">重新作答</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				alertShow: false,
				tyep: 1, //1 正常  2是否继续答题
				timuSlist: [],
				time: 0,
				timeShow: ['00', '00', '00'],
				iswanCheng: false,
				re_exerciseResult:{},
				weizuodaCVOunt:0
			}
		},
		onLoad() {
			this.toShare();
			this.timeJishi()
			this.getZuodaNum();
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
			// 获取还有多少道题没作答完成
			getZuodaNum(){
				var timeHistory=uni.getStorageSync("timeHistory")
				var time=uni.getStorageSync("time")
				if(timeHistory){
					this.alertShow=true;
				}else{
						this.gettiList();
						return
				}
				var count=0;
				for(var a=0;a<timeHistory.length;a++){
					for(var b=0;b<timeHistory[a].list.length;b++){
						if(!timeHistory[a].list[b].isShowAnswer){
							count=count+1;
						}
					}
				}
				this.weizuodaCVOunt=count;
				
				this.timuSlist=timeHistory;
				
				if(time){
					this.time=time;
				}
					
				
				return count;
			},
			//提交答题内容
			toSubmit() {
				var data = {
					list: {
						judges: [], //pan锻体]
						multiples: [], //multiples多选
						singles: [], //单选
					},
					use_time: this.time,
					uuid: uni.getStorageSync("uuid")
				}
				var list = this.timuSlist;

				for (var a = 0; a < list.length; a++) {
					for (var b = 0; b < list[a].list.length; b++) {
						var obg = list[a].list[b];
						var options = list[a].list[b].options
						var xuanzxiangList = []; //题目中的选中


						for (var c = 0; c < options.length; c++) {
							if (options[c].isSel) {
								xuanzxiangList.push(c);
							}
						}
						console.log("0-0-0-0-0-", xuanzxiangList)
						if (xuanzxiangList.length > 0) {
							if (list[a].type == '判断') {
								var obg1 = {
									id: list[a].list[b].id,
									myAnswer: xuanzxiangList[0],
									trueAnswer: list[a].list[b].answer
								}
								data.list.judges.push(obg1);
							} else if (list[a].type == '单选') {
								var obg2 = {
									id: list[a].list[b].id,
									myAnswer: xuanzxiangList[0],
									trueAnswer: list[a].list[b].answer
								}
								data.list.singles.push(obg2);
							 } else if (list[a].type == '多选') {
							 	var obg3 = {
							 		id: list[a].list[b].id,
							 		myAnswer: xuanzxiangList,
							 		trueAnswer: list[a].list[b].answer
							 	}
							 	data.list.multiples.push(obg3);
							 }
						}


						// list[a].list[b].options = selItemObg;

					}
				}

				this.$axios
					.axios12('post', this.$paths.testQuestionPost, data)
					.then(res => {
						if (res.code == 1) {
							this.$tools.showToast("提交成功");
							uni.removeStorageSync("timeHistory")
							uni.removeStorageSync("time")
							
							// this.getDatiHistory();
							setTimeout(res=>{
								uni.redirectTo({
									url:"/pages/datiList1/datiList1"
								})
							},1000)
						} else {
							this.$tools.showToast(res.info);
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});


			},
			getTime(time) {
				// 转换为式分秒
				let h = parseInt(time / 60 / 60 % 24)
				h = h < 10 ? '0' + h : h
				let m = parseInt(time / 60 % 60)
				m = m < 10 ? '0' + m : m
				let s = parseInt(time % 60)
				s = s < 10 ? '0' + s : s
				// 作为返回值返回
				this.timeShow = [h, m, s];
				return [h, m, s]
			},
			timeJishi() {
				setInterval(res => {
					this.time = this.time + 1;
					this.getTime(this.time)
				}, 1000)
			},
			// 显示答案
			showawers(index, index1) {
				var listOptions = this.timuSlist[index].list[index1].options;

				for (var a = 0; a < listOptions.length; a++) {
					if (listOptions[a].isSel) {
						this.timuSlist[index].list[index1].isShowAnswer = true;
						return
					}
				}
				this.$tools.showToast("请先作答")
			},
			selTimuClick(index, index1, index2) {
				uni.setStorageSync("time",this.time)
				if (this.timuSlist[index].list[index1].isShowAnswer) {
					return false;
				}
				console.log('000000', this.timuSlist[index].type, this.timuSlist[index].list[index1].isShowAnswer);
				if (this.timuSlist[index].type == '单选' || this.timuSlist[index].type == '判断') {
					this.timuSlist[index].list[index1].isShowAnswer = true;
				}
				console.log('11111', this.timuSlist[index].list[index1].isShowAnswer);


				console.log('2222', );
				this.timuSlist[index].list[index1].options[index2].isSel = !this.timuSlist[index].list[index1].options[
					index2].isSel;
					
					uni.setStorageSync("timeHistory",this.timuSlist)
			},
			gettiList() {
				// 
				this.$axios
					.axios('post', this.$paths.getTestQuestion, {
						'uuid': uni.getStorageSync("uuid")
					})
					.then(res => {
						if (res.code == 1) {
							var timuSlist = res.data
							var list = []
							for (var key in timuSlist) {
								console.log(key)
								list.push({
									'type': key,
									'list': timuSlist[key + '']
								});
							}

							// 处理选项与答案
							for (var a = 0; a < list.length; a++) {
								console.log(list[a].type)
								for (var b = 0; b < list[a].list.length; b++) {
									var obg = list[a].list[b];
									list[a].list[b].isShowAnswer = false;
									var options = list[a].list[b].options
									var selItemObg = []



									for (var c = 0; c < options.length; c++) {
										var obgOptionItem = {
											'txt': options[c],
											'isSel': false,
											'isDui': false,
										}
										if (list[a].type == '判断' || list[a].type == '单选') {
											if (parseInt(list[a].list[b].answer) == c) {
												obgOptionItem.isDui = true;
											}
										} else if (list[a].type == '多选') {
											for (var d = 0; d < list[a].list[b].answer.length; d++) {
												if (parseInt(list[a].list[b].answer[d]) == c) {
													obgOptionItem.isDui = true;
												}
											}

										}
										selItemObg.push(obgOptionItem);
									}
									list[a].list[b].options = selItemObg;

								}
							}

							this.timuSlist = list;
						} else {
							this.$tools.showToast(res.info);
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			alertShowClicl(type) {
				if(type==1){
					this.alertShow = !this.alertShow;
				}else if(type==2){
					this.alertShow = !this.alertShow;
					this.gettiList()
				}
				
			}
		}
	}
</script>

<style>
	@import url(datiList.css);
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