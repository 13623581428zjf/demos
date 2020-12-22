<template>
	<div>
		<div>兄弟之间传值</div>
		<h2>secondchilder</h2>
		<p>从firstChild组件接收的字符串参数：{{msg}}</p>
	</div>
</template>

<script>
	import bus from './eventBus'
	export default {

		data() {
			return {
				msg: '默认值'
			}
		},
		methods: {

		},
		mounted(){
			var self = this;
			bus.$on('userDefinedEvent', function(msg) {
				self.msg = msg;
			})
		}
	}
</script>

<style scoped="scoped">

</style>