import Vue from 'vue'
import VueRouter from 'vue-router';
import Routers from './router.js';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'

Vue.use(ElementUI)

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: Routers
})

const app = new Vue({
	router,
	el: '#app',
	template: '<App/>',
	components: {
		App
	}
})

// 开启debug模式
Vue.config.debug = true;