<template>
  <BottomBar class="bottombar">
    <BottomBarItem>
      <div slot="icon" class="icon serve"></div>
      <div slot="text" class="text">客服</div>
    </BottomBarItem>
    <BottomBarItem>
      <div slot="icon" class="icon shop"></div>
      <div slot="text" class="text">店铺</div>
    </BottomBarItem>
    <BottomBarItem>
      <div slot="icon" class="icon like"></div>
      <div slot="text" class="text">收藏</div>
    </BottomBarItem>
    <BottomBarItem class="join"
      ><div slot="text" @click="joinClick">加入购物车</div></BottomBarItem
    >
    <BottomBarItem class="buy"><div slot="text">购买</div></BottomBarItem>
  </BottomBar>
</template>

<script>
import BottomBar from "components/common/bottombar/BottomBar.vue";
import BottomBarItem from "components/common/bottombar/BottomBarItem.vue";
export default {
  components: {
    BottomBar,
    BottomBarItem,
  },
  methods: {
    joinClick() {
      this.$emit("joinClick");
    },
  },
};
</script>

<style scoped lang="less">
.bottombar {
  background-color: #fff;
  .join,
  .buy {
    flex: 1.5;
  }
  .join {
    background-color: #ffe818;
    color: #000;
    line-height: 49px;
  }
  .buy {
    background-color: #ff6894;
    color: #fff;
    line-height: 49px;
  }
  .serve {
    color: #ff6894;
  }
  .icon {
    margin-top: 6px;
  }
  .text {
    margin-top: 2px;
    font-size: 13px;
  }
}
</style>