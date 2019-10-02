import Vue from 'vue'
import App from './App.vue'
import router from './shared/router';
// import i18n from './shared/i18n';
import './plugins/bootstrap-vue/index';
import './index.scss';

Vue.config.productionTip = false


new Vue({
  // i18n,
  router,
  render: h => h(App)
}).$mount('#app');
