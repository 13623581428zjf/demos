<template>
	<div>
		 <div>开发页面一</div>
		 <Header :logo='logoMsg'></header>
	</div>
</template>

<script>
	import Header from './yeye'
	export default {

		data() {
			return {
                logoMsg:{'name':'我是传过来的第一个儿子'}
			}
		},
		components:{
			Header
		},
		methods: {

		}
	}
</script>

<style scoped="scoped">
	 
</style>