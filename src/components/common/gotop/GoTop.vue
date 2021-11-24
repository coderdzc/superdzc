<template>
  <div class="gotop" @click="btnclick" v-show="gotopshow">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  methods: {
    btnclick() {
      this.$emit("btnclick");
    },
  },
  props: {
    gotopshow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="less">
.gotop {
  width: 43px;
  height: 43px;
  position: fixed;
  right: 10px;
  bottom: 55px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>

