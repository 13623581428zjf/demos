<template>
	<div>
		 <div>父传子第二个页面</div>
		 <br />
		 <br />
		 <HeaderDiv :logo='logoTwo'></HeaderDiv>
		 <div>22222</div>
	</div>
</template>

<script>import HeaderDiv from './header'
export default {

	data() {
		return {
           logoTwo:{age:'第二个页面'}
		}
	},
	components: {
		HeaderDiv
	},
	methods: {

	}
}</script>

<style scoped="scoped"></style>