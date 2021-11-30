<template>
  <div class="resource">
    <div class="money">
      <div class="sumnum">
        <span class="num">0.00 </span><span class="theone"> 元</span>
      </div>
      <div class="text">我的余额</div>
    </div>
    <div class="discount">
      <div class="num">
        <span class="num">0 </span><span class="theone"> 个</span>
      </div>
      <div class="text">我的优惠</div>
    </div>
    <div class="integral">
      <div class="num">
        <span class="num">0 </span><span class="theone"> 分</span>
      </div>
      <div class="text">我的积分</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.resource {
  display: flex;
  height: 90px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}
.resource > div {
  flex: 1;
  text-align: center;
  padding-top: 25px;
  .num {
    font-size: 25px;
    color: #ff5f3e;
    font-weight: 700;
  }
  .theone {
    font-size: 14px;
    color: #666;
  }
  .text {
    margin-top: 5px;
  }
}
.resource > div:nth-child(-n + 2) {
  border-right: 1px solid #eee;
}
</style>