<template>
  <div id="dzc-swiper">
    <div
      class="swiper"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <slot></slot>
    </div>
    <slot name="spotbox"></slot>
    <div class="spotbox">
      <slot name="spots" v-if="showspots && picsCount > 1">
        <div
          class="spots"
          v-for="(item, index) in pics"
          :key="index"
          :class="{ active: index == currentIndex - 1 }"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pics: [1, 2, 3, 4], // 模拟轮播图元素
      picsCount: 0, // 元素数量
      totalWidth: 0, //swiper总宽度
      swiperStyle: {}, //swiper的样式
      playTimer: null, //定时器变量
      currentIndex: 1, //当前图片位置
      isScroll: false, //是否在轮播中
    };
  },
  props: {
    timerGap: {
      type: Number,
      default: 3000,
    },
    animateTime: {
      type: Number,
      default: 300,
    },
    moveRate: {
      type: Number,
      default: 0.25,
    },
    spotsActive: {
      type: String,
      default: "#ff5777",
    },
    showspots: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    setTimeout(() => {
      this.handleDom();
      // 开启定时器
      this.startTimerAuto();
    }, 100);
  },
  methods: {
    handleDom() {
      const swiper = document.querySelector(".swiper");
      const swiperEls = document.querySelectorAll(".swiper .swiper-item");
      this.picsCount = swiperEls.length;
      if (this.picsCount > 1) {
        let cloneFirst = swiperEls[0].cloneNode(true);
        let cloneLast = swiperEls[this.picsCount - 1].cloneNode(true);
        swiper.insertBefore(cloneLast, swiperEls[0]);
        swiper.appendChild(cloneFirst);
        this.totalWidth = swiper.offsetWidth;
        this.swiperStyle = swiper.style;
      }
      this.transPosition(-this.totalWidth);
    },
    startTimerAuto() {
      this.playTimer = setInterval(() => {
        this.currentIndex++;
        console.log(this.currentIndex);
        this.scrollAnimate(-this.currentIndex * this.totalWidth);
      }, this.timerGap);
    },
    stopTimerAuto() {
      clearInterval(this.playTimer);
    },
    transPosition(position) {
      this.swiperStyle.transform = `translatex(${position}px)`;
      this.swiperStyle["-webkit-transform"] = `translatex(${position}px)`;
      this.swiperStyle["-ms-transform"] = `translatex(${position}px)`;
    },
    checkPosition() {
      //这里一定要加一个定时器，实现异步操作
      window.setTimeout(() => {
        if (this.currentIndex === this.picsCount + 1) {
          this.currentIndex = 1;
          this.swiperStyle.transition = `0ms`;
          this.transPosition(-this.currentIndex * this.totalWidth);
        } else if (this.currentIndex === 0) {
          this.currentIndex = this.picsCount;
          this.swiperStyle.transition = `0ms`;
          this.transPosition(-this.currentIndex * this.totalWidth);
        }
      }, this.animateTime);
    },
    scrollAnimate(position) {
      this.isScroll = true;
      this.swiperStyle.transition = `transform ${this.animateTime}ms`;
      this.transPosition(position);
      this.checkPosition();
      this.isScroll = false;
    },
    touchStart(e) {
      if (this.isScroll) return;
      this.stopTimerAuto();
      this.startX = e.touches[0].pageX;
    },
    touchMove(e) {
      this.moveX = e.touches[0].pageX - this.startX;
      let pastposition = -this.currentIndex * this.totalWidth;
      let nowpositon = this.moveX + pastposition;

      // 通过滑动移动swiper位置
      this.transPosition(nowpositon);
    },
    touchEnd(e) {
      let absmoveX = Math.abs(this.moveX);
      if (this.moveX == 0) {
        return;
      } else if (this.moveX > 0 && absmoveX > this.totalWidth * this.moveRate) {
        this.currentIndex--;
      } else if (this.moveX < 0 && absmoveX > this.totalWidth * this.moveRate) {
        this.currentIndex++;
      }

      this.scrollAnimate(-this.currentIndex * this.totalWidth);
      this.startTimerAuto();
    },
    //控制上一个，下一个
    previous() {
      this.changeposition(-1);
    },
    next() {
      this.changeposition(1);
    },
    changeposition(num) {
      this.stopTimerAuto();
      this.currentIndex += num;
      this.scrollAnimate(-this.currentIndex * this.totalWidth);
      this.startTimerAuto();
    },
  },
};
</script>

<style scoped lang="less">
#dzc-swiper {
  overflow: hidden;
  position: relative;
  .swiper {
    text-align: center;
    font-size: 50px;
    display: flex;
  }
  .spotbox {
    display: flex;
    justify-content: center;
    width: 100%;
    position: absolute;
    bottom: 8px;
    .spots {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #fff;
      margin: 0 5px;
    }
    .active {
      background-color: #ff5777;
    }
  }
}
</style>