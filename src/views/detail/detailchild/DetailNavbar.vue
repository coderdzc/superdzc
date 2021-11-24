<template>
  <NavBar>
    <div class="left" slot="left" @click="goback"></div>
    <div class="center" slot="center">
      <div
        class="title"
        v-for="(item, index) in title"
        :key="index"
        :class="{ active: index == currentIndex }"
        @click="changeIndex(index)"
      >
        {{ item }}
      </div>
    </div>
  </NavBar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    goback() {
      this.$router.back();
    },
    changeIndex(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped lang="less">
.left {
  font-family: "icomoon";
  font-size: 30px;
  margin-left: 10px;
}
.center {
  display: flex;
  .title {
    flex: 1;
  }
}
.active {
  color: @color-hl-text;
}
</style>