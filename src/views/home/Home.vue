<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center" class="center">超级畅购</div>
    </NavBar>
    <TabControl
      :title="['流行', '新款', '精选']"
      class="tab-control"
      @emitIndex="getType"
      ref="TabControl2"
      v-show="isfixed"
    >
    </TabControl>
    <Scroll
      class="scroll"
      ref="scroll"
      :probeType="3"
      @positionupdata="positionupdata"
      :pullUpLoad="true"
      @pullingUp="pullingUp"
    >
      <HomeSwiper :cbanners="banners" @imageLoad="imageLoad" />
      <HomeRcommend :recommends="recommends" />
      <Homehot />
      <TabControl
        :title="['流行', '新款', '精选']"
        @emitIndex="getType"
        ref="TabControl1"
      >
      </TabControl>
      <GoodsList :goodslist="goods[goodsType].list" />
    </Scroll>
    <GoTop @btnclick="btnclick" :gotopshow="gotopshow"></GoTop>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "views/home/homechild/Homeswiper";
import HomeRcommend from "./homechild/Homerecommend.vue";
import Scroll from "components/common/scroll/Scroll";

import Homehot from "./homechild/Homehot.vue";
import TabControl from "components/context/tabcontrol/Tabcontrol";
import GoodsList from "components/context/goodslist/GoodsList";

import { getHomeData, getHomeGoods } from "network/home";
import { goTopMix } from "common/mixin.js";

export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeRcommend,
    Homehot,
    TabControl,
    GoodsList,
    Scroll,
  },
  mixins: [goTopMix],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      goodsType: "pop",
      tabOffsetTop: 0,
      isfixed: false,
      saveY: 0,
      itemImageLoad: null,
    };
  },
  created() {
    this.getHomeData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    //保存当前位置
    this.saveY = this.$refs.scroll.Scroll.y;
  },
  methods: {
    //事件监听函数
    getType(index) {
      switch (index) {
        case 0: {
          this.goodsType = "pop";
          break;
        }
        case 1: {
          this.goodsType = "new";
          break;
        }
        case 2: {
          this.goodsType = "sell";
          break;
        }
      }
      this.$refs.TabControl1.currentIndex = index;
      this.$refs.TabControl2.currentIndex = index;
    },
    positionupdata() {
      //显示隐藏返回顶部判断
      this.gotopshow = this.$refs.scroll.Scroll.y < -1000 ? true : false;
      //tabcontrol是否吸顶
      this.isfixed = this.$refs.scroll.Scroll.y <= -634 ? true : false;
    },
    pullingUp() {
      this.getHomeGoods(this.goodsType);
      this.$refs.scroll.finishPullUp();
    },
    imageLoad() {
      this.tabOffsetTop = this.$refs.TabControl1.$el.offsetTop;
    },

    //网络请求函数
    getHomeData() {
      getHomeData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
      });
    },
  },
};
</script>

<style scoped lang="less">
#home {
  .tab-control {
    position: relative;
    z-index: 99;
    background-color: #fff;
  }
  .home-nav {
    background-color: @color-tint;
    .center {
      font-size: 16px;
      color: #fff;
    }
  }
  .scroll {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
}
</style>