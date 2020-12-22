<template>
	<div>
		 <div>ref通信this.$refs</div>
		 <input type="text"  ref='mytext'/>
		 <button @click="hanfAdd">add</button>
	</div>
</template>

<script>
	export default {

		data() {
			return {

			}
		},
		methods: {
                hanfAdd(){
                	console.log('111',this.$refs.mytext.value);
                }
		}
	}
</script>

<style scoped="scoped">
	 
</style>