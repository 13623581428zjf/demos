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
		<!--、、、、、、、、、、、、、、、tab切换、、、、、、、、、、、、、、、、、、、、、-->
		<div style="display: flex;">
			<div style="margin-left: 20px;" v-for='item in headerList' @click="hes(item)">{{item.name}}</div>
		</div>
		<div style="display: flex;">
			<div style="width: 130px;margin-left: 20px;" v-if="this.heasid ==0">内容1</div>
			<div style="width: 130px;margin-left: 20px;" v-else="this.heasid ==1">内容2</div>
			<div style="width: 130px;margin-left: 20px;" v-else="this.heasid ==2">内容3</div>
		</div>
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
				headerList: [{
						name: '首页1',
						index: 1
					},
					{
						name: '首页2',
						index: 2
					},
					{
						name: '首页3',
						index: 3
					}
				],
				heasid: 0
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
			hes:function(item){
				console.log(item.index)
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
</style>