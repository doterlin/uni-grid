<template>
	<view class="content">
		<u-row class="demoRow" align="left" gutter="20">
			<u-col span="12"><view class="demoCol"> 12 </view></u-col>
			<u-col span="12"><view class="demoCol"> 12 </view></u-col>
		</u-row>
		<u-row class="demoRow" align="right" gutter="20">
			<u-col span="8"><view class="demoCol"> 8 </view></u-col>
			<u-col span="8"><view class="demoCol"> 8 </view></u-col>
		</u-row>
		
		<u-row class="demoRow" align="center" gutter="20">
			<u-col span="4"><view class="demoCol"> 4 </view></u-col>
			<u-col span="4" offset="4"><view class="demoCol"> 4 </view></u-col>
			<u-col span="4"><view class="demoCol"> 4 </view></u-col>
		</u-row>
		<u-row class="demoRow" gutter="20">
			<u-col span="4"><view class="demoCol"> 4 </view></u-col>
			<u-col span="4"><view class="demoCol"> 4 </view></u-col>
			<u-col span="4"><view class="demoCol"> 4 </view></u-col>
			<u-col span="4"><view class="demoCol"> 4 </view></u-col>
			<u-col span="4"><view class="demoCol"> 4 </view></u-col>
			<u-col span="4"><view class="demoCol"> 4 </view></u-col>
		</u-row>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello u-grid'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		text-align: center;
	}

	.demoRow{
		padding: 20upx;
		background: #fff;
	}
	
	.demoCol{
		background: #2B9939; border-radius: 15upx; text-align: center; height: 70upx; color: #FFFFFF; font-size: 20upx; line-height: 70upx;
	}
</style>
