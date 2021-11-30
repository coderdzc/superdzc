<template>
  <div class="detail">
    <DetailNavbar
      class="detailnav"
      @navClick="navClick"
      :currentIndex="currentIndex"
    />
    <Scroll
      :pullUpLoad="true"
      ref="scroll"
      class="scroll"
      :probeType="3"
      @positionupdata="positionupdata"
    >
      <DetailSwiper :topImages="topImages" @imgLoad="imgLoad" />
      <DetailInfo :info="itemInfo" />
      <div class="border"></div>
      <DetailShopInfo :shopInfo="shopInfo" />
      <div class="border"></div>
      <DetailItemInfo
        :detailInfo="detailInfo"
        class="detailItemInfo"
        ref="itemInfo"
        @itemLoad="itemLoad"
      />
      <DetailParams :params="params" ref="params" />
      <DetailComment :commentInfo="commentInfo" ref="comment" />
      <div class="border"></div>
      <GoodsList :goodslist="recommend" class="goodslist" ref="recommend" />
    </Scroll>
    <DetailBottomBar @joinClick="joinClick" />
    <Gotop :gotopshow="gotopshow" class="gotop" @btnclick="btnclick" />
  </div>
</template>

<script>
import DetailNavbar from "./detailchild/DetailNavbar.vue";
import DetailSwiper from "./detailchild/DetailSwiper.vue";
import DetailInfo from "./detailchild/DetailInfo.vue";
import DetailShopInfo from "./detailchild/DetailShopInfo.vue";
import DetailItemInfo from "./detailchild/DetailItemInfo.vue";
import DetailParams from "./detailchild/DetailParams.vue";
import DetailComment from "./detailchild/DetailComment.vue";
import Gotop from "components/common/gotop/GoTop.vue";
import GoodsList from "components/context/goodslist/GoodsList.vue";
import DetailBottomBar from "./detailchild/DetailBottomBar.vue";

import {
  GetDetailData,
  GetDetailRecommend,
  goods,
  shop,
  detailInfo,
  params,
} from "network/detail";
import { throttle } from "common/throttle.js";
import Scroll from "components/common/scroll/Scroll.vue";
import { goTopMix } from "common/mixin.js";
export default {
  name: "Detail",
  data() {
    return {
      topImages: [],
      itemInfo: {},
      shopInfo: {},
      detailInfo: {},
      loadEnd: null,
      params: {},
      offsetTop: 0,
      commentInfo: {},
      recommend: [],
      themeTop: [],
      currentIndex: 0,
    };
  },
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailInfo,
    DetailShopInfo,
    DetailItemInfo,
    DetailParams,
    DetailComment,
    DetailBottomBar,
    GoodsList,
    Scroll,
    Gotop,
  },
  mixins: [goTopMix],
  created() {
    this.GetDetailData();
    this.GetDetailRecommend();
  },
  mounted() {
    this.loadEnd = throttle(this.computedTop, 100);
  },
  methods: {
    //事件监听函数
    positionupdata(position) {
      this.gotopshow = position <= -this.offsetTop ? true : false;
      for (let i = 0; i < this.themeTop.length - 1; i++) {
        if (
          -position >= -this.themeTop[i] &&
          -position < -this.themeTop[i + 1]
        ) {
          this.currentIndex = i;
        }
      }
    },
    imgLoad() {
      this.offsetTop = this.$refs.itemInfo.$el.offsetTop;
    },
    navClick(index) {
      this.$refs.scroll.refresh();
      this.$refs.scroll.scrollTo(0, this.themeTop[index]);
    },
    computedTop() {
      this.themeTop = [];
      this.themeTop.push(0);
      this.themeTop.push(-this.$refs.params.$el.offsetTop);
      this.themeTop.push(-this.$refs.comment.$el.offsetTop);
      this.themeTop.push(-this.$refs.recommend.$el.offsetTop);
      this.themeTop.push(-Number.MAX_VALUE);
    },
    itemLoad() {
      this.loadEnd();
    },
    joinClick() {
      const goods = {};
      goods.img = this.topImages[0];
      goods.title = this.itemInfo.title;
      goods.desc = this.detailInfo.desc;
      goods.price = this.itemInfo.price;
      goods.id = this.itemInfo.id;
      this.$store.dispatch("checkGoods", goods).then((res) => {
        this.$toast.show(res);
      });
    },

    //网络请求函数
    GetDetailData() {
      //请求详情数据
      GetDetailData(this.$route.query).then((res) => {
        //获取轮播图数据
        this.topImages = res.result.itemInfo.topImages;
        //获取商品基本数据
        this.itemInfo = new goods(
          res.result.itemInfo,
          res.result.columns,
          res.result.shopInfo.services,
          res.iid
        );
        //获取店铺数据
        this.shopInfo = new shop(res.result.shopInfo);
        //获取商品详细数据和图片
        this.detailInfo = new detailInfo(res.result.detailInfo);
        //获取商品参数
        this.params = new params(
          res.result.itemParams.info.set,
          res.result.itemParams.rule.tables
        );
        //获取评论数据
        if (res.result.rate.list) {
          this.commentInfo = res.result.rate.list[0];
        }
      });
    },
    GetDetailRecommend() {
      GetDetailRecommend().then((res) => {
        this.recommend = res.data.list;
      });
    },
  },
};
</script>

<style scoped lang="less">
.detail {
  .detailnav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 999;
  }
  .scroll {
    position: absolute;
    top: 44px; /* no */
    bottom: 49px; /* no */
    left: 0;
    right: 0;
    z-index: 99;
    background-color: #fff;
    .border {
      width: 100%;
      height: 0.066667rem;
      background-color: #eee;
    }
    .detailItemInfo {
      border-bottom: 0.066667rem solid #eee;
    }
    .goodslist {
      margin: 0.2rem 0;
    }
  }
  .gotop {
    z-index: 99999;
  }
}
</style>