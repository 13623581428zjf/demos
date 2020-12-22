<template>
	<div>
		 <br />
		 <header>
		 	<div style="background: greenyellow;">{{logo?logo.name:''}}</div>
		 	<div v-for='item  in  date'>{{item.name}}</div>
		 	<div style="background:gainsboro;">{{logo?logo.names:''}}</div>
		 </header>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		data() {
			return {
				 date:[
				 {'name':'第一个'},
				 {'name':'第二个'},
				 {'name':'第三个'}
				 ]
			}
		},
		methods: {

		},
		props:['logo']
		 
	}
</script>

<style scoped="scoped">
	 header{
	 	float: left;
	 }
	  header div{
	  	border:1px solid royalblue ;
	  	color: black;
	  	float: left;
	  }
</style>