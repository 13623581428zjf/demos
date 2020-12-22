<template>
	<div>
		 <div>子传父</div>
		 <br />
		 <br />
		 <!--子传父
		 	1在父组件中引入当前子组件。ZiHesder import from   './'
		 	2在components中挂载
		 	3 @faguoqu绑定
		 	4 在父组件中在事件中用$emit接收。
		 -->
		 <div>
		 	<input type="text" v-model="username" @change="setUser"/>
		 </div>
	</div>
</template>

<script>
	export default {

		data() {
			return {
				username:''
			}
		},
		methods: {
			setUser:function(){
				this.$emit('faguoqu',this.username)
			}
		}
	}
</script>

<style scoped="scoped">
	 
</style>