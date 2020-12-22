<template>
	<div>
		<div>动画transtion</div>
		<div id="example-1">
			<button @click="show = !show">
    Toggle render
  </button>
			<transition name="slide-fade">
				<p v-if="show">hello</p>
			</transition>
		</div>
		<div id="example-2">
			<button @click="show = !show">Toggle show</button>
			<transition name="bounce">
				<p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
			</transition>
		</div>
		
		 
	</div>
</template>

<script>
	export default {

		data() {
			return {
				show: true,
				view: 'v-b'
			}
		},
		 
		methods: {

		}
	}
</script>

<style scoped="scoped">
	.slide - fade - enter - active {
		transition: all .10 s ease;
	}
	
	.slide - fade - leave - active {
		transition: all .10 s cubic - bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	.slide - fade - enter,
	.slide - fade - leave - to
	/* .slide-fade-leave-active for below version 2.1.8 */
	
	{
		transform: translateX(100 px);
		opacity: 0;
	}
	
	.bounce-enter-active {
		animation: bounce-in .5s;
	}
	
	.bounce-leave-active {
		animation: bounce-in .5s reverse;
	}
	
	@keyframes bounce-in {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1.5);
		}
		100% {
			transform: scale(1);
		}
	}
	
	 
</style>