<template>
    <view class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </view>
</template>
<script>
    let validator = (value) => {
        let keys = Object.keys(value)
        let valid = true
        keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
                valid = false
            }
        })
        return valid
    }
    export default {
        name: 'Col',
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
        },
        data() {                // create
            return {
                gutter: 0,
            }
        },
        methods:{
            createClasses (obj, str = '') {
                if (!obj) { return [] }     //值为 undefined 会产生 bug
                let array = []
                if (obj.span) { array.push(`col-${str}${obj.span}`) }           // 关联scss的绑定动态变量
                if (obj.offset) { array.push(`offset-${str}${obj.offset}`) }
                return array.join(' ');
            }
        },
        computed: {             // mounted，gutter变了，colStyle也变
            colClass() {
                let {span, offset} = this;
                return this.createClasses({span, offset}) ;
            },
            colStyle() {
                return "padding-left:" + (this.gutter / 2) + 'upx; ' + "padding-right:" + (this.gutter / 2) + 'upx';
            }
        }
    }
</script>
<style scoped lang="scss">
    .col {
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
</style>