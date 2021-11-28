<template>
  <div class="cartlist" ref="scroll">
    <div class="listitem" v-for="(item, index) in cartList" :key="index">
      <div class="checkbtn">
        <CheckBox
          class="box"
          :ischecked="item.checked"
          @click.native="btnclick(index)"
        ></CheckBox>
      </div>
      <div class="images"><img :src="item.img" alt="" /></div>
      <div class="msg">
        <div class="title">{{ item.title }}</div>
        <div class="desc">{{ item.desc }}</div>
        <div class="pricenum">
          <div class="price">{{ item.price }}</div>
          <div class="num">{{ "x" + item.num }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CheckBox from "components/context/checkbox/CheckBox.vue";
export default {
  components: {
    CheckBox,
  },
  computed: {
    ...mapGetters(["cartList", "isAllCheck"]),
  },
  methods: {
    btnclick(index) {
      this.cartList[index].checked = !this.cartList[index].checked;
    },
  },
};
</script>

<style scoped lang="less">
.cartlist {
  .listitem {
    padding: 10px 0 5px 0;
    display: flex;
    border-bottom: 2px solid #ccc;
    .checkbtn {
      flex: 0.1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .box {
        margin: auto;
      }
    }
    .images {
      flex: 0.2;
      img {
        width: 80px;
        height: 120px;
        border-radius: 5px;
      }
    }
    .msg {
      flex: 0.7;
      white-space: nowrap;
      overflow: hidden;
      padding: 0 10px;
      position: relative;
      .title {
        font-size: 16px;
        color: #000;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 20px;
      }
      .desc {
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .pricenum {
        width: 95%;
        position: absolute;
        bottom: 10px;
        left: 10px;
        display: flex;
        overflow: hidden;
        .price {
          flex: 0.5;
          text-align: left;
          font-size: 16px;
          color: #ee5422;
        }
        .num {
          flex: 0.5;
          text-align: right;
          padding-right: 15px;
        }
      }
    }
  }
}
</style>