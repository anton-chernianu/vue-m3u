import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';
import router from './router';
import { store } from './store';

Vue.config.productionTip = false;
Vue.use(Vuex);

import "./assets/scss/app.scss";

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
    window.vue = this;
	},
});
