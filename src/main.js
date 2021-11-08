import Vue from "vue";
import VueRouter from "vue-router";
import { IndexBar, IndexAnchor, Cell } from "vant";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "amfe-flexible";
import "./assets/css/reset.less";
import "vant/lib/index.css";
import "./assets/css/font/iconfont.css";

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
//多次通过push跳转同一页面报错 解决方案
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
//多次通过replace跳转同一页面报错 解决方案
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this; //安装全局事件总线
  },
  render: (h) => h(App),
}).$mount("#app");
