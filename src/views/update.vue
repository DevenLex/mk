<template>
  <div class="updata">
    <!-- 更新Item -->
        <div class="updateItem" v-for="(item,i) of this.res.data" :key="i">
          <!-- 图片 -->
          <van-image
           width="100%"
           class="itemImg"
           :src="'https://image.yqmh.com/mh/'+item.comic_id+'.jpg-800x400.webp'"
           fit="contain"
          ></van-image>
          <!-- 类型，漫画名称 -->
          <h4>
            <!-- 类型 -->
            <span class="type">{{item.comic_type | type}}</span>
            <!-- 漫画名 -->
            {{item.comic_name}}
          </h4>
          <!-- 话别 -->
          <p>{{item.last_chapter_name}}</p>
        </div>
        <!-- 更新Item end -->

    <!-- 底部标签 -->
    <my-footer></my-footer>
    
  </div>
  <!-- .update end -->
</template>

<script>
export default {
  data(){
    return{
      active:0,
      res:[]
    }
  },
  mounted(){
    this.axios.get("http://getcomicinfo-globalapi.yyhao.com/app_api/v5/getsortlist/").then(res=>{
      // console.log(res.data);
      this.res=res.data;
      // console.log(this.res);
    })
  },
}
</script>

<style scoped>
  .updateItem{
    margin: 0 0 1em 0;
  }
  .updateItem h4,p{
    margin:.1em;
    font-weight: 500;
    font-size: 4vw;
  }
  .type{
    display: inline-block;
    width: 9vw;
    padding: 1vw;
    border: 1.5px solid #faa;
    color: #faa;
    border-radius: 3em;
    font-size: 3vw;
    text-align: center;
  }
  .updateItem p{
    margin-left: 1.5em;
    color: rgb(185, 183, 183);
    font-size: 3vw;
  }

</style>