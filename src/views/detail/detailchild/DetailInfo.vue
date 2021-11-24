<template>
  <div class="DetailInfo">
    <div class="title">{{ info.title }}</div>
    <div class="price">
      <span class="nowprice">{{ info.price }}</span>
      <span class="oldPrice">{{ info.oldPrice }}</span>
      <span class="discount" v-if="info.discountDesc">{{
        info.discountDesc
      }}</span>
    </div>
    <div class="columns" v-if="info.columns && info.services">
      <div class="sell">{{ info.columns[0] }}</div>
      <div class="like">{{ info.columns[1] }}</div>
      <div class="import">
        {{ info.services[info.services.length - 1].name }}
      </div>
    </div>
    <div class="exclude" v-if="info.services">
      <div
        class="excludeItem"
        v-for="(item, index) in info.services.length - 1"
        :key="index"
      >
        <img :src="info.services[index].icon" alt="" />
        <span>{{ info.services[index].name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped lang="less">
.DetailInfo {
  padding: 15px 10px 0 10px;
  .title {
    font-size: 18px;
    color: #000;
    font-weight: 400;
    margin-bottom: 15px;
  }
  .price {
    position: relative;
    margin-bottom: 15px;
    .nowprice {
      font-size: 25px;
      color: @color-hl-text;
      margin-right: 5px;
    }
    .oldPrice {
      text-decoration: line-through;
      margin-right: 5px;
    }
    .discount {
      position: absolute;
      top: -5px;
      width: 65px;
      text-align: center;
      border-radius: 10px;
      height: 25px;
      line-height: 25px;
      background-color: @color-hl-text;
      color: #fff;
    }
  }
  .columns {
    display: flex;
    padding-bottom: 10px;
    border-bottom: 3px solid #eee;
    div {
      flex: 1;
    }
    .like {
      text-align: center;
    }
    .import {
      text-align: right;
    }
  }
  .exclude {
    display: flex;
    .excludeItem {
      height: 60px;
      line-height: 60px;
      flex: 1;
      img {
        width: 15px;
        height: 15px;
        vertical-align: middle;
      }
    }
  }
}
</style>