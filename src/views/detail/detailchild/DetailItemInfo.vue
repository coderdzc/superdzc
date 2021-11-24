<template>
  <div class="detailInfo">
    <div class="desc">{{ detailInfo.desc }}</div>
    <p class="key" v-if="detailInfo.detail">{{ detailInfo.detail[0].key }}</p>
    <div v-if="detailInfo.detail" class="imagebox">
      <img
        :src="item"
        alt=""
        v-for="item in detailInfo.detail[0].list"
        :key="item"
        @load="itemLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    itemLoad() {
      this.$emit("itemLoad");
    },
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped lang="less">
.detailInfo {
  .desc {
    position: relative;
    padding: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 13px;
  }
  .desc::before {
    content: "";
    width: 100px;
    height: 0.5px;
    background-color: #666;
    position: absolute;
    top: 3px;
    left: 15px;
  }
  .desc::after {
    content: "";
    width: 100px;
    height: 0.5px;
    background-color: #666;
    position: absolute;
    bottom: 5px;
    right: 15px;
  }
  .key {
    padding: 10px 15px;
    color: #000;
  }
  .imagebox {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>