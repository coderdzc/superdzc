<template>
  <Recommend>
    <RecommendItem v-for="item in recommends" :key="item.image">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </RecommendItem>
  </Recommend>
</template>

<script>
import Recommend from "components/common/recommend/Recommend";
import RecommendItem from "components/common/recommend/RecommendItem";
export default {
  components: {
    Recommend,
    RecommendItem,
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
</style>