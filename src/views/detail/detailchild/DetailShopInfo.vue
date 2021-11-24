<template>
  <div class="shopInfo">
    <div class="logoName">
      <span class="logo"><img :src="shopInfo.logo" alt="" /></span>
      <span class="name">{{ shopInfo.name }}</span>
    </div>
    <div class="shopInfoBox">
      <div class="leftBox">
        <div class="sells">
          <div class="top">{{ shopInfo.sells }}</div>
          <div>总销量</div>
        </div>
        <div class="goods">
          <div class="top">{{ shopInfo.goods }}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="rightBox">
        <table class="scoreTable" cellspacing="8">
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td class="Sname">{{ item.name }}</td>
            <td class="score" :class="{ activeC: item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better">
              <span :class="{ activeBC: item.isBetter }">{{
                item.isBetter ? "高" : "低"
              }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="enterShop">进店逛逛</div>
  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped lang="less">
.shopInfo {
  padding: 20px 20px;
  .logoName {
    display: flex;
    height: 50px;
    margin-bottom: 15px;
    .logo {
      width: 50px;
      height: 50px;
      margin-right: 5px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .name {
      line-height: 50px;
    }
  }
  .shopInfoBox {
    color: #000;
    display: flex;
    .leftBox {
      position: relative;
      flex: 0.5;
      display: flex;
      padding-right: 25px;
      div {
        flex: 0.5;
        text-align: center;
        .top {
          margin-top: 20px;
          margin-bottom: 5px;
        }
      }
    }
    .leftBox::after {
      position: absolute;
      top: 20px;
      right: 0;
      content: "";
      width: 1px;
      height: 40px;
      background-color: #eee;
    }
    .rightBox {
      flex: 0.5;
      padding-left: 25px;
      .scoreTable {
        text-align: center;
        .score {
          color: #5ea732;
        }
        .better {
          color: #fff;
          background-color: #5ea732;
        }
        .activeC {
          color: #f13e3a !important;
        }
        .activeBC {
          background-color: #f13e3a !important;
        }
      }
    }
  }
  .enterShop {
    margin: 10px auto;
    height: 30px;
    width: 120px;
    background-color: #eee;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
}
</style>