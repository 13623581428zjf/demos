import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const VueRouterReplace = Router.prototype.replace;
Router.prototype.replace = function replace(to) {
	return VueRouterReplace.call(this, to).catch((err) => err);
};
const errorPage = () => import('@/pages/error.vue');
const home = () => import('@/pages/home.vue');
const login = () => import('@/pages/login.vue');
const admin = () => import('@/pages/admin/index.vue');
const user = () => import('@/pages/admin/user.vue');
const type = () => import('@/pages/admin/type.vue');
const content = () => import('@/pages/admin/content.vue');
const demoOne = () => import('@/components/demoz/demoOne.vue');
const shopOption = () => import('@/components/demoz/shopOption.vue');
const tab = () => import('@/components/demoz/tab.vue');
const LX = () => import('@/components/demoz/lianxi.vue');
const FM = () => import('@/components/demoz/form.vue');
const COM = () => import('@/components/demoz/computed.vue');
export default new Router({
	base: '',
	routes: [{
			path: '/',
			redirect: '/login'
		},
		{
			path: '/error',
			name: 'error',
			component: errorPage,
			meta: {
				title: '系统出错了'
			}
		},

		{
			path: '/login',
			name: 'login',
			component: login,
			meta: {
				title: '指挥调度'
			}
		},
		{
			path: '/admin',
			name: 'admin',
			component: admin,
			children: [{
				path: 'user',
				name: 'user',
				component: user,
				meta: {
					title: '用户管理'
				}
			},{
				path: 'type',
				name: 'type',
				component: type,
				meta: {
					title: '类型管理'
				}
			} ,{
				path: 'content',
				name: 'content',
				component: content,
				meta: {
					title: '内容管理'
				}
			} ]
		},
		{
			path: '/home',
			name: 'home',
			component: home,
			children: [
				//              {
				//                  path: 'pre_command',
				//                  name: 'pre_command',
				//                  redirect: '/command',
				//                  meta: {
				//                      title: '指挥调度'
				//                  }
				//              },
			]
		},
		{
			path: '/demoOne',
			name: 'demoOne',
			component: demoOne,
			title:'练习' 
		},
		{
			path: '/shopOption',
			name: 'shopOption',
			component: shopOption,
			title:'练习shopOption' 
		},
		{
			path: '/tab',
			name: 'tab',
			component: tab,
			title:'练习tab' 
		},
		{
			path: '/lianxi',
			name: 'lianxi',
			component: LX,
			title:'练习聊天' 
		},
		{
			path: '/form',
			name: 'form',
			component: FM,
			title:'form'
		},
		{
			path: '/computed',
			name: 'computed',
			component: COM,
			title:'computed'
		}
	]
});
