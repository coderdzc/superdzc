<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center" class="center">超级畅购</div>
    </NavBar>
    <HomeSwiper :cbanners="banners"></HomeSwiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeData } from "network/home";
import HomeSwiper from "views/home/homechild/Homeswiper";
export default {
  components: {
    NavBar,
    HomeSwiper,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomeData({
      url: "/home/multidata",
    }).then((res) => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
  mounted() {
    document.body.addEventListener(
      "touchmove",
      function (e) {
        e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
      },
      { passive: false }
    ); //passive 参数不能省略，用来兼容ios和android
  },
};
</script>

<style scoped lang="less">
.home-nav {
  background-color: @color-tint;
  .center {
    font-size: 18px;
    color: #fff;
  }
}
</style>