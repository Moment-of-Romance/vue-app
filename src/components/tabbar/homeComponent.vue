<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunboList" :key="item.url">
        <img :src="item.img">
      </mt-swipe-item>
    </mt-swipe>
    <div class="homeNav">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newList">
                <img src="../../images/menu1.png">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <img src="../../images/menu2.png"></span>
                <div class="mui-media-body">图片分享</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <img src="../../images/menu3.png">
                <div class="mui-media-body">商品购买</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <img src="../../images/menu4.png">
                <div class="mui-media-body">留言反馈</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <img src="../../images/menu5.png">
                <div class="mui-media-body">视频专区</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <img src="../../images/menu6.png">
                <div class="mui-media-body">联系我们</div></router-link></li>
    </ul> 
    </div>
  </div>
</template>


<script>
import { Toast } from "mint-ui"
    export default {
      data(){
        return {
          lunboList : []
        }
      },
      created : function(){
        this.getLunBoResource()
      },
      methods:{
        getLunBoResource : function(){
          this.$http.get("http://vue.studyit.io/api/getlunbo").then(result=>{
            console.log(result.body)
            //判断 状态码 是不是0
            if(result.body.status===0){
              //成功 将数据 绑定到 data 上
              this.lunboList = result.body.message
            }else{
              Toast("获取轮播图数据失败！")
            } 
          })
        }
      }
    }
</script>


<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  background-color: #fff;

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }

    &:nth-child(2) {
      background-color: blue;
    }

    &:nth-child(3) {
      background-color: cyan;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}
.homeNav .mui-table-view {
  background-color: #fff;
  .mui-table-view-cell {
    border: none;
    img {
      width: 60px;
      height: 60px;
    }
  }
}
</style>
