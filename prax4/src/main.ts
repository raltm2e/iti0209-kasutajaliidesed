import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import ECharts from 'vue-echarts/components/ECharts.vue'


Vue.config.productionTip = false;
Vue.component('v-chart', ECharts);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
