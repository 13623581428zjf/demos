<template>
	<div>
		<div id="app">
			<ul class="tab-tilte">
				<li @click="cur=0" :class="{active:cur==0}">标题一</li>
				<li @click="cur=1" :class="{active:cur==1}">标题二</li>
				<li @click="cur=2" :class="{active:cur==2}">标题三</li>
				<li @click="cur=3" :class="{active:cur==3}">标题四</li>
			</ul>
			<div class="tab-content">
				<div v-show="cur==0">
					<div v-for="item in tab" style="width: 100%;">{{item.name}}</div>
				</div>
				<div v-show="cur==1">
					<div v-for="item in tabT" style="width: 100%;">{{item.name}}</div>
				</div>
				<div v-show="cur==2">内容三</div>
				<div v-show="cur==3">内容四</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		demoOne: 'demoOne',
		data() {
			return {
				cur: 0, //默认选中第一个tab,
				tab: [{
						name: '我是内容1'
					},
					{
						name: '我是内容1'
					},
					{
						name: '我是内容1'
					}
				],
				tabT: [{
						name: '我是内容2'
					},
					{
						name: '我是内容2'
					},
					{
						name: '我是内容2'
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style scoped="scoped">
	.red {
		color: red;
	}
	
	.blue {
		color: blue;
	}
	
	.clear {
		clear: left;
	}
	
	.active {
		background: red;
		color: white;
	}
	
	.cl {
		clear: both;
	}
	
	<style type="text/css">ul li {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	#app {
		width: 600px;
		height: 400px;
		margin: 0 auto;
		border: 1px solid #ccc;
	}
	
	.tab-tilte {
		width: 90%;
		list-style: none;
	}
	
	.tab-tilte li {
		float: left;
		width: 25%;
		padding: 10px 0;
		text-align: center;
		background-color: #f4f4f4;
		cursor: pointer;
	}
	/* 点击对应的标题添加对应的背景颜色 */
	
	.tab-tilte .active {
		background-color: #09f;
		color: #fff;
	}
	
	.tab-content div {
		float: left;
		width: 25%;
		line-height: 100px;
		text-align: center;
	}
</style>
</style>