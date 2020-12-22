<template>
	<div>
		 <Zifudiv @faguoqu='getUser'></Zifudiv>
		 <p>用户名为{{user}}</p>
	</div>
</template>

<script>
	import Zifudiv from './zifu'
	export default {

		data() {
			return {
				user:''
			}
		},
		components:{
			Zifudiv
		},
		methods: {
        getUser:function(msg){
        	this.user =msg;
        	console.log(this.user)
        }
		}
	}
</script>

<style scoped="scoped">
	 
</style>