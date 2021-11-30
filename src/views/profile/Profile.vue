<template>
  <div class="profile">
    <NavBar class="navbar">
      <div slot="center" class="title">个人中心</div>
    </NavBar>
    <ProfileLogin />
    <ProfileResource />
    <ProfileVip />
    <ProfileOther />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import ProfileLogin from "./profilechild/ProfileLogin.vue";
import ProfileResource from "./profilechild/ProfileResource.vue";
import ProfileVip from "./profilechild/ProfileVip.vue";
import ProfileOther from "./profilechild/ProfileOther.vue";

export default {
  components: {
    NavBar,
    ProfileLogin,
    ProfileResource,
    ProfileVip,
    ProfileOther,
  },
};
</script>

<style scoped lang="less">
.profile {
  .navbar {
    background-color: @color-tint;
    .title {
      font-size: 16px;
      color: #fff;
    }
  }
}
</style>