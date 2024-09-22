<template>
	<view class="colonn">
		<!-- <view class="jishiveiw roww center_center" style="position:fixed;right:0px;top:120px">
			<image style="width: 50rpx;height: 50rpx;margin-right:10rpx;" src="/static/timee.png"></image>
			<view>{{timeShow[0]}}:{{timeShow[1]}}:{{timeShow[2]}}</view>
		</view> -->
		<image mode="widthFix" src="/static/zhucetop.png" style="width: 750rpx;"></image>

		<view class="bghomeP">



			<view style="height: 10%;"></view>
			<scroll-view class="scrollview colonn" style="width: 370px; height: 80%;"scroll-y>

				<view class="colonn center_center w-661">

					<view class="colonn fs-30 center_center" style="color: white;" v-if="tyep==1">

						<block v-if="iswanCheng">
							<view class="liluntivkuP">
								理论题库
							</view>
							<view class="h-20"></view>
							<view class="zailianyibia" @click="datiListTo">再来一遍</view>
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
								<view class="fensashP">{{re_exerciseResult.fen}}<span style="font-size:25rpx;">分</span>
								</view>
							</view>
							<view class="h-75"></view>
						</block>





						<block v-for="(item,index) in timuSlist">

							<view style="width: 661rpx;">
								<view class="datitypetxtP" v-if="item.type=='judges'">单选题</view>
								<!-- <view class="datitypetxtP" v-if="item.type=='multiples'">多选题</view> -->
								<view class="datitypetxtP" v-if="item.type=='singles'">判断题</view>
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

										<block v-if="item2.isDui&&item2.isSel">
											<view class="roww center_center"
												style="min-height: 78rpx;padding:20rpx 0rpx;" :class="{
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
										<block v-else-if="!item2.isDui&&item2.isSel">
											<view class="roww center_center"
												style="min-height: 78rpx;padding:20rpx 0rpx;" :class="{
											'selimgviewP11':item2.isSel&&index2==0,
												'selimgviewPlast1':item2.isSel&&index2==(item1.options.length-1),
												'selimgviewPlastPutong1':item2.isSel&&(index2!=0&&index2!=(item1.options.length-1)),
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
										<block v-else>
											<view class="roww center_center"
												style="min-height: 78rpx;padding:20rpx 0rpx;" :class="{
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


									</block>
								</view>
								<view class="roww endend w-650">
									<view style="margin-top:10rpx" v-if="item.type=='多选'"
										@click.stop="showawers(index,index1)">查看正确答案</view>
								</view>

							</block>
						</block>

						<!-- <view class="roww center_center w-650">
							<view class="dengluview" @click="toSubmit">提交</view>
						</view> -->




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
			</scroll-view>
		</view>

  
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
				alertShow: false,
				tyep: 1, //1 正常  2是否继续答题
				timuSlist: [],
				time: 0,
				timeShow: ['00', '00', '00'],
				iswanCheng: false,
				re_exerciseResult: {}
			}
		},
		onLoad() {
			this.getDatiHistory();
		},
		methods: {
			datiListTo() {
				// datiList
				uni.redirectTo({
					url: "/pages/datiList/datiList"
				})
			},
			// 获取答题记录
			getDatiHistory() {
				var data = {
					uuid: uni.getStorageSync("uuid")
				}
				this.$axios
					.axios('post', this.$paths.re_exercise, data)
					.then(res => {
						if (res.code == 1) {
							this.iswanCheng = true;
							this.re_exerciseResult = res.data;

							var timuSlist = res.data.json
							var list = []
							for (var key in timuSlist) {
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
									list[a].list[b].isShowAnswer = true;
									var options = list[a].list[b].options
									var selItemObg = []



									for (var c = 0; c < options.length; c++) {
										var obgOptionItem = {
											'txt': options[c],
											'isSel': false,
											'isDui': false,
										}
										if (list[a].type == 'judges' || list[a].type == 'singles') {
											if (parseInt(list[a].list[b].trueAnswer) == c) {
												obgOptionItem.isDui = true;
											}
											if (parseInt(list[a].list[b].myAnswer) == c) {
												obgOptionItem.isSel = true;
											}
										} else if (list[a].type == 'multiples') {
											for (var d = 0; d < list[a].list[b].trueAnswer.length; d++) {
												if (parseInt(list[a].list[b].trueAnswer[d]) == c) {
													obgOptionItem.isDui = true;
												}
											}
											for (var d = 0; d < list[a].list[b].myAnswer.length; d++) {
												if (parseInt(list[a].list[b].myAnswer[d]) == c) {
													obgOptionItem.isSel = true;
												}
											}

										}
										selItemObg.push(obgOptionItem);
									}
									list[a].list[b].options = selItemObg;

								}
							}

							this.timuSlist = list;
							console.log("asd", this.timuSlist)
						} else {
							this.$tools.showToast(res.info);
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},





			alertShowClicl() {
				this.alertShow = !this.alertShow;
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