<template>
  <Swiper>
    <SwiperItem v-for="item in cbanners" :key="item.image">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
import SwiperItem from "components/common/swiper/SwiperItem";
export default {
  props: {
    cbanners: {
      type: [],
      default: [],
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style>
</style>