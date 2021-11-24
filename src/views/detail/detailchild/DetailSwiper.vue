<template>
  <Swiper class="swiperstyle">
    <SwiperItem v-for="item in topImages" :key="item">
      <img :src="item" alt="" @load="imgLoad" />
    </SwiperItem>
  </Swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
import SwiperItem from "components/common/swiper/SwiperItem";
export default {
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      loadstart: false,
    };
  },
  props: {
    topImages: {
      type: Array,
      default: [],
    },
  },
  methods: {
    imgLoad() {
      if (!this.loadstart) {
        this.$emit("imgLoad");
        this.loadstart = true;
      }
    },
  },
};
</script>

<style scoped lang="less">
.swiperstyle {
  height: 300px;
}
</style>