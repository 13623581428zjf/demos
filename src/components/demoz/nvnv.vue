<template>
	<div>
		 <div>我是女儿</div>
		 <input type="text" v-model="massage" @change="getMsg"/>
	</div>
</template>

<script>
	export default {

		data() {
			return {
                 massage:''
			}
		},
		methods: {
           getMsg:function(){
            this.$emit('Chuang',this.massage)
           }
		}
	}
</script>

<style scoped="scoped">
	 
</style>