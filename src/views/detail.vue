<template>
  <div class="detail">
    <!-- 漫画详情页面 -->
    <!-- 顶部背景图 -->
    <div class="topImage"></div>
    <!-- 漫画名称及类型 -->
    <div class="context">
      <p>
        <span class="title">斗破苍穹</span>
        <span class="form">自制</span>
      </p>
      <p>
        <span class="type"> 热血</span>
      </p>
    </div>
    <!-- 详情 -->
    <div class="bottomplaceholder">
    <!-- 留言、详情、目录 -->
      <van-tabs v-model="active" class="tab" color="#5aa6ff" line-width="15vw" line-height=".5vw">
        <van-tab title-style="color:#5aa6ff;">
          <template #title> <van-icon name="edit" class="icon" size="7vw" color="#5aa6ff" />留言</template>
          <div class="talk">  
            <!-- 热门吐槽 -->
            <div class="talk-top">
            <van-image
            class="img"
             width="8vw"
             height="7vw"
             :src="require('../assets/iconcolor/tucao.svg')"
            ></van-image>
            <span>热门吐槽</span>
            </div>
            <!-- 吐槽列表 -->
            <div class="talk-list">
              <div class="block">
                <div class="list-header">
                  <van-image
                  round
                  width="11vw"
                  height="11vw"
                  fit="cover"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                  ></van-image>
                  <span class="uname">潮流少年</span>
                  <span>2018.08.27</span>
                </div><!-- list-header -->
                <span class="talk-icon">
                    <van-image
                     width="9vw"
                     height="9vw"
                     :src="require('../assets/iconcolor/god-talk.svg')"
                    ></van-image>
                </span>
              </div>
              <div class="talk-text">男主太搞笑同意的点赞</div>
              <!-- 点赞评论 -->
              <p class="talk-click">
                <!-- 点赞 -->
                <van-image
                class="good"
                width="7vw"
                height="7vw"
                :src="require('../assets/iconcolor/dis-good.svg')"
                ></van-image>
                <span>16374</span>
                <!-- 评论 -->
                <van-image
                class="comment"
                width="5vw"
                height="5vw"
                :src="require('../assets/iconcolor/comment.svg')"
                ></van-image>
                <span>655</span>
              </p>
            </div><!-- talk-list -->
            <router-link to="">
              <div class="more">查看全部吐槽(51651)&nbsp;&nbsp;&nbsp;&nbsp;&gt;</div>
            </router-link>
          </div>
          <!-- talk -->
        </van-tab>
        <!-- 留言 end -->
        <van-tab title-style="color:#5aa6ff;" style="padding:0 2vw">
          <template #title> <van-icon name="more-o" class="icon" size="7vw" color="#5aa6ff" />详情</template>
          <!-- 活动提示-暂时不写等基本功能能或者活动模块上线时编写 -->
          <p></p>
          <!-- 漫画简介 -->
          <span class="detail-text">
            斗破苍穹漫画是根据著名作家天蚕土豆作品斗破苍穹改编的漫画，这是一个属于斗气的世界，没有花俏艳丽的魔法，有的，仅仅是繁衍到巅峰的斗气！在斗气大陆上，真正的强者都是用实力说话的！
          </span>
          <!-- 人气排行榜   -->
          <div class="rank">
            <!-- 总人气 -->
            <span>
              <span>总人气</span>
              <span>55.0亿&nbsp;&nbsp;55位</span>
            </span>
            <!-- 周人气 -->
            <span>
              <span>周人气</span>
              <span>1053万&nbsp;&nbsp;89位</span>
              <span>
                <van-image
                :src="require('../assets/iconcolor/up.svg')"
                ></van-image>
                2
              </span>
            </span>
          </div><!-- 排行结束 -->
          <!-- 作者&角色 -->
          <div>
            <h3>作者&角色</h3>
            <van-image
             fit="cover"
             round
             width="20vw"
             height="20vw"
             src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
          </div>
          <!-- 作者&角色 end -->
          <!-- 供养记录 -->
          <div class="indet">
            <span>供养记录</span>
            &gt;
          </div>
          <!-- 粉丝打call -->
          <h3>粉丝打call</h3>
          <div class="call">
            <span class="callborder">
              <van-image
               width="6vw" nn
               height="6vw"
               :src="require('../assets/iconcolor/check.svg')"
              ></van-image>
              <span>给作者加油打call~</span>
            </span>
            <span>作者大大需要您的支持<br>●ヽ(ﾟ∀ﾟ)ﾉ● </span>
          </div>
          <div class="callnum">
            <span>
              <span>46.3亿</span>
              阅读
            </span>
            <span>
              <span>2958万</span>
              日活
            </span>
            <span>
              <span>144万</span>
              收藏
            </span>
            <span>
              <span>12.4万</span>
              分享
            </span>
            <span>
              <span>19.9万</span>
              留言
            </span>
            <span>
              <span>101万</span>
              赞赏
            </span>
            <span>
              <span>1482万</span>
              礼物
            </span>
            <span>
              <span>17.3万</span>
              月票
            </span>
            <span>
              <span>81.7万</span>
              萝卜 
            </span>
            <span>
              <span>4.7</span>
              评分
            </span>
          </div>


        </van-tab>
        <!-- 详情 end -->
        <van-tab title-style="color:#5aa6ff;">
          <template #title> <van-icon name="points" class="icon" size="7vw" color="#5aa6ff" />目录</template>
          <div class="readHeader">
            <span>最新话</span>
            <span>2020.06.16</span>
            <span>第188话</span>
            <span>孤独的宗主</span>
          </div>
        </van-tab>
        <!-- 目录 end -->
      </van-tabs>
      <!-- 底部收藏+阅读 -->
      <van-row type="flex" class="bottomBar">
        <van-col span="11" class="heart">
          <van-image
           width="9vw"
           height="9vw"
           :src="require('../assets/iconcolor/dis-enshrine.svg')"
          ></van-image>
          <span class="heart-text">收藏</span>
        </van-col>
        <van-col span="13" class="read">
          <span>开始阅读</span>
        </van-col>
      </van-row>
    </div>
    <!-- context end -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      active:1,
    }
  },
}
</script>

<style scoped>
/* 顶部背景图 */
  .topImage{
    width: 100%;
    height: 35vh;
    background: url(../assets/imgs/cover/BreakTheSky.jpg) no-repeat;
    background-size: 100%;
    border-bottom-right-radius: 42%;
    border-bottom-left-radius: 42%;
  }
  /* 漫画名称定位 */
  .context{
    position: absolute;
    top: 17vh;
    left: 6vw;
  }
  /* 漫画名称字体样式 */
  .title{
    font-size: 5vw;
    font-weight: 500;
    color: rgb(243, 243, 243);
    text-shadow:5px 2px 6px #c6c6c6;
  }
  .form{
    margin-left: 5vw;
    border-radius: 1vw;
    background-color: #f00;
    color: rgb(243, 243, 243);
    padding: 1px 3px;
  }
  .type{
    border-radius: 10vw;
    background-color: rgba(90, 88, 88, 0.678);
    color: rgb(243, 243, 243);
    padding: 2px 8px; 
  }
  /* 底部开始阅读占位 */
  .bottomplaceholder{
    margin-bottom: 9vh;
  }
  /* 标签Y轴排列 */
  .icon{
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  /* 留言内容页面上边距 */
  .tab{
    margin-top: 5vw;
  }
  /* 留言页面内边距 */
  .talk{
    padding: 2vw;
  }
  /* 热门吐槽标题下外边距 */
  .talk-top{
    margin-bottom: 3vw;
  }
  /* 热门吐槽字体样式 */
  .talk-top span{
    font-size: 4.5vw;
    padding: 1vw;
    color: #5aa6ff;
  }
  /* 用户头像定位及样式 */
  .img>>>.van-image__img{
    margin: 2vw 0 0 0;
  }
  /* 用户吐槽列表样式 */
  .talk-list{
    padding: 3vw 0 0 2vw;
    border-bottom: 1px solid #ccc;
  }
  /* 用户信息条 */
  .block{
    position: relative;
  }
  /* 用户名样式 */
  .uname{
    position: absolute;
    top: 0;
    left: 14vw;
    color: #616161e3;
    font-size: 4.5vw;
  }
  /* 吐槽时间定位 */
  .uname+span{
    position: absolute;
    top: 7vw;
    left: 14vw;
    color: #c6c6c6;
    font-size: 3vw;
  }
  /* 神评图标定位 */
  .talk-icon{
    position: absolute;
    top: 1vw;
    left: 83vw;
  }
  /* 吐槽内容定位及样式 */
  .talk-text{
    margin-left: 15vw;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-right: 5vw;
  }
  /* 点赞+评论定位 */
  .talk-click{
    display: flex;
    justify-content: flex-end;
    margin: 3vw 13vw 2vw 0;
    color: #acacac;
  }
  /* 点赞样式 */
  .good{
    margin-top: -2vw;
  }
  /* 点赞数量 */
  .good+span{
    margin-right: 2vw;
  }
  /* 评论定位 */
  .comment{
    padding-right: 1vw;
  }
  /* a标签字体颜色 */
  a{
    color: #9b9898;
  }
  /* 查看全部吐槽定位 */
  .more{
    text-align: center;
    margin: 2vw 0 1vw 0;
  }
  /* 底部收藏+开始阅读 */
  .bottomBar{
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 8vh;
    line-height: 8vh;
    box-shadow: 0 0 3px 1px #d1d1d1;
    z-index: 10;
  }
  /* 收藏的居中+字体大小+颜色样式 */
  .heart{
    text-align: center;
    color: #acacac;
    font-size: 5vw;
    background: white;
  }
  /* 收藏图片定位 */
  .heart>>>.van-image__img{
    margin: 2.5vw 0 0 0;
  }
  /* 开始阅读的样式 */
  .read{
    text-align: center;
    background-color: #5aa6ff;
    color: #fff;
    font-size: 5vw;
  }
  /* 漫画简介多行文本溢出显示... */
  .detail-text{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 3.5vw;
    margin-top: 2vw;
  }
  /* 排行布局 */
  .rank{
    font-size: 4vw;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 3vw;
    margin-top: 5vw;
  }
  /* 排行变量间距 */
  .rank>span span{
    padding-right:1vw;
  }
  /* 供养记录定位样式 */
  .indet{
    display: flex;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: 5em;
    padding: 1vw 2vw; 
    padding-right: 9vw;  
    color: #ccc;
  }
  /* 给作者加油打call样式 */
  .call{
    display: flex;
    justify-content: space-around;
    margin-bottom: 3vw;
    text-align: center;
    font-size: 4vw;
  }
  .callborder{
    width: 45%;
    border: 2px solid #1296db;
    border-radius: 5vw;
    padding: auto 1vw;
  }
  /* 给作者打call图片定位 */
  .callborder>>>.van-image__img{
    margin-top: 2vw;
  }
  /* 漫画评分信息 */
  .callnum{
    border: 1px solid #ccc;
    border-radius: 9px;
    padding: 2vw auto;
    margin: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .callnum>span{
    width: 15%;
    border-bottom: 1px dashed #ccc;
    text-align: center;
    color: #ccc;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    padding: 2vw;
  }
  .callnum>span:not(:first-child){
    border-left: 1px dashed #ccc;
  }
  .callnum>span:nth-child(6){
    border-left: 0;
  }
  .callnum span{
    font-size: 3vw;
  }
  .readHeader{
    background-color: #e9e8e8;
    display: flex;
    justify-content: space-around;
    padding: 1vw;
    text-align: center;
    height: 9vw;
    line-height: 9vw;
  }


</style>