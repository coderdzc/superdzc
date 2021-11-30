<template>
  <div class="slidebar">
    <Scroll :pullUpLoad="true" class="scroll">
      <div
        class="showList"
        v-for="(item, index) in slideList"
        :key="index"
        :class="{ active: currentIndex === index }"
        @click="slideClick(index)"
      >
        {{ item.title }}
      </div>
    </Scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
export default {
  components: {
    Scroll,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    slideList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    slideClick(index) {
      this.currentIndex = index;
      this.$emit("slideClick", index);
    },
  },
};
</script>

<style scoped lang="less">
.slidebar {
  flex: 0.3;
  height: 100vh;
  .scroll {
    height: calc(100% - 49px - 44px);
    overflow: hidden;
    background-color: #f6f6f6;
    div {
      height: 50px;
      text-align: center;
      line-height: 50px;
    }
  }
}
.active {
  background-color: #fff;
  border-left: 2px solid @color-hl-text;
  color: @color-hl-text;
  font-weight: 700;
}
</style>