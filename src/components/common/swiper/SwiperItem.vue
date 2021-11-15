<template>
  <div class="swiper-item">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.swiper-item {
  background-color: #ccc;
  width: 100%;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>