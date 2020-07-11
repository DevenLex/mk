<template>
  <div class="footer">
    <van-tabbar
     v-model="active"
     class="bootomBar"
     active-color="#ff7f4d"
     fixed 
     placeholder
     route
     >
      <van-tabbar-item to="/">
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? icon.act : icon.inat" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/update">
        <span>更新</span>
        <template #icon="props">
          <img :src="props.active ? icon.act1 : icon.inat1" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/me">
        <span >我的</span>
        <template #icon="props">
          <img :src="props.active ? icon.act2 : icon.inat2" />
        </template>
      </van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
export default {
  data(){
    return{
      active:0,
      icon: {
        act:require("../assets/iconcolor/act_home.svg"),
        inat:require("../assets/iconcolor/dis_home.svg"),
        act1:require("../assets/iconcolor/act_box.svg"),
        inat1:require("../assets/iconcolor/dis_box.svg"),
        act2:require("../assets/iconcolor/act_me.svg"),
        inat2:require("../assets/iconcolor/dis_me.svg"),
      },
    }
  },
}
</script>

<style>
  .footer .bootomBar img{
    display: block; 
    height: 1.7em;
  }
  .bootomBar{
    margin-top: 3vh;
  }

</style>