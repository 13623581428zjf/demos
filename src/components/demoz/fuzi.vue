<template>
	<div>
		<!--
			1   import引入
			2   components里面挂在
			3         页面中带入
			4         把值带过来
		-->
		<!--2种写法-->
		<!--开发页面-->
		1<HeaderDiv :logo='logoAbj'></HeaderDiv>
		<div>111111111111111111</div>
	</div>
</template>
<script>
	import HeaderDiv from './header'
	export default {

		data() {
			return {
				logoMsg: '我是父组件传过来的',
				logoAbj:{name:'第一个页面'}
			}
		},
		components: {
			HeaderDiv
		},
		methods: {

		}
	}
</script>

<style scoped="scoped">

</style>