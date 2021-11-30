<template>
  <div class="categorys">
    <Scroll :pullUpLoad="true" class="scroll">
      <div class="showBox">
        <div class="showlist" v-for="(item, index) in categorys" :key="index">
          <a :href="item.link">
            <div class="image">
              <img :src="item.image" alt="" />
            </div>
            <div class="text">{{ item.title }}</div>
          </a>
        </div>
      </div>
      <Tabcontrol :title="title" @emitIndex="emitIndex"></Tabcontrol>
      <GoodsList :goodslist="sortGoodsList"></GoodsList>
    </Scroll>
  </div>
</template>
<script>
import Scroll from "components/common/scroll/Scroll";
import Tabcontrol from "components/context/tabcontrol/Tabcontrol";
import GoodsList from "components/context/goodslist/GoodsList";

export default {
  data() {
    return {
      title: ["流行", "新款", "精选"],
    };
  },
  components: {
    Scroll,
    Tabcontrol,
    GoodsList,
  },
  props: {
    categorys: {
      type: Array,
      default() {
        return [];
      },
    },
    sortGoodsList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    emitIndex(index) {
      this.$emit("tabClick", index);
      console.log("我接受到了", index);
    },
  },
};
</script>

<style scoped lang="less">
.categorys {
  flex: 1;
  height: 100vh;
  .scroll {
    height: calc(100% - 49px - 44px);
    overflow: hidden;
    background-color: #fff;
    .showBox {
      display: flex;
      flex-wrap: wrap;
      padding: 20px 0 20px 20px;
      .showlist {
        flex: 1;
        margin-right: 20px;
        text-align: center;
        margin-bottom: 20px;
        a {
          .image {
            img {
              width: 60px;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>