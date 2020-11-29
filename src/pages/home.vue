<template>
	<div class="home" style="width:100%;">
		<div style="width:100%;">
			<cuteThreeD v-if="list.length>0" :list="list"></cuteThreeD>
		</div>
		<navBar :list="[]"></navBar>
		<div class="ub ub-pc w100 content">
			<div class="ub ub-ver home-list" v-infinite-scroll="get_data">
				<div class="ub ub-ver home-list-item" v-for="(item,index) in tableData" :key="item._id">
					<div class="ub tx-c line1 list-title">{{item.title}}</div>
					<div class="list-content">
						<div class="desc">
							<p><span><i class="el-icon-menu"></i><strong>描述：</strong></span>{{item.description}}</p>
						</div>
						<div class="ub ub-ac headerImage">
							<div>
								<el-image
								    style="width: 60px; height: 60px;border-radius:100%;"
								    :src="item.url" 
								    :preview-src-list="[item.url]">
								</el-image>
							</div>
							<div class="name">{{item.creatUserName}}</div>
						</div>
						<div class="time-money">
							<i class="iconfont icon-zonggongshi"></i>
							<span>工时：</span>
							<span>{{item.dayNum}}天</span>
						</div>
						<div class="time-money">
							<i class="iconfont icon-gongshihejia-"></i>
							<span>总价：</span>
							<span class="money">{{item.money}}元</span>
						</div>
					</div>
					<el-divider v-if="index != tableData.length-1"></el-divider>
				</div>
				
			</div>
			<div class="ub ub-ver ub-ac right-menu">
				<div class="ub ub-ac ub-pc">
					<el-upload
					  class="avatar-uploader"
					  action="proxy/api/image/upload"
					  :show-file-list="false"
					  name="file"
					  :data="{userId:userInfo._id}"
					  :on-success="handleAvatarSuccess">
					  <img  v-if="userInfo.avatar!=''" :src="'proxy'+ userInfo.avatar" class="avatar">
					  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
					 
					</el-upload>
					
				</div>
				<div v-if="userInfo&&userInfo.username!=''" class="username">你好，<span>{{userInfo.username}}</span></div>
				<div v-if="userInfo==''" class="no-login">
					 <el-button size="mini">登 录</el-button>
				</div>
				<div v-if="userInfo&&userInfo.isAdmin" class="extrence">
					 <el-button size="mini" @click="goAdmin">进入管理后台</el-button>
				</div>
				<div v-if="userInfo&&userInfo.username!=''" class="extrence">
					 <el-button size="mini" type="primary" @click="exit">退出登录</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	import { exit,get_home_list } from '../server/api.js'
	export default {
		name: 'home',
		data() {
			return {
				watchName:'小方',
				imageUrl:'',
				url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
				list:[
					{imgurl:require('../assets/img/bannerItem1.jpg'),thumb:require('../assets/img/thumbs/1.png')},
					{imgurl:require('../assets/img/bannerItem2.jpg'),thumb:require('../assets/img/thumbs/1.png')},
					{imgurl:require('../assets/img/bannerItem3.jpg'),thumb:require('../assets/img/thumbs/1.png')},
				],
				timer: null,
				week: '',
				hourMinute: '',
				dateTime: '',
				userInfo: {
					username: '',
					isAdmin:false,
					_id:'',
					avatar:""
				},
				tableData:[],
				get_params: {
					page: 0,
					size: 10,
				},
				total_page:1,
				timeStr: null,
				goods:[
					{
						name:'fdfds',
						price:15
					},
					{
						name:'fdfds',
						price:19
					},{
						name:'fdfds',
						price:32
					}
				]
				
				
			}
		},
		watch:{
			'userInfo':{
						handler:function(val,oldval){
						  console.log('222222222222',val)
						},
						deep:true//对象内部的属性监听，也叫深度监听
					  },
		},
		computed:{
			getUserName(){
				let total_price = 0;
				this.goods.map(item=>{
					total_price += item.price;
				})
				return total_price;
			},
		},
		mounted() {
			
			let userInfo = this.$getsessionStorage('userInfo');
			if(userInfo!=''){
				this.userInfo = this.$deepCopy(userInfo)
			}else{
				this.userInfo = '';
			}
			this.$nextTick(() => {
				this.writeCurrentDate();
				this.get_data();
			})
		},
		methods: {
			handleAvatarSuccess(res){
				console.log(res)
				this.userInfo.avatar = res.data.fileUrl;
				this.$setsessionStorage('userInfo',this.userInfo);
			},
			get_data() {
				this.get_params.page ++;
				if(this.get_params.page > this.total_page){
					return;
				}
				let data = {
					page: this.get_params.page,
					size: this.get_params.size,
					title: this.get_params.title,
				}
				get_home_list(data).then(res => {
					console.log('首页列表', res)
					this.loading = false;
					this.total_page = res.totalPage;
					let list = res.content;
					if (list.length > 0) {
						list.forEach(item => {
							item.url = this.url;
							this.tableData.push(item);
						})
					}
				}).catch(error => {
					console.log('error', error);
				});
			},
			
			indexMethod(index) {
				return (this.get_params.page - 1) * this.get_params.size + index + 1;
			},
			goAdmin(){
				this.$router.push({
					name:'type'
				})
			},
			splitArray(data, num) {
				var result = [];
				for(var i = 0; i < data.length; i += num) {
					result.push(data.slice(i, i + num));
				}
				return result;
				console.log('asadad', result)
			},
			writeCurrentDate() {
				var now = new Date();
				var year = now.getFullYear(); //得到年份
				var month = now.getMonth(); //得到月份
				var date = now.getDate(); //得到日期
				var day = now.getDay(); //得到周几
				var hour = now.getHours(); //得到小时
				var minu = now.getMinutes(); //得到分钟
				var sec = now.getSeconds(); //得到秒
				　　
				var MS = now.getMilliseconds(); //获取毫秒
				month = month + 1;
				if(month < 10) month = "0" + month;
				if(date < 10) date = "0" + date;
				if(hour < 10) hour = "0" + hour;
				if(minu < 10) minu = "0" + minu;
				if(sec < 10) sec = "0" + sec;
				if(MS < 100) MS = "0" + MS;
				var arr_week = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
				this.week = arr_week[day];
				this.hourMinute = hour + ":" + minu;
				this.dateTime = year + "-" + month + "-" + date;
				//设置得到当前日期的函数的执行间隔时间，每1000毫秒刷新一次。
				this.timer = setTimeout(() => {
					this.writeCurrentDate();
				}, 1000);
			},
			
			exit() {
				let data = {
					queryData:{},
					paramsData:{},
				}
				exit(data).then(res => {
					console.log(res)
					this.$setsessionStorage('userInfo','');
						this.$message({
							message: '退出成功',
							type: 'success'
						});
					setTimeout(()=>{
						this.$router.replace({
							name:'login'
						})
					},1500)

				}).catch(error => {
					console.log('error', error)
				})
			},

		}
	}
</script>

<style lang="scss" scoped>
	.avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	  }
	  .avatar-uploader .el-upload:hover {
	    border-color: #409EFF;
	  }
	  .avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 60px;
	    height: 60px;
	    line-height: 60px;
	    text-align: center;
	  }
	  .avatar {
	    width: 60px;
	    height: 60px;
	    display: block;
		border-radius:100%;
	  }
	.home{
		overflow-x: hidden;
	}
	.content{
		margin: 30px auto;
		// border:1px solid red;
	}
	.home-list{
		width: 960px;
	}
	
	
	.list-title{
		font-size:16px;
		font-weight:600;
		color:seagreen;
		background-color: #94d6da;
	}
	.list-content{
		padding:20px;
		border:1px solid #94d6da;
		border-top:none;
	}
	.desc{
		min-height: 50px;
		p{
			color:#333;
			font-size:14px;
		
		}
		i{
			margin-right: 5px;
			font-size:16;
		}
		strong{
			font-size:15px;
		}
	}
	.headerImage{
		margin: 10px 0;
		.name{
			font-size:13px;
			margin-left: 10px;
		}
	}
	.time-money{
		margin: 10px 0;
		i{
			font-size:20px;
			color:#000;
			vertical-align: middle;
		}
		span{
			font-size:13px;
			vertical-align: middle;
		}
		.money{
			color:orangered;
		}
	}
	.right-menu{
		margin-left: 30px;
		width:200px;
		height:300px;
		padding:20px;
		box-shadow: 0 0 5px rgba(148,214,218,1) inset;
		.username{
			font-size:15px;
			color:#333;
			span{
				color:red;
				text-decoration: underline;
			}
		}
	}
	.extrence{
		margin: 20px 0;
	}
</style>