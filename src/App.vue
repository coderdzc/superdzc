<template>
  <div id="app">
    <router-view></router-view>
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
