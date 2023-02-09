import Vue from 'vue'
import App from './App.vue'
import CarbonComponentsVue from '@carbon/vue/src/index';

import 'carbon-components/css/carbon-components.css';
import './assets/scss/test1.scss';

import router from './router';

Vue.config.productionTip = false;

Vue.use(CarbonComponentsVue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
