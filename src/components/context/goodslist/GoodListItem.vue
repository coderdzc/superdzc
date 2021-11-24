<template>
  <div class="goodslist-item" @click="itemclick">
    <a>
      <img :src="showImg" alt="" @load="imageLoad" />
      <div class="goodsinfo">
        <p class="title">{{ goodsmsg.title }}</p>
        <span class="price">{{ "￥" + goodsmsg.price }}</span>
        <span class="like">{{ goodsmsg.cfav }}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        iid: this.goodsmsg.iid,
      },
    };
  },
  computed: {
    showImg() {
      return this.goodsmsg.image || this.goodsmsg.show.img;
    },
  },
  props: {
    goodsmsg: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    },
    itemclick() {
      this.$router.push({
        path: "/detail",
        query: this.info,
      });
    },
  },
};
</script>

<style scoped lang="less">
.goodslist-item {
  width: 48%;
  margin-bottom: 50px;
  position: relative;
  a {
    width: 100%;
    .goodsinfo {
      width: 100%;
      padding: 5px 10px;
      position: absolute;
      bottom: -50px;
      .title {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 3px;
      }
      .price {
        color: @color-tint;
        margin-right: 5%;
      }
      .like {
        font-family: "icomoon";
      }
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }
}
</style>