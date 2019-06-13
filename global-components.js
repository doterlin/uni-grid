/**
 * 全局注册组件
 */

import Row from './components/row.vue'
import Col from './components/col.vue'

function registerGlobalComponent(Vue){
	try{
		Vue.component('u-row', Row);
		Vue.component('u-col', Col);
	}catch(e){
		
	}
}

export default registerGlobalComponent;