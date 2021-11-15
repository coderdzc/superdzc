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
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1);
}
</style>