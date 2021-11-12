<template>
  <div class="tabbaritem" @click="clickitem">
    <div class="icon" :style="isActiveColor">
      <slot name="icon"></slot>
    </div>
    <div class="text" :style="isActiveColor">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ative: "",
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    isActiveColor() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  props: {
    path: {
      type: String,
    },
    activeColor: {
      type: String,
      default: "#ff5777",
    },
  },
  methods: {
    clickitem() {
      this.$router.replace(this.path).catch((err) => err);
    },
  },
};
</script>

<style lang="less">
.tabbaritem {
  flex: 1;
  text-align: center;
  padding: 5px;
  font-size: 13px;
}
.icon {
  font-family: "icomoon";
  font-size: 20px;
  margin-bottom: 2px;
}
</style>