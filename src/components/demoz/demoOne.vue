<template>
	<div>
		<!--从这里开始练习吧-->

		<div>练习demo</div>
		<!--动态绑定v-if=======================================-->
		<div v-if="list.length>0" :list='list'>
			list有值的话显示如下
		</div>
		<div v-for="item in list">
			{{item.name}}
		</div>
		<button @click="get_data">++的意思是不断加{{get_params.page}}</button>

		<br />
		<select style="border: 1px solid black;" v-model="selected" name="fruit">
			<option value="">请选择一个网站</option>
			<option value="百度">百度</option>
			<option value="快手">快手</option>
		</select>
		<div>你选择的地网站是:{{selected}}</div>
		<!--filter过滤======================-->
		<input style='border: 1px solid firebrick;' type="text" @input="handInpu()" v-model="mytext" />
		<p v-for="item in filterss">{{item}}</p>
		<!--点我显示隐藏-->
		<button @click="dotShow" style="border: 1px solid red;width: 100px;height: 100px;">点我显示隐藏</button>
		<div v-show="isshow">点我显示隐藏</div>
		<!--绑定回车$event-->
		<input type="text" style="border:1px solid red; " @input.enter="ent($event)" />
		<br />
		<textarea v-model="content">
			
		</textarea>
		<br />
		<input type="checkbox" v-model="isfa" />记录用户名
		<br /><br />
		<!--多选-->
		<div>你喜欢什么运动</div>
		<input type="checkbox" v-model="checkgroup" value="唱歌" />唱歌
		<input type="checkbox" v-model="checkgroup" value="跳舞" />跳舞
		<input type="checkbox" v-model="checkgroup" value="游泳" />游泳
		<div>{{checkgroup}}</div>
		<div>性别</div>
		<input type="radio" v-model="rideo" value="男" />
		<input type="radio" v-model="rideo" value="女" />
		<div>{{rideo}}</div>
		<!--动态class-->
		<div :class="istrue?'red':'blue'" @click="clickme">我是动态绑定</div>
		<!--tab切换===============================================================================-->
		<ul style="float: left;" v-for="(item,$index) in tabArr">
			<li style="list-style: none;margin-left: 20px;" @click="toggle($index ,item.tab)" :class="{active:active==$index}">{{item.tab}}</li>
		</ul>
		<div class="cl"></div>
		<div v-if='this.active ==0'>
			<div v-for="item in actName">{{item.name}}</div>
		</div>
		<div v-if='this.active ==1'>
			<div v-for="item in actAge">{{item.age}}</div>
		</div>
		<div v-if='this.active ==2'>
			<p>我是内容3</p>
		</div>
		<!--购物车计算-->
		<div v-for="item in shopAtion">
			<input type="checkbox" v-model="newshopAtion" :value="item" /> {{item.num}}&nbsp;价格{{item.price}}
		</div>
		<div>总价:{{newshopAtion}}</div>
		<br />
		<div>总金额:{{shopaf()}}</div>
	</div>
</template>

<script>
	export default {
		demoOne: 'demoOne',
		data() {
			return {
				list: [{
						name: '张一'
					},
					{
						name: '李二'
					},
					{
						name: '赵四'
					},
					{
						name: '历史'
					}
				],
				get_params: {
					page: 0
				},
				selected: '',
				pik: 'rund',
				filterss: [
					'aaa',
					'bbb',
					'ccc',
					'ddd'
				],
				mytext: '',
				isshow: true,
				isfa: true,
				content: '',
				checkgroup: [],
				rideo: {},
				istrue: true,
				tabArr: [{
						tab: '内容1',
						index: 1
					},
					{
						tab: '内容2',
						index: 2
					},
					{
						tab: '内容3',
						index: 3
					}
				],
				active: 0,
				currentView: '',
				actName: [{
						name: '张景峰'
					},
					{
						name: '张景好'
					}
				],
				actAge: [{
						age: '11'
					},
					{
						age: '12'
					}
				],
				shopAtion: [{
						name: '水果',
						num: 1,
						price: 10
					},
					{
						name: '蔬菜',
						num: 2,
						price: 20
					},
					{
						name: '电视',
						num: 3,
						price: 100
					}
				],
				newshopAtion:[]
			}
		},
		created: function() {
			console.log(1)
			let arr = [1, 2, 3, 4, 5];
			console.log(arr)
			let newArr = arr.filter(item => {
				return item >= 3;
			})
			console.log(newArr)

		},
		methods: {
			get_data() {
				this.get_params.page++;
			},
			handInpu() {
				console.log('只要value改变就会触发');
				//filter过滤字母在不在数组filterss中
				var fits = this.filterss.filter(item => item.indexOf(this.mytext) > -1)
				console.log(fits)
				if(fits == this.mytext) {
					this.filterss.push(this.mytext)
				}
			},
			dotShow() {
				this.isshow = !this.isshow;

			},
			ent(ev) {
				//回车执行动作
				console.log('执行todolist添加动作')
			},
			clickme: function() {
				this.istrue = false;
			},
			toggle: function(a, b) {
				console.log(a, b);
				this.active = a;
				this.currentView = b;
			},
			shopaf:function(){
				//函数计算中的状态改变后，函数会自动改变。
				var nums = 0;
				for (var i = 0; i < this.newshopAtion.length; i++) {
					nums+=this.newshopAtion[i].num*this.newshopAtion[i].price;
				}
				return nums;
			}

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
</style>