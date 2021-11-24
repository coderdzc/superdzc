<template>
  <div class="comment" v-if="commentInfo">
    <div class="top">
      <span class="title">用户评价</span>
      <span class="more">更多</span>
    </div>
    <div class="user" v-if="commentInfo.user">
      <img :src="commentInfo.user.avatar" alt="" class="headimg" />
      <span class="username">{{ commentInfo.user.uname }}</span>
    </div>
    <div class="content">
      {{ commentInfo.content }}
    </div>
    <div class="elsemsg">
      <span class="date">{{ commentInfo.created | dateFomat }}</span
      ><span class="style">{{ commentInfo.style }}</span>
    </div>
    <div class="goodsimg" v-if="commentInfo.images">
      <img :src="item" alt="" v-for="item in commentInfo.images" :key="item" />
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/dateFomat.js";
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    dateFomat(value) {
      const time = new Date(value * 1000);
      return formatDate(time, "yyyy-MM-dd");
    },
  },
};
</script>

<style scoped lang="less">
.comment {
  padding: 10px;
  .top {
    display: flex;
    height: 50px;
    line-height: 50px;
    border-bottom: 2px solid #eee;
    color: #000;
    margin-bottom: 15px;
    .title {
      flex: 0.5;
      text-align: left;
      font-size: 15px;
    }
    .more {
      flex: 0.5;
      text-align: right;
    }
  }
  .user {
    display: flex;
    vertical-align: middle;
    height: 50px;
    line-height: 40px;
    margin-bottom: 5px;
    .headimg {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
    .username {
      color: #000;
    }
  }
  .content {
    margin-bottom: 10px;
  }
  .elsemsg {
    color: #999;
    margin-bottom: 10px;
    .date {
      margin-right: 10px;
    }
  }
  .goodsimg {
    display: flex;
    width: 100%;
    height: 90px;
    img {
      width: 90px;
      height: 90px;
      margin-right: 5px;
    }
  }
}
</style>