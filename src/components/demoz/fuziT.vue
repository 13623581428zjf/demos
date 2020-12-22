<template>
	<div>
		<div>第三个页面</div>
		<HeaderDiv :logo='logoThree'></HeaderDiv>
		<div>333333333333</div>
	</div>
</template>

<script>
	import HeaderDiv from './header'
	export default {

		data() {
			return {
                logoThree:{'names':'我是第三个页面'}
			}
		},
		components: {
            HeaderDiv
		},
		methods: {
		}
	}
</script>

<style scoped="scoped">

</style>