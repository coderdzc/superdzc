<template>
  <div class="vip">
    <div class="myMsg">
      <div class="icon"></div>
      <div class="text">我的消息</div>
    </div>
    <div class="integralShop">
      <div class="icon"></div>
      <div class="text">积分商城</div>
    </div>
    <div class="VipCard">
      <div class="icon"></div>
      <div class="text last">会员卡</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.vip {
  border-top: 10px solid #eee;
  height: 150px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  div {
    flex: 1;
    display: flex;
    .icon {
      flex: 0.2;
      position: relative;
      left: 8%;
      line-height: 50px;
    }
    .text {
      line-height: 50px;
      font-size: 16px;
      border-bottom: 1px solid #ccc;
    }
    .last {
      border-bottom: none;
    }
  }
}
</style>