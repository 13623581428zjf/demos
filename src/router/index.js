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
const DM = () => import('@/components/demoz/xunidom.vue');
const ZJ = () => import('@/components/demoz/zujian.vue');
const FZ = () => import('@/components/demoz/fuzi.vue');
const Header = () => import('@/components/demoz/header.vue');
const ZF = () => import('@/components/demoz/zifu.vue');
const ZFHeader = () => import('@/components/demoz/ziHeader.vue');
const AppLe = () => import('@/components/demoz/apple.vue');
const FD = () => import('@/components/demoz/firstChild.vue');
const SE = () => import('@/components/demoz/second.vue');
const REF = () => import('@/components/demoz/ref.vue');
const TR = () => import('@/components/demoz/transtion.vue');
const FZT = () => import('@/components/demoz/fuziTwo.vue');
const FZTHR = () => import('@/components/demoz/fuziT.vue');
const FZF = () => import('@/components/demoz/fuziF.vue');
const YY = () => import('@/components/demoz/yeye.vue');
const BB = () => import('@/components/demoz/baba.vue');
const BBT = () => import('@/components/demoz/babaT.vue');
const MA = () => import('@/components/demoz/mama.vue');
const NV = () => import('@/components/demoz/nvnv.vue');
const SMZQ = () => import('@/components/demoz/smzq.vue');
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
		},
		{
			path: '/xunidom',
			name: 'xunidom',
			component: DM,
			title:'xunidom'
		},
		{
			path: '/zujian',
			name: 'zujian',
			component: ZJ,
			title:'zujian'
		},
		{
			path: '/fuzi',
			name: 'fuzi',
			component: FZ,
			title:'fuzi'
		},
		{
			path: '/header',
			name: 'header',
			component: Header,
			title:'header'
		},
		{
			path: '/ziHeader',
			name: 'ziHeader',
			component: ZFHeader,
			title:'ziHeader'
		},
		{
			path: '/zifu',
			name: 'zifu',
			component: ZF,
			title:'zifu'
		},
		{
			path: '/apple',
			name: 'apple',
			component: AppLe,
			title:'apple'
		},
		{
			path: '/firstChild',
			name: 'firstChild',
			component: FD,
			title:'firstChild'
		},
		{
			path: '/second',
			name: 'second',
			component: SE,
			title:'second'
		},
		{
			path: '/ref',
			name: 'ref',
			component: REF,
			title:'ref'
		},
		{
			path: '/transtion',
			name: 'transtion',
			component: TR,
			title:'transtion'
		},
		{
			path: '/fuziTwo',
			name: 'fuziTwo',
			component: FZT,
			title:'fuziTwo'
		},
		{
			path: '/fuziT',
			name: 'fuziT',
			component: FZTHR,
			title:'fuziT'
		},
		{
			path: '/fuziF',
			name: 'fuziF',
			component: FZF,
			title:'fuziF'
		},
		{
			path: '/yeye',
			name: 'yeye',
			component: YY,
			title:'yeye'
		},
		{
			path: '/baba',
			name: 'baba',
			component: BB,
			title:'baba'
		},
		{
			path: '/babaT',
			name: 'babaT',
			component: BBT,
			title:'babaT'
		},
		{
			path: '/mama',
			name: 'mama',
			component: MA,
			title:'mama'
		},
		{
			path: '/nvnv',
			name: 'nvnv',
			component: NV,
			title:'nvnv'
		},
		{
			path: '/smzq',
			name: 'smzq',
			component: SMZQ,
			title:'smzq'
		}
	]
});
