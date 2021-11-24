<template>
  <div class="goodslist">
    <GoodListItem
      v-for="(item, index) in goodslist"
      :key="index"
      :goodsmsg="item"
    ></GoodListItem>
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem.vue";
export default {
  components: {
    GoodListItem,
  },
  props: {
    goodslist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goodslist {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
}
</style>