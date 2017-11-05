//入口文件 
//导入vue 
import Vue from "vue"
//导入 VUE-ROUTER
import vueRouter from "vue-router"
//注册
Vue.use(vueRouter)
//导入vue-resource
import vueResource from "vue-resource"
//注册vue-resource
Vue.use(vueResource)
//导入路由模块
import router from "./router.js"

//导入 app.vue
import App from "./App.vue"

//按需导入 mint-ui
import { Header,Swipe,SwipeItem } from "mint-ui"

Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入 mui 样式
import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"

//创建一个 vue 实例
var vm = new Vue({
    el : "#app",
    data : {

    },
    render : c=>c(App),
    router
})