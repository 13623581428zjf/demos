<template>
	<div class="banner-box">
		<div :id="idWrapper" class="wrapper">
			<div :id="id" class="cute-slider" data-width="1140" data-height="360" data-overpause="true">
				<ul data-type="slides">
					<li data-delay="3" data-src="3" data-trans3d="tr6,tr17,tr22,tr23,tr29,tr27,tr32,tr34,tr35,tr53,tr54,tr62,tr63,tr4,tr13,tr45" data-trans2d="tr3,tr8,tr12,tr19,tr22,tr25,tr27,tr29,tr31,tr34,tr35,tr38,tr39,tr41" v-for="(item,index) in list" :key="index">
						<img :src="item.imgurl" :data-src="item.imgurl" :data-thumb="item.thumb" />

					</li>
				</ul>
				<ul data-type="controls">
					<li data-type="captions"> </li>
					<li data-type="link"> </li>
					<li data-type="video"> </li>
					<li data-type="slideinfo"> </li>
					<li data-type="circletimer"> </li>
					<li data-type="next"> </li>
					<li data-type="previous"> </li>
					<!-- <li data-type="slidecontrol"> </li> -->
					<li data-type="bartimer"> </li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'cuteThreeD',
		props: {
			list: {
				type: Array,
				default: []
			},
			id: {
				type: String,
				default:'cuteSlider'+new Date().getTime()
			},
		},
		computed:{
			idWrapper:()=>{
				return this.id+'Wrapper';
			}
		},
		data() {
			return {
				
			}
		},
		mounted() {
			this.$nextTick(() => {
				var myslider = new Cute.Slider();
				console.log('myslider',myslider)
				myslider.setup(this.id, this.idWrapper);
			})
			
			},
		methods: {

		}
	}
</script>

<style lang='scss' scoped>
	.banner-box {
		width: 100%;
		min-width: 360px;
		margin: 0 auto;
		position: relative;
		background-color: #e7e7e7;
	}
	.cute-slider {
		position: relative;
	}
	
	.wrapper {
		width: 100%;
		margin: 0 auto;
		max-width: 100%;
		min-width: 360px;
	}
</style>