<template>
	<div>
		<!--
			父组件里面写
			1  直接写header内容
			2 需要传值的话在data外面用props传 logo ，把logo在页面挂载
		-->
		<header class="header">
			<ul class="nav">
				<!--<div class="logo">{{logo}}</div>-->
				<li v-for="nav in navs">{{nav}}</li>
				<li>{{logo?logo.age:''}}</li>
				<li>{{logo?logo.name:''}}</li>
				<li>{{logo?logo.names:''}}</li>
				<li>{{logo?logo.lod:''}}</li>
				<!--三木运算-->
				<!--<li>{{logo?logo.name:''}}</li>-->
			</ul>
		</header>
	</div>
</template>

<script>
	export default {
		name: 'headerDiv',
		data() {
			return {
				navs: [
					'张警方', '张景云', '张景峰', '付雨桐', '张哈哈'
				]

			}
		},
		props: ['logo']
	}
</script>

<style scoped="scoped">
	.nav {
		display: flex;
		list-style: none;
	}
	
	.nav li {
		margin-left: 30px;
		background: yellowgreen;
	}
	
	.logo {
		background: yellowgreen;
	}
</style>