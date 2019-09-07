import 'Styles/main.scss';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import router from './router.js';
import store from './store';

import App from 'Components/App.vue';

Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
  router,
  store: new Vuex.Store(store),
  render: createElement => createElement(App),
  el: '#app'
});
