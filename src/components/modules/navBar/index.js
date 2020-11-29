import navBar from './navBar.vue';

/* istanbul ignore next */
navBar.install = function(Vue) {
  Vue.component(navBar.name, navBar);
};

export default navBar;