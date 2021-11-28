<template>
  <div class="toast" v-show="isShow">
    {{ msg }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "默认消息",
      isShow: false,
    };
  },
  methods: {
    show(msg, duration = 1500) {
      this.isShow = true;
      this.msg = msg;
      setTimeout(() => {
        this.isShow = false;
        this.msg = "";
      }, duration);
    },
  },
};
</script>

<style scoped lang="less">
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  padding: 8px 10px;
  border-radius: 10px;
  text-align: center;
  z-index: 9999;
  color: #fff;
}
</style>