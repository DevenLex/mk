<template>
  <div>
    <!-- 头部标题 -->
    <van-nav-bar :title="this.url[1]" @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" size="30"></van-icon>
      </template>
    </van-nav-bar>
    <!-- 漫画列表 -->
    <div class="clist">
      <!-- 下拉刷新 -->
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <!-- 上拉加载更多 -->
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            offset="400"
            @load="onLoad"
          >
          <div>
          <van-row class="hot" type="flex" justify="space-between">
            <van-col
              span="8"
              v-for="(item, i) of list"
              :key="i"
            >
              <van-image
                :src="'http://image.mhxk.com/mh/' + item.comic_id + '.jpg'"
                width="98%"
                height="auto"
                radius="3px"
                @click="join"
              ></van-image>
              <!-- title -->
              <p class="cartoon">{{ item.comic_name }}</p>
            </van-col>
          </van-row>
          </div>
          </van-list>
          <!-- 上拉加载更多 -->
          </van-pull-refresh>
          <!-- 下拉刷新 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[],
      page:[],
      loading: false,
      finished: false,
      refreshing: false,
      url:'',
    };
  },
  // created(){
  //   // this.bus.$on("route_url",this.route.bind(this))
  // },
  mounted(){
    // console.log(this.$route.params.url)
    this.url=this.$route.params.url.split("$")
    // console.log(this.url);
    
    this.$jsonp('https://getconfig-globalapi.yyhao.com/app_api/v5/getsortlist/?comic_sort='+this.url[0]).then(res=>{
      // console.log(res);
      this.list=res.data;
      this.page=res.page;
      // console.log(this.list);
      // console.log(this.page);
      
      }).catch(err=>{
        console.log(err);
      });
  },
  methods: {
    // 接收参数并调用函数
    route(){
      
      // console.log(url);
    },
    // 上拉加载更多
    onLoad() {
      setTimeout(()=>{
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
          this.$jsonp('https://getconfig-globalapi.yyhao.com/app_api/v5/getsortlist/?comic_sort=rexue').then(res=>{
          // console.log(res);
          this.list=res.data;
          this.page=res.page;
          }).catch(err=>{
            console.log(err);
          });
          return;
        }
        let count=this.page.current_page +=1;
        let url="https://getconfig-globalapi.yyhao.com/app_api/v5/getsortlist/?comic_sort=rexue&page="+count;

        this.$jsonp(url).then(res=>{
          this.list=this.list.concat(res.data);
          // console.log(this.list)
          this.page=res.page;
          // 加载状态结束
          this.loading = false;
          if(this.page.current_page===this.page.total_page){
          this.finished=true;
          }
        }).catch(err=>{console.log(err);});
      },2000)
    },
    // 下拉刷新
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    // 点击返回
    onClickLeft() {
      this.$router.go(-1);
    },
    // 点击漫画
    join(){

    }
  },
};
</script>

<style scoped>
/* 漫画布局 */
.hot {
  padding-left: 0.4em;
  padding-right: 0.1em;
  flex-wrap: wrap;
}
/* 漫画标题居中加粗 */
.cartoon {
  text-align: center;
  margin: 1px;
  padding: 0;
  overflow: hidden;
  /* 字体不换行 */
  white-space: nowrap;
  /* 字体超出省略 */
  text-overflow: ellipsis;
  font-size: 0.9em;
  font-weight: 600;
}
</style>
