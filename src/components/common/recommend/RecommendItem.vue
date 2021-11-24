<template>
  <div class="recommenditem">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.recommenditem {
  flex: 1;
  text-align: center;
  a {
    width: 100%;
    height: 100%;
    img {
      width: 85%;
    }
    div {
      margin-top: 3px;
    }
  }
}
</style>