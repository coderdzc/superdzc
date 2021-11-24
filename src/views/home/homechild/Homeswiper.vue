<template>
  <Swiper>
    <SwiperItem v-for="item in cbanners" :key="item.image">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad" />
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
import SwiperItem from "components/common/swiper/SwiperItem";
export default {
  data() {
    return {
      loadEmit: false,
    };
  },
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
  methods: {
    imageLoad() {
      if (!this.loadEmit) {
        this.$emit("imageLoad");
        this.loadEmit = true;
      }
    },
  },
};
</script>

<style>
</style>