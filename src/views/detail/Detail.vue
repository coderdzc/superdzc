<template>
  <div class="detail">
    <DetailNavbar class="detailnav"></DetailNavbar>
    <Scroll
      :pullUpLoad="true"
      ref="scroll"
      class="scroll"
      :probeType="3"
      @positionupdata="positionupdata"
    >
      <DetailSwiper :topImages="topImages" @imgLoad="imgLoad"></DetailSwiper>
      <DetailInfo :info="itemInfo"></DetailInfo>
      <div class="border"></div>
      <DetailShopInfo :shopInfo="shopInfo"></DetailShopInfo>
      <div class="border"></div>
      <DetailItemInfo
        :detailInfo="detailInfo"
        @itemLoad="itemLoad"
        class="detailItemInfo"
        ref="itemInfo"
      ></DetailItemInfo>
      <DetailParams :params="params"></DetailParams>
      <DetailComment :commentInfo="commentInfo"></DetailComment>
      <div class="border"></div>
      <GoodsList :goodslist="recommend" class="goodslist"></GoodsList>
    </Scroll>
    <Gotop :gotopshow="gotopshow" class="gotop" @btnclick="btnclick"></Gotop>
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
      gotopshow: false,
      offsetTop: 0,
      commentInfo: {},
      recommend: [],
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
    GoodsList,
    Scroll,
    Gotop,
  },
  created() {
    this.GetDetailData();
    this.GetDetailRecommend();
  },
  mounted() {
    this.loadEnd = throttle(this.$refs.scroll.refresh, 500);
  },
  methods: {
    //事件监听函数
    itemLoad() {
      this.loadEnd();
    },
    btnclick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    positionupdata(position) {
      this.gotopshow = position <= -this.offsetTop ? true : false;
    },
    imgLoad() {
      this.offsetTop = this.$refs.itemInfo.$el.offsetTop;
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
          res.result.shopInfo.services
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
  padding-top: 44px;
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
    top: 44px;
    bottom: 0px;
    left: 0;
    right: 0;
    z-index: 99;
    background-color: #fff;
    .border {
      width: 100%;
      height: 5px;
      background-color: #eee;
    }
    .detailItemInfo {
      border-bottom: 5px solid #eee;
    }
    .goodslist {
      margin: 15px 0;
    }
  }
  .gotop {
    z-index: 99999;
  }
}
</style>