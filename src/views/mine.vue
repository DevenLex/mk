<template>
  <div>
    <!-- 顶部留白 -->
    <van-image
     :src="require('../assets/page_icon/banner_right.png')"
     width="100%"
     class="topColor"
    ></van-image>
    <!-- 头像信息 -->
    <div class="mine" style="width:100%;">
      <!-- 头像 -->
      <van-image
        round
        fit="cover"
        width="6rem"
        height="6rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        class="headPhoto"
      />
      <router-link to="/login">
        <p class="idDtail">
          <font>点我登录</font>
          <span class="LV">lv16</span>
        </p>
      </router-link>
    </div>
    <!-- 商店充值 -->
    <div class="titleBg">
        <span class="store">商店</span>
        <span class="actiy">首充有礼，充的多送得多</span>
    </div>
    <!-- 任务栏 -->
    <ul class="tack">
      <!-- 任务 -->
      <li>
        <router-link to="">
          <van-image :src="require('../assets/iconcolor/tack.svg')"></van-image>
          <p>任务</p>
        </router-link>
      </li>
      <!-- 背包 -->
      <li>
        <router-link to="">
          <van-image :src="require('../assets/iconcolor/bag.svg')"></van-image>
          <p>背包</p>
        </router-link>
      </li>
      <!-- 消息 -->
      <li>
        <router-link to="">
          <van-image :src="require('../assets/iconcolor/msg.svg')"></van-image>
          <p>消息</p>
        </router-link>
      </li>
      <!-- 设置 -->
      <li>
        <router-link to="">
          <van-image :src="require('../assets/iconcolor/set.svg')"></van-image>
          <p>设置</p>
        </router-link>
      </li>
      <!-- 兑换码 -->
      <li>
        <router-link to="">
          <van-image :src="require('../assets/iconcolor/coin.svg')"></van-image>
          <p>兑换码</p>
        </router-link>
      </li>
      <!-- 积分商城 -->
      <li>
        <router-link to="">
          <van-image :src="require('../assets/iconcolor/integral(2).svg')"></van-image>
          <p>积分商城</p>
        </router-link>
      </li>
      <!-- 精彩活动 -->
      <li>
        <router-link to="">
          <van-image :src="require('../assets/iconcolor/active.svg')"></van-image>
          <p>精彩活动</p>
        </router-link>
      </li>
      <!-- 漫画周边 -->
      <li>
        <router-link to="">
          <van-image :src="require('../assets/iconcolor/Kits2.svg')"></van-image>
          <p>漫画周边</p>
        </router-link>
      </li>
      <!-- 扫一扫 -->
      <li>
        <router-link to="">
          <van-image :src="require('../assets/iconcolor/scan.svg')"></van-image>
          <p>扫一扫</p>
        </router-link>
      </li>
    </ul>
    <!-- 收藏选项栏 -->
      <van-tabs
       v-model="active"
       class="toos"
       line-width="5vw"
       color="#5aa6ff"
       title-active-color="#5aa6ff"
       title-inactive-color="#c5c5c5"
       >
        <van-tab
         title="收藏"
         class="favorite" 
        >
          <div class="star">
            <!-- 我的订阅 -->
            <p>
              <span class="bluetitle"></span>
              <span class="titleSize">我的订阅</span>
              <span class="Count">37&gt;</span> 
            </p>
            <!-- 订阅列表 -->
            <div class="cartoon">
              <div class="item">
                <van-image
                :src="require('../assets/imgs/cover/BreakTheSky.jpg')"
                width="100%"
                height="auto"
                fit="cover"
                radius="2px"
                ></van-image>
                <p class="name">斗破苍穹</p>
              </div>
              <div class="item">
                <van-image
                :src="require('../assets/imgs/cover/BreakTheSky.jpg')"
                width="100%"
                height="auto"
                fit="cover"
                radius="2px"
                ></van-image>
                <p class="name">斗破苍穹</p>
              </div>
              <div class="item">
                <van-image
                :src="require('../assets/imgs/cover/BreakTheSky.jpg')"
                width="100%"
                height="auto"
                fit="cover"
                radius="2px"
                ></van-image>
                <p class="name">斗破苍穹</p>
              </div>
              <div class="item">
                <van-image
                :src="require('../assets/imgs/cover/BreakTheSky.jpg')"
                width="100%"
                height="auto"
                fit="cover"
                radius="2px"
                ></van-image>
                <p class="name">斗破苍穹</p>
              </div>
            </div>
            <!-- 订阅列表 end -->
            
          </div>
          <div class="creatcartoon">
            点我点我~创建书单哦
          </div>
        </van-tab>
        <van-tab title="历史" class="favorite">
          <div class="item">
            <van-image
            :src="require('../assets/imgs/cover/BreakTheSky.jpg')"
            width="100%"
            height="auto"
            fit="cover"
            radius="2px"
            ></van-image>
            <p class="name">斗破苍穹</p>
          </div>
        </van-tab>
        <van-tab title="缓存" class="favorite">
          <div class="item">
            <van-image
            :src="require('../assets/imgs/cover/BreakTheSky.jpg')"
            width="100%"
            height="auto"
            fit="cover"
            radius="2px"
            ></van-image>
            <p class="name">斗破苍穹</p>
          </div>
        </van-tab>
        <van-tab title="付费" class="favorite">
          <div class="item">
            <van-image
            :src="require('../assets/imgs/cover/BreakTheSky.jpg')"
            width="100%"
            height="auto"
            fit="cover"
            radius="2px"
            ></van-image>
            <p class="name">斗破苍穹</p>
          </div>
        </van-tab>
      </van-tabs>

    <!-- 底部标签栏 -->
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
}
</script>

<style scoped>
/* 顶部留白定位 */
  .topColor{
    width: 100%;
    z-index: -1;
  }
  /* 页面信息div定位 */
  .mine{
    margin-top: -1.5em;
    border-top-right-radius: 1em;
    border-top-left-radius: 1em;
    background-color: #fff;
  }
  /* 头像定位样式 */
  .mine .headPhoto{
    margin:-2em 0 0 2em;
    border: 2px solid #ff7f4d;
    margin-bottom: 2vh;
  }
  /* 用户名定位 */
  .idDtail{
    margin-top: -21vw;
    margin-left: 39vw;
    font-size: 4vw;
    font-weight: 600;
    margin-bottom: 4em;
  }
  /* 用户等级定位 */
  .idDtail>.LV{
    margin-left: 2vw;
    padding: 1px 2vw;
    background-color: #ff7f4d;
    border-radius: 5em;
  }
  /* 充值入口背景 */
  .titleBg{
    background: url("../assets/page_icon/ia_100000293.png") no-repeat;
    background-size:100% 100%;
    height: 16vh;
    line-height: 16vh;
    padding-left: 9vw;
    padding-right: 7vw;
    display: flex;
    justify-content: space-between;
    color: rgb(243, 243, 243);
  }
  /* 充值入口样式设置 */
  .store{
    font-size: 8vw;
    font-weight: 500;
  }
  /* 充值入口字体样式 */
  .actiy{
    font-size: 5vw;
  }
  /* 任务栏 */
  .tack{
    display: flex;
    flex-wrap: wrap;
    justify-content:start;
    padding: 0 7vw;
    margin-bottom: 5vh;
  }
  /* 任务栏样式 */
  .tack li{
    width: 19vw;
    margin: 0 2vw 1vw 0;
    text-align: center;
  }
  /* 任务栏图标样式 */
  .van-image{
    width: 9vw;
  }
  /* 链接字体颜色 */
  a{
    color:#000;
  }
  /* 任务栏字体样式 */
  .tack p{
    text-align: center;
    font-size: 2vw;
  }
  /* 阅读记录栏 */
  .toos{
    width: 92%;
    margin: 0 auto;
  }
  /* 记录栏边框阴影 */
  .toos >>> .van-tabs__wrap,.van-hairline--top-bottom{
    margin: 0 auto;
    border-radius: .4em;
    box-shadow: 0 0 15px -7px #5aa6ff;
    font-size: 0vw;
  }
  /* 标签与内容距离 */
  .favorite{
    padding-top: 3vh;
  }
  /* 内容界面布局 */
  .cartoon{
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
  }
  /* 漫画样式 */
  .item{
    width: 31%;
    padding: 0 1vw;
  }
  /* 漫画名称样式 */
  .name{
    font-size: 3vw;
    margin-top: 1vh;
  }
  .creatcartoon{
    background-image:linear-gradient(to right,#70ccfa 0,#5da4fe 100%);
    width: 60%;
    margin: 0 auto;
    margin-top: 4vh;
    text-align: center;
    padding: 2vw;
    border-radius: 5px;
    color: rgb(243, 243, 243);
  }
  .star>p{
    display: flex;
    justify-content: start;
    flex-wrap: nowrap;
  }
  .bluetitle{
    width: 1vw;
    height: 2vh;
    background-color: #5aa6ff;
    border-radius: 5px;
    margin: auto 0;
    margin-right: 2vw;
  }
  .Count{
    margin: 0 0 0 60vw;
  }

</style>