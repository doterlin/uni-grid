# uni-app布局组件(栅格)

### 参数
`u-row`组件(行)属性:
+ gutter: 此行中的列之间的间隔,单位: upx
+ align: 对齐方式, 为'left','right','center'之一

`u-col`组件(列)属性:
+ span: 此列所占格数, 一行为24格
+ offset: 偏移格数

### 使用步骤
+ 将本项目中的`components/row.vue`和`components/col.vue`放入你的项目目录.
+ 在main.js全局注册组件, 如:
```
import Vue from 'vue'
// 注意引入本组件的路径
import Row from './components/row.vue'
import Col from './components/col.vue'

Vue.component('u-row', Row);
Vue.component('u-col', Col);
```

+ 在template中开始布局, 示例:
```html
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
```

### 特别说明
> 修改自网友分享的[vue布局组件](https://www.jianshu.com/p/ed97b1e88fae), 本插件作者作了对`uni-app`应用的兼容.
> 有问题欢迎留言,觉得有帮助给个好评~