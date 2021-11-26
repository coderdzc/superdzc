<template>
  <div class="bottombar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.bottombar {
  position: fixed;
  height: 49px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 999;
  box-shadow: 0px -2px 1px rgba(100, 100, 100, 0.05);
}
</style>