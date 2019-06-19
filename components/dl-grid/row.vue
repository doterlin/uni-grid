<!-- 布局组件, 行 -->
<template>
    <view class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </view>
</template>
<script>
    export default {
        name: 'Row',
        props: {
            gutter: {
                type:[Number, String]
            },
            align:{
                type:String,
                validator(value){
                    return ['left','right','center'].includes(value)
                }
            }
        },
        computed: {
            rowStyle() {
                return "margin-left:" + (-this.gutter / 2) + 'upx;' +
                    "margin-right:" + (-this.gutter / 2) + 'upx;';
            },
            rowClass(){
                let {align} = this;
                return [align && `align-${align}`].join(' ');
            }
        },
        mounted() {
            this.$children[0].$children.forEach((vm) => { // 遍历 row 中 col，将 gutter 传递给 col
                vm.gutter = this.gutter
            })
        }
    }
</script>
<style scoped lang="scss">
	view {
		box-sizing: border-box;
	}
    .row {
		box-sizing: border-box;
        display: flex;
        flex-wrap: wrap; //允许换行，当row的两个col的span值都为24时，就呈现两行
        &.align-left{
            justify-content: flex-start;
        }
        &.align-right{
            justify-content: flex-end;
        }
        &.align-center{
            justify-content: center;
        }
    }
</style>