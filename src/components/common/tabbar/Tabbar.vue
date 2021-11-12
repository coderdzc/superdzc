<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f6f6f6;
  height: 49px;
  display: flex;
}
</style>