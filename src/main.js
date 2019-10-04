import Vue from 'vue'
import App from './App.vue'
import router from './shared/router';
import i18n from './shared/i18n';
import './modules/modules.js';
import './plugins/bootstrap-vue/index';
import './plugins/font-awesome/index';
import './index.scss';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import './icons';

Vue.use(require('vue-moment'));
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;


new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app');
