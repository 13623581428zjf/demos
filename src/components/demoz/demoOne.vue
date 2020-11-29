<template>
	<div>
		<!--从这里开始练习吧-->
		<div>练习demo</div>
		<!--动态绑定v-if=======================================-->
		 <div v-if="list.length>0":list = 'list'>
		 	list有值的话显示如下
		 </div>
		 <div v-for="item in list">
		 	{{item.name}}
		 </div>
		 <button @click="get_data">++的意思是不断加{{get_params.page}}</button>
	</div>
</template>

<script>
	export default {
		demoOne:'demoOne',
		data(){
			return{
				list:[
				 {name:'张一'},
				 {name:'李二'},
				 {name:'赵四'},
				 {name:'历史'}
				],
				get_params:{
					page:0
				}
			}
		},
		methods:{
			 get_data(){
			 	this.get_params.page ++;
			 }
		}
	}
</script>

<style>
</style>