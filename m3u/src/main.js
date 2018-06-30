import Vue from 'vue';
import App from './App';
import router from './router';
Vue.config.productionTip = false;

import "./assets/scss/app.scss";

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
