<template>
	<div class="event event-wrapper admin" style="box-sizing: border-box;">
		<div class="ub w100" style="box-sizing: border-box;">
			<div class="ub event-content w100">
				<div class="ub ub-ver ub-ac ub-f1">
					<el-row content="flex" align="middle" class="w100" style="border-radius:0 0 5px 5px;">
						<el-col :span="20" class="event-btn-col">
							<el-form :model="get_params">
								<el-form-item label="标题名称 ：" :label-width="formLabelWidth">
									<el-input placeholder="请输入" clearable v-model.trim="get_params.title" size="small"></el-input>
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
				<div class="list-tips">内容列表</div>
				<div>
					<angleBtn icon="el-icon-plus" @click="addDialog = true" title="添 加" />
				</div>
			</div>
			<el-table ref="multipleTable" v-loading="loading" class='bigTable' :data="tableData" border stripe tooltip-effect="dark">
				<!--<el-table-column align="center" content="selection" width="50"></el-table-column>-->
				<el-table-column align="center" type="index" width="50" label="序号" :index="indexMethod">
				</el-table-column>
				<el-table-column prop="title" label="标题">
				</el-table-column>
				<el-table-column prop="category.name" label="类型">
				</el-table-column>
				<el-table-column prop="title" label="标题">
				</el-table-column>
				<el-table-column prop="dayNum" label="工时">
				</el-table-column>
				<el-table-column prop="money" label="总价(元)">
				</el-table-column>
				<el-table-column prop="description" label="描述">
				</el-table-column>
				<el-table-column align="center" label="操作" width="130" fixed="right" class-name="deepBg">
					<template slot-scope="scope">
						<el-button type="text" @click="handleEdit(scope.row)">修 改</el-button>
						<el-button type="text" @click="handleDel(scope.row)">刪 除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="pagination">
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="get_params.page"
				 :page-sizes="[10, 20, 30, 40,50]" :page-size="get_params.size" layout="total, sizes, prev, pager, next, jumper"
				 :total="total_num">
				</el-pagination>
			</div>
		</div>
		<el-dialog title="添加" :visible.sync="addDialog" width="600px" custom-class="attendance-dialog">
			<el-form :model="addcontentForm" :rules="rules" ref="addcontentForm">
				<el-form-item label="标题：" label-width="120px" label-position="left" prop="title">
					<el-input style="width:80%" size="small" placeholder="请输入" v-model="addcontentForm.title"></el-input>
				</el-form-item>
				<el-form-item label="类型：" label-width="120px" label-position="left" prop="type">
					<el-select style="width:80%" clearable size="small" v-model.trim="addcontentForm.type" placeholder="请选择">
						<el-option v-for="(item,index) in types" :key="item.value" :label="item.label" :value="item.value"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="工时：" label-width="120px" label-position="left" prop="dayNum">
					<el-input style="width:80%" size="small" placeholder="请输入" v-model="addcontentForm.dayNum"></el-input>
				</el-form-item>
				<el-form-item label="总价：" label-width="120px" label-position="left" prop="money">
					<el-input style="width:80%" size="small" placeholder="请输入" v-model="addcontentForm.money"></el-input>
				</el-form-item>
				<el-form-item label="描述：" label-width="120px" label-position="left" prop="desc">
					<el-input type="textarea" :rows="4" style="width:80%" size="small" placeholder="请输入" v-model="addcontentForm.desc"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<searchBtn title="确 定" @click="setVIP('addcontentForm')" />
				<div class="cancelBtn" style="margin-left: 10px;" @click="addDialog = false">取 消</div>
			</span>
		</el-dialog>
		<el-dialog title="修改" :visible.sync="editDialog" width="600px" custom-class="attendance-dialog">
			<!-- 			<span>确定设置<i style="color:red;font-size:14px;">{{currentcontent.name}}</i>吗？</span> -->
			<el-form :model="editcontentForm" :rules="rules" ref="editcontentForm">
				<el-form-item label="标题：" label-width="120px" label-position="left" prop="title">
					<el-input style="width:80%" size="small" placeholder="请输入" v-model="editcontentForm.title"></el-input>
				</el-form-item>
				<el-form-item label="类型：" label-width="120px" label-position="left" prop="type">
					<el-select style="width:80%" clearable size="small" v-model.trim="editcontentForm.type" placeholder="请选择">
						<el-option v-for="(item,index) in types" :key="item.value" :label="item.label" :value="item.value"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="工时：" label-width="120px" label-position="left" prop="dayNum">
					<el-input style="width:80%" size="small" placeholder="请输入" v-model="editcontentForm.dayNum"></el-input>
				</el-form-item>
				<el-form-item label="总价：" label-width="120px" label-position="left" prop="money">
					<el-input style="width:80%" size="small" placeholder="请输入" v-model="editcontentForm.money"></el-input>
				</el-form-item>
				<el-form-item label="描述：" label-width="120px" label-position="left" prop="desc">
					<el-input type="textarea" :rows="4" style="width:80%" size="small" placeholder="请输入" v-model="editcontentForm.desc"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<searchBtn title="确 定" @click="setVIPEdit('editcontentForm')" />
				<div class="cancelBtn" style="margin-left: 10px;" @click="editDialog = false">取 消</div>
			</span>
		</el-dialog>
		<el-dialog title="提示" :visible.sync="deletecontentDialog" width="600px" custom-class="attendance-dialog">
			<span>确定删除<i style="color:red;font-size:14px;">{{currentcontent.name}}</i>吗？</span>
			<span slot="footer" class="dialog-footer">
				<searchBtn title="确 定" @click="deletecontent" />
				<div class="cancelBtn" style="margin-left: 10px;" @click="deletecontentDialog = false">取 消</div>
			</span>
		</el-dialog>
	</div>

</template>

<script>
	import {
		get_content,
		delete_content,
		add_content,
		get_type
	} from '../../server/admin.js'

	export default {
		name: 'contentList',
		data() {
			return {
				types:[],
				editDialog: false,
				deletecontentDialog: false,
				addcontentForm: {
					title: '',
					type:'',
					dayNum:'',
					money:'',
					desc:'',
				},
				editcontentForm: {
					id: '',
					title: '',
					type:'',
					dayNum:'',
					money:'',
					desc:'',
				},
				rules: {
					title: [{
						required: true,
						message: '请输入标题',
						trigger: 'blur'
					}, ]
				},
				addDialog: false,

				formLabelWidth: '100px',

				total_num: 0,
				loading: false,

				get_params: {
					page: 1,
					size: 10,
					title: '',
				},
				currentcontent: {
					id: '',
					name: '',
				},
				tableData: [],
				multipleSelection: [],
			}
		},
		watch: {
			addDialog: function(val, oldVal) {
				if (!val) {
					this.$refs.addcontentForm.resetFields();
				}
			},
			editDialog: function(val, oldVal) {
				if (!val) {
					this.$refs.editcontentForm.resetFields();
				}
			}
		},
		mounted() {

			this.$nextTick(() => {
				this.initType();
				this.get_data();
			})
		},
		methods: {
			initType() {
				let userInfo = this.$getsessionStorage('userInfo');
				this.types = [];
				let data = {
					userId:userInfo._id
				}
				get_type(data).then(res => {
					console.log('类型列表', res)
					let list = res.content;
					if(list.length > 0) {
						list.forEach(item => {
							this.types.push({
								label:item.name,
								value:item._id
							});
						})
					}
				}).catch(error => {
					console.log('error', error);
				});
			},
			
			handleDel(row) {
				this.deletecontentDialog = true;
				this.currentcontent = {
					id: row._id,
					name: row.title,
				};
			},
			handleEdit(row) {
				this.editDialog = true;
				this.editcontentForm = {
					id: row._id,
					title: row.title,
					type:row.category._id,
					dayNum:row.dayNum,
					money:row.money,
					desc:row.description,
				};
			},
			deletecontent() {
				let data = {
					id: this.currentcontent.id,
				}
				delete_content(data).then(res => {
					this.deletecontentDialog = false;
					this.$message({
						message: '刪除成功！',
						type: 'success'
					});
					setTimeout(() => {
						this.get_data();
					}, 1500)
				}).catch(error => {
					console.log('error', error);
				});
			},
			setVIP(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.addData();
					} else {
						console.log('error submit!!');
						return false;
					}
				});


			},
			setVIPEdit(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.editData();
					} else {
						console.log('error submit!!');
						return false;
					}
				});


			},
			addData() {
				let userInfo = this.$getsessionStorage('userInfo');
				let data = {
					queryData: {},
					paramsData: {
						creatUserId: userInfo._id,
						creatUserName:userInfo.username,
						title: this.addcontentForm.title,
						category: this.addcontentForm.type,
						dayNum: this.addcontentForm.dayNum,
						money: this.addcontentForm.money,
						description: this.addcontentForm.desc,
					}
				}
				add_content(data).then(res => {
					this.addDialog = false;
					this.$message({
						message: '设置成功！',
						type: 'success'
					});
					setTimeout(() => {
						this.get_data();
					}, 1500)
				}).catch(error => {
					console.log('error', error);
				});
			},
			editData() {
				let data = {
					queryData: {},
					paramsData: {
						id: this.editcontentForm.id,
						title: this.editcontentForm.title,
						category: this.editcontentForm.type,
						dayNum: this.editcontentForm.dayNum,
						money: this.editcontentForm.money,
						description: this.editcontentForm.desc,
					}
				}
				add_content(data).then(res => {
					this.editDialog = false;
					this.$message({
						message: '修改成功！',
						type: 'success'
					});
					setTimeout(() => {
						this.get_data();
					}, 1500)
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
					title: this.get_params.title,
					creatUserId: userInfo._id
				}
				get_content(data).then(res => {
					console.log('内容列表', res)
					this.loading = false;
					this.total_num = res.totalElements;
					let list = res.content;
					if (list.length > 0) {
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
				return (this.get_params.page - 1) * this.get_params.size + index + 1;
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
	.admin {
		background-color: #010205;
		min-width: 1200px;
		background-image: url(../../assets/img/BG.jpg);
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
		padding-left: 6px;
		box-sizing: border-box;
	}
</style>
