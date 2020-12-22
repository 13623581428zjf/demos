<template>
	<div>
		 <NV @Chuang='changeMsg'></NV>
		 <p>您现在输入的是：{{user}}</p>
	</div>
</template>

<script>import NV from './nvnv'
export default {

	data() {
		return {
			user: ''
		}
	},
	components: {
		NV
	},
	methods: {
		 changeMsg:function(msg){
		 	this.user = msg;
		 	
		 }
	}
}</script>

<style scoped="scoped"></style>