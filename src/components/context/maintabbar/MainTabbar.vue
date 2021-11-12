<template>
  <div class="maintabbar">
    <Tabbar>
      <TabbarItem path="/home">
        <div slot="icon"></div>
        <div slot="text">首页</div>
      </TabbarItem>
      <TabbarItem path="/sort">
        <div slot="icon"></div>
        <div slot="text">分类</div>
      </TabbarItem>
      <TabbarItem path="/cart">
        <div slot="icon"></div>
        <div slot="text">购物车</div>
      </TabbarItem>
      <TabbarItem path="/profile">
        <div slot="icon"></div>
        <div slot="text">我的</div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from "components/common/tabbar/Tabbar";
import TabbarItem from "components/common/tabbar/TabbarItem";
export default {
  components: {
    Tabbar,
    TabbarItem,
  },
};
</script>

<style lang="less">
.icon {
  font-family: "icomoon";
}
</style>