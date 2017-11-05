<template>
  <div>
      <!-- 图文列表区域 -->
    <ul class="mui-table-view">

      <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
        <router-link :to="'/home/newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class='mui-ellipsis'>
              <span>发表时间：{{ item.add_time}}</span>
              <span>点击：{{ item.click }}次</span>
            </p>
          </div>
        </router-link>
      </li>

    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui"
export default {
    data(){
        return {
            newList : []
        }
    },
    created : function(){
        this.getNewsList()
    },
    methods : {
        getNewsList : function(){
            this.$http.get("http://vue.studyit.io/api/getnewslist").then(result=>{
                console.log(result.body)
                if(result.body.status === 0){
                    //成功获取 新闻资讯 信息
                    this.newList = result.body.message
                }else{
                    //失败 弹出提示框
                    Toast("获取新闻资讯失败")
                }
            })
        }
    }
}
</script>


<style lang="scss" scoped>

.mui-media-body {
  h1 {
    font-size: 14px;
  }

  .mui-ellipsis {
    color: #26a2ff;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
}
</style>

