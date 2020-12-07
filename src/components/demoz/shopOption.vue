<template>
	<div>
		<div>购物车</div>
		全选
		<input type="checkbox" @change="changeNationcl()" v-model="changeNation" />
		<div v-for="item in shopAtion">
			<input type="checkbox" v-model="newshopAtion" :value="item" @change="newAptionlenth()" />名称{{item.name}}&nbsp;&nbsp; 数量：
			<button @click="cliJ(item)">+</button>{{item.num}}<button @click="clidel(item)">-</button> &nbsp;&nbsp;价格&nbsp;&nbsp;{{item.price}}
		</div>
		<div>已选择{{newshopAtion}}</div>
		<div>商品总价：{{total()}}</div>
	</div>
</template>

<script>
	export default {
		demoOne: 'demoOne',
		data() {
			return {
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
				newshopAtion: [],
				changeNation: false
			}
		},
		methods: {
			total: function() {
				var nums = 0;
				for(var i = 0; i < this.newshopAtion.length; i++) {
					nums += this.newshopAtion[i].num * this.newshopAtion[i].price;
				}
				return nums;
			},
			changeNationcl() {
				if(this.changeNation) {
					this.newshopAtion = this.shopAtion;
				} else {
					this.newshopAtion = [];
				}
			},
			newAptionlenth() {
				if(this.newshopAtion.length === this.shopAtion.length) {
					this.changeNation = true;
				} else {
					this.changeNation = false;
				}
			},
			cliJ(item) {
				console.log(item)
                 item.num++;
			},
			clidel:function(item){
				 var number = item.num--;
				 if (number ===1) {
				 	item.num =1;
				 }
			}

		} /**/
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