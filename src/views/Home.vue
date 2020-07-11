<template>
  <div class="home">
      <router-link to="">
        <img src="../assets/iconcolor/search1.svg" class="search" >
      </router-link>
      <!-- 轮播 -->
      <van-swipe
       class="my-swipe"
       :autoplay="5000"
       indicator-color="white"
       loop
       >
        <van-swipe-item>
          <img width="100%" src="../assets/page_icon/wudong.png">
        </van-swipe-item>
        <van-swipe-item>
          <img width="100%" src="../assets/page_icon/jiandao.png">
        </van-swipe-item>
        <van-swipe-item>
          <img width="100%" src="../assets/page_icon/banner_3.jpg">
        </van-swipe-item>
        <van-swipe-item>
          <img width="100%" src="../assets/page_icon/banner_4.jpg">
        </van-swipe-item>
      </van-swipe>
      <!-- swipe end -->
    
    <!-- 活动 -->
    <ul class="classify">
      <li>
        <router-link to="/update">
          <img src="../assets/iconcolor/update.svg">
          <p>更新</p>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../assets/iconcolor/rank.svg">
          <p>排行</p>
        </router-link>
      </li>
      <li>
        <router-link to="/classify">
          <img src="../assets/iconcolor/classify.svg">
          <p>分类</p>
        </router-link>
      </li>
    </ul><!-- classfiy end -->
    <!-- 热门阅读推荐 -->
    <van-row class="hot" type="flex" justify="space-between">
      <van-col span="24" class="title">
        <h4>热门阅读推荐</h4>
      </van-col>
      <van-col span="8" class="hot_item" v-for="(item,i) of this.res" :key="i">
        <van-image
         :src="'https://image.yqmh.com/mh/'+item.comic_id+'.jpg-300x400.webp'"
         width="98%"
         height="auto"
         radius="3px"
         @click="join"
        ></van-image>
        <!-- title -->
        <p class="cartoon">{{item.comic_name}}</p>
        <!-- 简介 -->
        <van-row type="flex">
          <van-col span="21" class="cartoon-text">
            
          </van-col>
          <van-col span="3">
            <van-icon name="ellipsis" class="more" color="#c5c5c5" />
          </van-col>
        </van-row>
        <!-- 简介 end -->
      </van-col>
    </van-row>
    <!-- 热门收藏推荐 -->
    <van-row class="hot" type="flex" justify="space-between">
      <van-col span="24" class="title">
        <h4>热门收藏推荐</h4>
      </van-col>
      <van-col span="8" class="hot_item" v-for="(item,i) of this.mount" :key="i">
        <van-image
         :src="'http://image.mhxk.com/mh/'+item.comic_id+'.jpg'"
         width="98%"
         height="auto"
         radius="3px"
         @click="join"
        ></van-image>
        <!-- title -->
        <p class="cartoon">{{item.comic_name}}</p>
        <!-- 简介 -->
        <van-row type="flex">
          <van-col span="21" class="cartoon-text">
            <!-- 漫画简介 -->
          </van-col>
          <van-col span="3">
            <van-icon name="ellipsis" class="more" color="#c5c5c5" />
          </van-col>
        </van-row>
        <!-- 简介 end -->
      </van-col>
    </van-row>

        <!-- 一秒入坑·这些漫画超厉害 -->
    <van-row class="hot" type="flex" justify="space-between">
      <van-col span="24" class="title">
        <h4>一秒入坑·这些漫画超厉害</h4>
      </van-col>
      <van-col span="8" class="hot_item" v-for="(item,i) of this.war" :key="i">
        <van-image
         :src="'http://image.mhxk.com/mh/'+item.comic_id+'.jpg'"
         width="98%"
         height="auto"
         radius="3px"
         @click="join"
        ></van-image>
        <!-- title -->
        <p class="cartoon">{{item.comic_name}}</p>
        <!-- 简介 -->
        <van-row type="flex">
          <van-col span="21" class="cartoon-text">
            <!-- 漫画简介 -->
          </van-col>
          <van-col span="3">
            <van-icon name="ellipsis" class="more" color="#c5c5c5" />
          </van-col>
        </van-row>
        <!-- 简介 end -->
      </van-col>
    </van-row>
    <!-- 底部 -->
    <div class="bottom">我也是有底线的</div>

    <!-- 底部标签栏 -->
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  data(){
    return{
      res:[],
      mount:[],
      war:[],
    }
  },
  methods:{
    join(){
      window.location.href="https://www.manhuatai.com/doupocangqiong/836.html"
    }
  },
  mounted(){
    this.axios.get("http://getcomicinfo-globalapi.yyhao.com/app_api/v5/getsortlist/").then(res=>{
      // console.log(res.data);
      this.res=res.data.data;
      // console.log(this.res);
    });
    this.$jsonp("https://getconfig-globalapi.yyhao.com/app_api/v5/getsortlist/?comic_sort=jingji").then(res=>{
      // console.log(res);
      this.mount=res.data;
    }).catch(err=>{
      console.log(err);
    });
    this.$jsonp("https://getconfig-globalapi.yyhao.com/app_api/v5/getsortlist/?comic_sort=zhanzhen&page=searchPage&orderby=click&search_key=&productname=mht&platformname=android").then(res=>{
      // console.log(res);
      this.war=res.data;
    }).catch(err=>{
      console.log(err);
    });
    
  },
}
</script>

<style scoped>
  .search{
    display: block;
    width: 6%;
    height: 6%;
    position: absolute;
    left: .5em;
    z-index: 10;
  }
  .my-swipe .van-swipe-item{
    width: 100%;
    text-align: center;
   }
  a{
    color: #929090;
    font-size: 10px;
    font-weight: 600;
  }
  .classify{
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
  }
  .classify p{
    margin: 0;
    text-align: center;
  }
  .title h4{
    margin: 1.5vh 0;
  }
  /* 漫画推荐布局 */
  .hot{
    padding-left: .4em;
    padding-right: .1em;
    flex-wrap: wrap;
  }
  .cartoon{
    text-align: center;
    margin: 1px;
    padding: 0;
    overflow: hidden;
    /* 字体不换行 */
    white-space: nowrap;
    /* 字体超出省略 */
    text-overflow: ellipsis;
    font-size: .9em;
    font-weight: 600;
  }
  .cartoon-text{
    text-align: left;
    padding: 0;
    margin:1px 0;
    color: #c5c5c5;
    overflow: hidden;
    /* 字体不换行 */
    white-space: nowrap;
    /* 字体超出省略 */
    text-overflow: ellipsis;
    font-size: xx-small;
  }
  .more{
    transform: rotate(90deg);
    overflow: hidden;
    /* 字体不换行 */
    white-space: nowrap;
    /* 字体超出省略 */
    text-overflow: ellipsis;
  }
  /* 到底部的文字样式 */
  .bottom{
    padding: 5px;
    color: gray;
    font-size: 3vw;
    text-align: center;
    background-color: rgb(236, 236, 236);
  }

</style>
