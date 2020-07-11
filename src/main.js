import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import footer from './components/footer'
import qs from 'qs'



Vue.prototype.qs=qs;
Vue.use(Vant);
// 自定义过滤器
Vue.filter("type",function(oldval){
  var newWord=oldval.match(/[\u4e00-\u9fa5]{2}/g);
  return newWord[0];
})

// 全局组件
Vue.component("my-footer",footer);
// axios 连接数据库
import axios from 'axios';
Vue.prototype.axios = axios;
// jsonP跨域
import VueJsonp from 'vue-jsonp';
Vue.use(VueJsonp);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
