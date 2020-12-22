<template>
	<div>
		 <div>
		 	<h2>firstChild组件</h2>
		 	<button v-on:click="sendMsg">向组件传值</button>
		 </div>
	</div>
</template>

<script>
	import bus from './eventBus'
	export default {

		data() {
			return {

			}
		},
		methods: {
         sendMsg:function(){
         	bus.$emit('userDefinedEvent','this message is from firstChild')
         }
		}
	}
</script>

<style scoped="scoped">
	 
</style>