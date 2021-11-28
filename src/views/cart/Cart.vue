<template>
  <div class="cart">
    <NavBar class="navbar">
      <div slot="center" class="name">购物车({{ sumNum }})</div>
    </NavBar>
    <Scroll ref="scroll" class="scroll" :pullUpLoad="true">
      <CartList></CartList>
    </Scroll>
    <CartBottomBar :cartList="cartList"></CartBottomBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import CartList from "./cartchild/CartList.vue";
import CartBottomBar from "./cartchild/CartBottomBar.vue";

import { mapGetters } from "vuex";

import Scroll from "components/common/scroll/Scroll.vue";
export default {
  data() {
    return {
      isAllCheck: false,
    };
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar,
    Scroll,
  },
  computed: {
    ...mapGetters(["sumNum", "cartList"]),
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped lang="less">
.navbar {
  background-color: @color-tint;
  .name {
    font-size: 16px;
    color: #fff;
  }
}
.scroll {
  position: absolute;
  top: 44px;
  bottom: 89px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>