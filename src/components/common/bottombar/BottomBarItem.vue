<template>
  <div class="bottombaritem">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.bottombaritem {
  flex: 1;
  text-align: center;
}
</style>