<template>
  <div class="profileLogin">
    <div class="head"><img src="~assets/img/profile/maomao.jpg" alt="" /></div>
    <div class="login">
      <div class="choose">登录/注册</div>
      <div class="phone">暂未绑定手机号</div>
    </div>
    <div class="enter"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.profileLogin {
  display: flex;
  height: 90px;
  background-color: @color-tint;
  color: #fff;
  .head {
    flex: 0.4;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .login {
    flex: 1;
    .choose {
      margin-top: 20px;
      font-size: 16px;
      margin-bottom: 10px;
    }
    .phone {
      font-family: "icomoon";
    }
  }
  .enter {
    flex: 0.2;
    font-family: "icomoon";
    text-align: center;
    line-height: 90px;
    font-size: 30px;
  }
}
</style>