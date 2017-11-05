<template>
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h4 class="title">{{ newsinfo.title }}</h4>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>

    <hr>

    <!-- 内容 -->
    <div class="content" v-html="newsinfo.content"></div>
 </div> 
</template>

<script>
import { Toast } from "mint-ui"
    export default {
        data(){
            return {
                newsinfo : {}
            }
        },
        created:function(){
            this.getNewsInfo()
        },
        methods :{
            getNewsInfo : function(){
                //先获取 url 中参数id
                var id = this.$route.params.id
                //发送ajax请求
                this.$http.get("http://vue.studyit.io/api/getnew/"+id).then(result=>{
                    console.log(result.body)
                    if(result.body.status===0){
                        this.newsinfo = result.body.message[0]
                    }else{
                        Toast("获取详情失败")
                    }
                })
            }
        }
    }
</script>


<style lang="scss" >
.newsinfo-container {
  padding: 0 3px;
  .title {
    color: #226aff;
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    color: #226aff;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>


