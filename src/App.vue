<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <MainTabbar></MainTabbar>
  </div>
</template>

<script>
import MainTabbar from "components/context/maintabbar/MainTabbar";
export default {
  components: {
    MainTabbar,
  },
  name: "App",
};
</script>

<style lang="less">
@import "assets/css/base.css";
@import "assets/fonts/style.css";
</style>
