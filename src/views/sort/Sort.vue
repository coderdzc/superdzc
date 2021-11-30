<template>
  <div class="sort">
    <NavBar class="nav"><div slot="center">商品分类</div></NavBar>
    <div class="box">
      <SortSlideBar :slideList="slideList" @slideClick="slideClick" />
      <Categorys
        :categorys="categorys"
        :sortGoodsList="sortGoodsList"
        @tabClick="tabClick"
      />
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import SortSlideBar from "./sortchild/SortSlideBar.vue";
import Categorys from "./sortchild/Categorys.vue";

import {
  GetSlideData,
  GetCategoryData,
  GetSortGoodsList,
} from "network/sort.js";

export default {
  components: {
    NavBar,
    SortSlideBar,
    Categorys,
  },
  data() {
    return {
      slideList: [],
      categorys: [],
      sortGoodsList: [],
      maitKey: 0,
      miniWallkey: 0,
      currentIndex: 0,
    };
  },
  created() {
    this.GetSlideData();
  },
  activated() {
    console.log(111);
  },
  methods: {
    //事件监听
    slideClick(index) {
      this.maitKey = this.slideList[index].maitKey;
      if (this.maitKey === index) return;
      GetCategoryData(this.maitKey).then((res) => {
        this.categorys = res.data.list;
      });
      this.miniWallkey = this.slideList[index].miniWallkey;
      GetSortGoodsList(this.miniWallkey, "pop").then((res) => {
        this.sortGoodsList = res;
      });
    },
    tabClick(index) {
      this.currentIndex = index;
      this.GetSortGoodsList();
    },
    //网络请求
    GetSlideData() {
      GetSlideData().then((res) => {
        console.log(res);
        this.$nextTick(() => {
          this.maitKey = res.data.category.list[0].maitKey;
          this.miniWallkey = res.data.category.list[0].miniWallkey;
          this.GetCategoryData();
          this.GetSortGoodsList();
        });
        this.slideList = res.data.category.list;
      });
    },
    GetCategoryData() {
      GetCategoryData(this.maitKey).then((res) => {
        this.categorys = res.data.list;
        // console.log(this.categorys);
      });
    },
    GetSortGoodsList() {
      const typeList = ["pop", "new", "sell"];
      GetSortGoodsList(this.miniWallkey, typeList[this.currentIndex]).then(
        (res) => {
          this.sortGoodsList = res;
        }
      );
    },
  },
};
</script>
  
<style scoped lang="less">
.sort {
  .nav {
    background-color: @color-tint;
    font-size: 16px;
    color: #fff;
  }
  .box {
    display: flex;
  }
}
</style>