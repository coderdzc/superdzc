<template>
  <div class="tab-control">
    <div
      class="control-item"
      v-for="(item, index) in title"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click="changeIndex(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index;
      this.$emit("emitIndex", index);
    },
  },
};
</script>

<style scoped lang="less">
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  .control-item {
    flex: 1;
  }
  .active {
    color: @color-hl-text;
    span {
      padding: 5px;
      border-bottom: 3px solid @color-hl-text;
    }
  }
}
</style>