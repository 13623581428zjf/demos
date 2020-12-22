<template>
	<div>
		<Header :logo='logoSong'></Header>
		 
	</div>
</template>

<script>
	import Header from './yeye'
	export default {

		data() {
			return {
               logoSong:{names:'我是父页面传过来的第二个儿子'}
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
	 Header{
	 	
	 }
</style>