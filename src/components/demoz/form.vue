<template>
	<div>
		<div>form修饰符</div>
		<!--v-model.numer-->
		<input type="number" v-model.numer="formXsf" /> {{formXsf}}
		<br />
		<!--失去焦点时更新   v-model.lazy-->
		<input type="text" v-model.lazy="formXsf" />{{formXsf}}
		<!--去掉前后空格                  v-model.trim-->
		<br />
		<input type="text" v-model.trim="formXsf" />{{formXsf}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				formXsf: ''
			}
		},
		created() {
			//fetch获取数据    用得少
			//			fetch('./json.js').then(res => {
			//				console.log(res)
			//			})
			//axios获取数据    
			//			axios.get().then(res=>{
			//				console.log(res)
			//			}.catch(err=>{
			//				console.log(err)
			//			}))
			//		},
//			methods: {
//
			}
		}
</script>

<style scoped="scoped">

</style>