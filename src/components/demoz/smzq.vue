<template>
	<div>
		<!--练习tab切换-->
		<!--
         	作者：offline
         	时间：2020-12-18
         	描述：
         -->
		<!--<div v-for="item in type" :class="{'isClass':Tab==item.id}" style="float: left; margin-left: 20px;" @click="getMsg(item)">{{item.name}}</div>
		<br />
		<br />
		<div>
			<div v-if="this.Tab==1">首页</div>
			<div v-else-if="this.Tab ==2">新闻</div>
			<div v-else="this.Tab ==3">个人中心</div>
		</div>-->
		<br />
		<br />
		<br />
		<div> 
			<!--测试beforMounted能不能拿到数据-->
			<div :class="className">
				类名绑定
			</div>
		</div>
	</div>
</template>

<script>
	export default {

		data() {
			return {
				Tab: 1,
				className:'redClass',
				msg:'哈哈'
//				type: [{
//					id: '1',
//					name: '首页'
//				}, {
//					id: '2',
//					name: '新闻'
//				}, {
//					id: '3',
//					name: '个人中心'
//				}]
			}
		},
		methods: {
			getMsg: function(item) {
				let GetId = item.id;
				this.Tab = GetId;
			}
		},
		//生命周期
		//1  创造之前 特点：Vue实例化完成，数据还没有绑定到app应用上。能console出来this，拿不到data以及methond的数据undefind。
		beforeCreate(){
			console.log('boforeCreate=======================================');
			console.log(this);
			console.log(this.Tab);//undefind
			console.log(this.getMsg)//undefind
		},
		//2  创造之后：数据和方法绑定到对象app上。
		created(){
			console.log('created=======================================');
			console.log(this);
			console.log(this.Tab); 
			console.log(this.getMsg);
		},
		//beforeCreated到created中间这个过程Vue去做的事是 把数据绑定到app应用上。
		
		
		//3  渲染之前:根据数据生成的dom对象是拿不到的
		beforeMount(){
			console.log('beforeMount');
			//querySelector拿类名；
			let Dom = document.querySelector('.redClass');
			console.log(Dom)//null
		},
		//4  渲染之后:可以获取数据生成的dom对象。
		mounted(){
			console.log('mounted===============================');
			//querySelector拿类名；
			let Dom = document.querySelector('.redClass');
			console.log(Dom) 
		},
		//beforMount到mounted之间将数据渲染到模板。
		//5   更新之前：数据更改，但内容未更新之前。
		beforeUpdate(){
			console.log('beforeUpdate+更新之前');
		},
		//6   更新之后：内容更新完成。
		updated(){
			console.log('update+更新之后')
		},
		//7  销毁之前
		boforeDestory(){
			console.log('beforDestory')
		},
		//8  销毁之后
		destoryed(){
			console.log('destoryed')
		}
	}
</script>

<style scoped="scoped">
	.isClass {
		background: red;
		color: white;
	}
</style>