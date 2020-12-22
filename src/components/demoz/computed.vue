<template>
	<div>
		<div>计算属性</div>
		<!--计算属性-->
		<div>{{remyname}}</div>

		<!--//计算属性模糊查询-->
		<p>计算属性之模糊查询</p>
		<input type="text" v-model="mydataList" placeholder="请输入" />
		<ul v-for="item in getdataList">
			<li>{{item}}</li>
		</ul>
	</div>
</template>

<script>
	export default {

		data() {
			return {
				myname: 'xiaoming',
				dataList: [
					'水壶', '方便面', '饮料', '蔬菜', '雪糕', '热水壶'
				],
				mydataList: ''

			}
		},
		methods: {

		},
		//计算属性
		computed: {
			remyname() {
				//return this.myname;

				//Object.substring(start,stop)返回值是x 说明是截取字符串中指定下标之间字符。start开始。stop结束.
				//				return this.myname.substring(0, 1);

				//toUpperCase();转大写
				//				return this.myname.substring(0, 1).toUpperCase(); 

				//字符串拼接 + this.myname
				//这里注意
				//substring当值为1个的时候指的是截取第几个，当值为2个的时候指的是从开始到结束中指定字符。
				return this.myname.substring(0, 1).toUpperCase() + this.myname.substring(1);
				//计算属性特点
				//缓存
				//状态改变后。会重新计算。

				//计算属性模糊查询

			},
			getdataList: function() {
				//张丽丽的模糊查询
				//先用filter过滤再用indexOf查找是否在用>-1;
				return this.dataList.filter(item => item.indexOf(this.mydataList) > -1);
			}
		}
	}
</script>

<style scoped="scoped"></style>