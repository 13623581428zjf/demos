<template>
	<div>
		 <HeadDiv :logo='logoF'></HeadDiv>
	</div>
</template>

<script>
	import HeadDiv from './header'
	export default {

		data() {
			return {
               logoF:{'lod':'我是第四个页面'}
			}
		},
		components:{
			HeadDiv
		},
		methods: {

		}
	}
</script>

<style scoped="scoped">
	 
</style>