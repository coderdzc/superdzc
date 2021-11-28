<template>
  <div class="bottombar">
    <div class="allCheck">
      <CheckBox
        class="checkbox"
        :ischecked="isAllCheck"
        @click.native="allClick"
      />
      <div class="text">全选</div>
    </div>
    <div class="sumPrice">合计:￥{{ sumPrice }}</div>
    <div class="submit">去结算({{ checkedNum }})</div>
  </div>
</template>

<script>
import CheckBox from "components/context/checkbox/CheckBox.vue";
export default {
  components: {
    CheckBox,
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    sumPrice() {
      let sumPrice = 0;
      if (this.cartList) {
        for (const item of this.cartList) {
          if (item.checked) {
            sumPrice += parseFloat(item.price.substr(1) * item.num);
          }
        }
      }
      return sumPrice.toFixed(2);
    },
    checkedNum() {
      let checkedNum = 0;
      if (this.cartList) {
        for (const item of this.cartList) {
          if (item.checked) {
            checkedNum += item.num;
          }
        }
      }
      return checkedNum;
    },
    isAllCheck() {
      if (this.cartList.length > 0) {
        return !this.cartList.find((item) => !item.checked);
      } else {
        return false;
      }
    },
  },
  methods: {
    allClick() {
      if (this.isAllCheck) {
        this.cartList.forEach((item) => (item.checked = false));
      } else {
        this.cartList.forEach((item) => (item.checked = true));
      }
    },
  },
};
</script>

<style scoped lang="less">
.bottombar {
  display: flex;
  justify-content: space-between;
  height: 40px;
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  background-color: #eeedef;
  .allCheck {
    .checkbox {
      margin-left: 20px;
      margin-right: 3px;
      float: left;
      position: relative;
      top: 50%;
      transform: translateY(-10px);
      color: #eeedef;
    }
    .text {
      float: left;
      position: relative;
      top: 50%;
      transform: translateY(-8px);
    }
  }
  .sumPrice {
    flex: 2;
    text-align: left;
    line-height: 40px;
  }
  .submit {
    background-color: #ff5100;
    color: #fff;
    line-height: 40px;
  }
  div {
    flex: 1;
    text-align: center;
  }
}
</style>