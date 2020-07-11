<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="分类" @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" size="30"></van-icon>
      </template>
    </van-nav-bar>
    <!-- 分类 -->
    <div class="div">
      <ul class="clsify">
        <li class="clsItem" v-for="(item, i) of classify" :key="i">
          <span @click="route(i)">{{ item.Clf }}</span>
        </li>
      </ul>
      <!-- 人气,更新 -->
      <van-tabs
        v-model="activeName"
        title-active-color="#5aa6ff"
        line-width="0"
        swipeable
      >
        <van-tab title="人气" name="hot">
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
              class="hot_item"
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
        </van-tab>
        <van-tab title="更新" name="new">
          <!-- 下拉刷新 -->
          <van-pull-refresh v-model="refreshing" @refresh="Refresh">
          <!-- 上拉加载更多 -->
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            offset="350"
            @load="Load"
          >
          <div>
          <van-row class="hot" type="flex" justify="space-between">
            <van-col
              span="8"
              class="hot_item"
              v-for="(item, i) of this.new"
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
        </van-tab>
      </van-tabs>
    </div>
    <!-- 分类 end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[],// 人气列表漫画数组
      new:[],// 更新列表漫画数组
      loading: false,
      finished: false,
      refreshing: false,
      pageN:[],// 人气列表页数数组
      searchPage:[],// 更新列表页数数组
      activeName: "hot",
      classify: [
        {
          Clf: "热血",
          url:
            "https://getconfig-globalapi.yyhao.com/app_api/v5/getsortlist/?comic_sort=rexue",
        },
        {
          Clf: "机战",
          url:
            "jizhan",
        },
        {
          Clf: "运动",
          url:
            "yundong",
        },
        {
          Clf: "推理",
          url:
            "tuili",
        },
        {
          Clf: "冒险",
          url:
            "maoxian",
        },
        {
          Clf: "搞笑",
          url:
            "gaoxiao",
        },
        {
          Clf: "战争",
          url:
            "zhanzhen",
        },
        {
          Clf: "神魔",
          url:
            "shenmo",
        },
        {
          Clf: "忍者",
          url:
            "renzhe",
        },
        {
          Clf: "竞技",
          url:
            "jingji",
        },
        {
          Clf: "悬疑",
          url:
            "xuanyi",
        },
        {
          Clf: "恋爱",
          url:
            "lianai",
        },
        {
          Clf: "宠物",
          url:
            "chongwu",
        },
        {
          Clf: "吸血",
          url:
            "xixue",
        },
        {
          Clf: "萝莉",
          url:
            "luoli",
        },
        {
          Clf: "后宫",
          url:
            "hougong",
        },
        {
          Clf: "御姐",
          url:
            "yujie",
        },
        {
          Clf: "霸总",
          url:
            "bazong",
        },
        {
          Clf: "玄幻",
          url:
            "xuanhuan",
        },
        {
          Clf: "古风",
          url:
            "gufeng",
        },
        {
          Clf: "历史",
          url:
            "lishi",
        },
        {
          Clf: "漫改",
          url:
            "mangai",
        },
        {
          Clf: "游戏",
          url:
            "youxi",
        },
        {
          Clf: "穿越",
          url:
            "chuanyue",
        },
        {
          Clf: "恐怖",
          url:
            "kongbu",
        },
        {
          Clf: "真人",
          url:
            "zhenren",
        },
        {
          Clf: "科幻",
          url:
            "kehuan",
        },
        {
          Clf: "都市",
          url:
            "dushi",
        },
        {
          Clf: "武侠",
          url:
            "wuxia",
        },
        {
          Clf: "修真",
          url:
            "xiuzhen",
        },
        {
          Clf: "生活",
          url:
            "shenghuo",
        },
        {
          Clf: "动作",
          url:
            "dongzuo",
        },
      ],
    };
  },
  mounted() {
    this.axios
      .get("http://getcomicinfo-globalapi.yyhao.com/app_api/v5/getsortlist/")
      .then((res) => {
        this.list = res.data.data;
        this.pageN=res.data.page;
      });
      this.$jsonp('https://getconfig-globalapi.yyhao.com/app_api/v5/getsortlist/?comic_sort=&page=1&orderby=date&search_key=&productname=mht&platformname=android').then(res=>{
      // console.log(res);
      this.new=res.data;
      this.searchPage=res.page;
      }).catch(err=>{
        console.log(err);
      });
  },
  methods: {
    // 将url传参给Ify.vue
    route(i){
      // console.log(this.classify[i]);
      let url = this.classify[i]
      this.$router.push('/ify/'+ url.url+'$'+ url.Clf)
    },
    // 人气加载更多
    onLoad() {
      setTimeout(()=>{
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
          this.axios
        .get("http://getcomicinfo-globalapi.yyhao.com/app_api/v5/getsortlist/")
        .then((res) => {
          // console.log(res.data);
          this.list = res.data.data;
          this.pageN=res.data.page;
          // console.log(this.pageN);
        });
          return;
        }
        let count=this.pageN.current_page +=1;
        let url="https://getconfig-globalapi.yyhao.com/app_api/v5/getsortlist/?comic_sort=&page="+count;

        this.$jsonp(url).then(res=>{
          this.list=this.list.concat(res.data);
        // console.log(this.list)
        this.pageN=res.page;
        // 加载状态结束
        this.loading = false;
        if(this.pageN.current_page===this.pageN.total_page){
          this.finished=true;
          }
        }).catch(err=>{console.log(err);});
      },2000)
    },
    // 人气下拉刷新
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    // 更新加载更多
    Load() {
      setTimeout(()=>{
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
          this.$jsonp('https://getconfig-globalapi.yyhao.com/app_api/v5/getsortlist/?comic_sort=&page=1&orderby=date&search_key=&productname=mht&platformname=android').then(res=>{
          // console.log(res);
          this.new=res.data;
          this.searchPage=res.page;
          }).catch(err=>{
            console.log(err);
          });
          return;
        }
        let count=this.searchPage.current_page +=1;
        let url='https://getconfig-globalapi.yyhao.com/app_api/v5/getsortlist/?comic_sort=&page='+count+'&orderby=date&search_key=&productname=mht&platformname=android';

        this.$jsonp(url).then(res=>{
          this.new=this.new.concat(res.data);
        // console.log(this.new)
        this.searchPage=res.page;
        // 加载状态结束
        this.loading = false;
        if(this.searchPage.current_page===this.searchPage.total_page){
          this.finished=true;
          }
        }).catch(err=>{console.log(err);});
      },2000)
    },
    // 更新下拉刷新
    Refresh() {
      // 清空列表数据
      this.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.Load();
    },
    
    // 返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    join() {},
  },

};
</script>

<style>
.div {
  padding: 0 1vw;
}
.clsify {
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  border-bottom: 1px solid lightgray;
}
.clsItem {
  list-style: none;
  margin: 2vw;
  font-size: 4vw;
}
/* 漫画布局 */
.hot {
  padding-left: 0.4em;
  padding-right: 0.1em;
  flex-wrap: wrap;
}
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
.cartoon-text {
  text-align: left;
  padding: 0;
  margin: 1px 0;
  color: #c5c5c5;
  overflow: hidden;
  /* 字体不换行 */
  white-space: nowrap;
  /* 字体超出省略 */
  text-overflow: ellipsis;
  font-size: xx-small;
}
</style>
