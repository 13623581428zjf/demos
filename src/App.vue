<template>
  <div id="app">
  	<router-view class="first-view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
   data(){
  	return {
  		transitionName:'slide-left'
  	}
  },
  mounted(){

  },
  methods:{

  }
// watch: {
//		'$route' (to, from) {
//				console.log('path',to.path)
//
//			  }
//	},
}
</script>

<style lang="scss">
 
</style>
