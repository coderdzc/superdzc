<template>
  <div class="checkbox" :class="{ check: ischecked }"></div>
</template>

<script>
export default {
  props: {
    ischecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="less">
.checkbox {
  font-family: "icomoon";
  font-size: 14px;
  margin: auto;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #aaa;
  color: #fff;
}
.check {
  background-color: #ff8097;
  border: 2px solid #ff8097;
}
</style>