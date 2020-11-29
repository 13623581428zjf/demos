import Vue from 'vue';
import qmButton from './button/index.js';
import back from './back/index.js';
import cuteThreeD from './cuteThreeD/index.js';
import navBar from './navBar/index.js';

import {searchBtn, cancleBtn} from './searchBtn/index.js';
import angleBtn from './angleBtn/index.js';
const components = [
    qmButton,
    back,
    cuteThreeD,
	navBar,
    searchBtn,
    angleBtn,
    cancleBtn
];
const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

install(Vue);

export default {
  version: '0.0.1',
  qmButton,
  back,
  cuteThreeD,
  navBar,
   searchBtn,
    angleBtn,
    cancleBtn
}
