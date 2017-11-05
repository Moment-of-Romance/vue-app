//导入 路由 
import vueRouter from "vue-router"

//导入组件
import homeComponent from "./components/tabbar/homeComponent.vue"
import memberComponent from "./components/tabbar/memberComponent.vue"
import shopcarComponent from "./components/tabbar/shopcarComponent.vue"
import searchComponent from "./components/tabbar/searchComponent.vue"
import newList from "./components/news/newList.vue"
import newsInfo from "./components/news/newsInfo.vue"

//到处路由配置对象
export default new vueRouter({
    routes : [
        { path : "/" , redirect : "/home" },
        { path : "/home" , component : homeComponent },
        { path : "/member" , component : memberComponent },
        { path : "/shopcar" , component : shopcarComponent },
        { path : "/search" , component : searchComponent },
        { path : "/home/newList" , component : newList },
        { path : "/home/newsInfo/:id" , component : newsInfo }
    ],
    linkActiveClass:"mui-active"
})