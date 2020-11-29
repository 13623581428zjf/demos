<template>
	<div class="event event-wrapper admin" style="box-sizing: border-box;">
		<div class="ub w100" style="box-sizing: border-box;">
			<div class="ub event-content w100">
				<div class="ub ub-ver ub-ac ub-f1">
					<el-row type="flex" align="middle" class="w100" style="border-radius:0 0 5px 5px;">
						<el-col :span="20" class="event-btn-col">
							<el-form :model="get_params">
								<el-form-item label="类型名称 ：" :label-width="formLabelWidth">
									<el-input placeholder="请输入" clearable v-model.trim="get_params.typename" size="small"></el-input>
								</el-form-item>
							</el-form>
						</el-col>
						<el-col :span="4" class="ub ub-pe event-btn-col">
							<searchBtn style="margin-top: -10px;" title="搜 索" @click="searchData" />
						</el-col>
					</el-row>
				</div>
			</div>
		</div>
		<div class="attendance-list">
			<div class="ub ub-pj w100">
				<div class="list-tips">类型列表</div>
				<div>
					<angleBtn icon="el-icon-plus" @click="addDialog = true" title="添 加" />
				</div>
			</div>
			<el-table ref="multipleTable" v-loading="loading" class='bigTable' :data="tableData" border stripe tooltip-effect="dark">
				<!--<el-table-column align="center" type="selection" width="50"></el-table-column>-->
				<el-table-column align="center" type="index" width="50" label="序号" :index="indexMethod">
				</el-table-column>
				<el-table-column prop="name" label="类型名称" >
				</el-table-column>
				
				<el-table-column align="center" label="操作" width="130" fixed="right" class-name="deepBg">
					<template slot-scope="scope">
						<el-button type="text" @click="handleEdit(scope.row)">修 改</el-button>
						<el-button type="text" @click="handleDel(scope.row)">刪 除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<!-- <div class="pagination">
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="get_params.page" :page-sizes="[10, 20, 30, 40,50]" :page-size="get_params.size" layout="total, sizes, prev, pager, next, jumper" :total="total_num">
				</el-pagination>
			</div> -->
		</div>
		<el-dialog title="添加" :visible.sync="addDialog" width="600px" custom-class="attendance-dialog">
<!-- 			<span>确定设置<i style="color:red;font-size:14px;">{{currenttype.name}}</i>吗？</span> -->
				<el-form :model="addtypeForm" :rules="rules" ref="addtypeForm">
					<el-form-item label="类型名称：" label-width="120px" label-position="left" prop="name">
						<el-input style="width:300px" size="small" placeholder="请输入" v-model="addtypeForm.name"></el-input>
					</el-form-item>
				</el-form>
			<span slot="footer" class="dialog-footer">
				<searchBtn title="确 定" @click="setVIP('addtypeForm')" />
				<div class="cancelBtn" style="margin-left: 10px;" @click="addDialog = false">取 消</div>
			</span>
		</el-dialog>
		<el-dialog title="修改" :visible.sync="editDialog" width="600px" custom-class="attendance-dialog">
		<!-- 			<span>确定设置<i style="color:red;font-size:14px;">{{currenttype.name}}</i>吗？</span> -->
						<el-form :model="edittypeForm" :rules="rules" ref="edittypeForm">
							<el-form-item label="类型名称：" label-width="120px" label-position="left" prop="name">
								<el-input style="width:300px" size="small" placeholder="请输入" v-model="edittypeForm.name"></el-input>
							</el-form-item>
						</el-form>
					<span slot="footer" class="dialog-footer">
						<searchBtn title="确 定" @click="setVIPEdit('edittypeForm')" />
						<div class="cancelBtn" style="margin-left: 10px;" @click="editDialog = false">取 消</div>
					</span>
				</el-dialog>
		<el-dialog title="提示" :visible.sync="deletetypeDialog" width="600px" custom-class="attendance-dialog">
			<span>确定删除<i style="color:red;font-size:14px;">{{currenttype.name}}</i>吗？</span>
			<span slot="footer" class="dialog-footer">
				<searchBtn title="确 定" @click="deletetype" />
				<div class="cancelBtn" style="margin-left: 10px;" @click="deletetypeDialog = false">取 消</div>
			</span>
		</el-dialog>
	</div>

</template>

<script>
	import {
		get_type,
		delete_type,
		add_type,
	} from '../../server/admin.js'

	export default {
		name: 'type',
		data() {
			return {
				editDialog:false,
				deletetypeDialog:false,
				addtypeForm:{
					name:'',
				},
				edittypeForm:{
					id:'',
					name:'',
				},
				rules:{
					name:[
						{ required: true, message: '请输入类型名称', trigger: 'blur' },
					]
				},
				addDialog:false,
				
				formLabelWidth: '100px',
				
				total_num: 0,
				loading: false,
				
				get_params: {
					page: 1,
					size: 10,
					typename:'',
				},
				currenttype:{
					id:'',
					name:'',
				},
				tableData: [],
				multipleSelection: [],
			}
		},
		watch:{
			addDialog:function(val,oldVal){
				if(!val){
					this.$refs.addtypeForm.resetFields();
				}
			},
			editDialog:function(val,oldVal){
				if(!val){
					this.$refs.edittypeForm.resetFields();
				}
			}
		},
		mounted() {

			this.$nextTick(() => {
				this.get_data();
			})
		},
		methods: {
			handleDel(row){
				this.deletetypeDialog = true;
				this.currenttype = {
					id:row._id,
					name:row.name,
				};
			},
			handleEdit(row){
				this.editDialog = true;
				this.edittypeForm = {
					id:row._id,
					name:row.name,
				};
			},
			deletetype(){
				let data = {
					id:this.currenttype.id,
				}
				delete_type(data).then(res => {
					this.deletetypeDialog = false;
					this.$message({
						message: '刪除成功！',
						type: 'success'
					});
					setTimeout(()=>{
						this.get_data();
					},1500)
				}).catch(error => {
					console.log('error', error);
				});
			},
			setVIP(formName){
				this.$refs[formName].validate((valid) => {
					if(valid) {
						this.addData();
					} else {
						console.log('error submit!!');
						return false;
					}
				});
				
				
			},
			setVIPEdit(formName){
				this.$refs[formName].validate((valid) => {
					if(valid) {
						this.editData();
					} else {
						console.log('error submit!!');
						return false;
					}
				});
				
				
			},
			addData(){
				let userInfo = this.$getsessionStorage('userInfo');
				let data = {
					queryData:{},
					paramsData:{
						userId:userInfo._id,
						name:this.addtypeForm.name,
					}
				}
				add_type(data).then(res => {
					this.addDialog = false;
					this.$message({
						message: '设置成功！',
						type: 'success'
					});
					setTimeout(()=>{
						this.get_data();
					},1500)
				}).catch(error => {
					console.log('error', error);
				});
			},
			editData(){
				let data = {
					queryData:{},
					paramsData:{
						id:this.edittypeForm.id,
						name:this.edittypeForm.name,
					}
				}
				add_type(data).then(res => {
					this.editDialog = false;
					this.$message({
						message: '修改成功！',
						type: 'success'
					});
					setTimeout(()=>{
						this.get_data();
					},1500)
				}).catch(error => {
					console.log('error', error);
				});
			},
			get_data() {
				let userInfo = this.$getsessionStorage('userInfo');
				this.tableData = [];
				this.loading = true;
				let data = {
					page: this.get_params.page,
					size: this.get_params.size,
					name:this.get_params.typename,
					userId:userInfo._id
				}
				get_type(data).then(res => {
					console.log('类型列表', res)
					this.loading = false;
					//this.total_num = res.totalElements;
					let list = res.content;
					if(list.length > 0) {
						list.forEach(item => {
							this.tableData.push(item);
						})
					}
				}).catch(error => {
					this.loading = false;
					console.log('error', error);
				});
			},

			indexMethod(index) {
				return(this.get_params.page - 1) * this.get_params.size + index + 1;
			},
			searchData() {
				this.get_params.page = 1;
				this.get_data();
			},

			handleSee(obj) {
				console.log(obj);
				this.detailDialog = true;
				this.threaten_domainFormDetail = this.$deepCopy(obj);

			},

			handleSizeChange(val) {
				this.get_params.size = val;
				this.get_data();
			},
			handleCurrentChange(val) {
				this.get_params.page = val;
				this.get_data();
			},
		}
	}
</script>

<style lang="scss" scoped>
	.admin{
		background-color: #010205;
		min-width: 1200px;
		background-image:url(../../assets/img/BG.jpg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: 150%;
	}
	.el-table th>.cell {
		white-space: pre-line;
		text-align: center;
	}
	
	.dialog-conten {
		width: 100%;
		height: 200px;
		overflow-y: auto;
	}
	
	.dialog-item {
		width: 33%;
		font-size: 0;
		margin-bottom: 30px;
	}
	
	.dialog-item>span {
		display: inline-block;
		vertical-align: middle;
		font-size: 14px;
	}
	
	.dialog-item>span:nth-child(1) {
		width: 38%;
		text-align: right;
		color: #ffffff;
		opacity: 0.6;
	}
	
	.dialog-item>span:nth-child(2) {
		width: 62%;
		padding-left:6px;
		box-sizing: border-box;
	}
</style>