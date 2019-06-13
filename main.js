import Vue from 'vue'
import App from './App'
import registerGlobalComponent from './global-components.js'

registerGlobalComponent(Vue); //全局注册部分组件, 当然也可以局部注入, 建议将一些很多页面需要用到的组件进行全局注册

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
