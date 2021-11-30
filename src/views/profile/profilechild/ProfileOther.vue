<template>
  <div class="other">
    <div class="myCar">
      <div class="icon"></div>
      <div class="text">我的购物车</div>
    </div>
    <div class="likeApp">
      <div class="icon"></div>
      <div class="text">点赞购物APP</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.other {
  border-top: 10px solid #eee;
  height: 115px;
  display: flex;
  flex-direction: column;

  div {
    flex: 1;
    display: flex;
    .icon {
      flex: 0.2;
      position: relative;
      left: 8%;
      line-height: 52px;
    }
    .text {
      line-height: 50px;
      font-size: 16px;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>