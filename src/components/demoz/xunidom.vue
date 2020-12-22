<template>
	<div>
		<div>
			虚拟dom
		</div>
		<!--什么是虚拟dom-->
		<!--数据修改之后被es5中自带的object.defineProperty()get set 给拦截到了。set拦截之后呢通知watch，watch负责重新渲染函数，
		 去创建新的虚拟dom，对比老的虚拟dom节点,对比出来之后，再次渲染到真实dom上面，在这里，vue其实和react的虚拟dom是相似的。都是保证一件事。
		 让你页面中的组件，节点能复用的复用，能达到更好的用户体验，优化网页。-->
		<!--举例-->
		<div v-if="isA">111111111</div>
		<div v-else>222222222222222</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isA: true,
			}
		},
		methods: {

		}
	}
</script>

<style scoped="scoped"></style>