<template>
  <div class="wrapper" ref="wrapper">
    <div class="context">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  data() {
    return {
      Scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.Scroll = new Bscroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      observeDOM: true,
    });
    this.Scroll.on("scroll", (position) => {
      this.$emit("positionupdata", position.y);
    });
    this.Scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.Scroll && this.Scroll.scrollTo(x, y, time);
      //当scroll创建实例完成之后，有了实例才会执行scrollTo
    },
    refresh() {
      this.Scroll && this.Scroll.refresh();
      //当scroll创建实例完成之后，有了实例才会执行refresh
    },
    finishPullUp() {
      this.Scroll && this.Scroll.finishPullUp();
    },
  },
};
</script>

<style scoped lang="less">
</style>