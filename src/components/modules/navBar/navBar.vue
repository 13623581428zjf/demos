<template>
	<nav class="ub ub-pc">
		<div class="menu">
			<div class="box">
				<div class="left"></div>
				<div class="right"></div>
			</div>
			<ul>
				<li><a href="/">首页</a></li>
				<li><a href="/index.php/Course/courseList">HTML</a></li>
				<li><a href="/index.php/Special/vip">JAVASCRIPT</a></li>
				<li><a href="/index.php/example/exampleList">CSS</a></li>
			</ul>
	    </div>
	</nav>
</template>

<script>
	export default {
		name: 'navBar',
		props: {
			list: {
				type: Array,
				default: []
			},
		},
		data() {
			return {
				
			}
		},
		mounted() {
			this.$nextTick(() => {
				require('./nav.js');
			})
			
			},
		methods: {

		}
	}
</script>

<style lang='scss' scoped>

	nav {
		width: 100%;
		height: 41px;
		background: url(../../../assets/img/nav_bg.gif) repeat-x;
		border-bottom: 2px solid #e15671;
		position: relative;
		z-index: 5
	}
	nav .menu {
		/* float: right; */
		white-space: nowrap;
		position: relative
	}
	
	nav .menu .box {
		width: 0;
		height: 100%;
		position: absolute;
		background: #e15671;
		left: 0;
		overflow: visible
	}
	
	nav .menu .right {
		width: 0;
		height: 100%;
		background: #f00;
		border-radius: 50%;
		position: absolute;
		top: 0;
		right: 0
	}
	
	nav .menu .left {
		width: 0;
		height: 100%;
		background: #fff;
		border-radius: 50%;
		position: absolute;
		top: 0;
		left: 0
	}
	
	nav .menu ul {
		padding-right: 25px;
		position: relative
	}
	
	nav .menu ul li {
		height: 100%;
		display: inline-block;
		float: left;
		line-height: 41px;
		color: #fff;
		font-size: 14px
	}
	
	nav .menu ul li a {
		color: #fff;
		display: block;
		padding: 0 18px
	}
	
	nav .menu ul li:first-child {
		border-left: none
	}
	
	nav .menu ul li:last-child {
		border-right: none
	}
	
	nav .menu ul li.active {
		background: #e15671
	}
</style>