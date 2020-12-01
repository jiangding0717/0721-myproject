<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <!--  遍历展示轮播图数据-->
      <div
        class="swiper-slide"
        v-for="carouse in carouselList"
        :key="carouse.id"
      >
        <img :src="carouse.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
//需要使用功能
Swiper.use([Navigation, Pagination, Autoplay]);
export default {
  name: 'Carousel',
  props: {
    carouselList: {
      type: Array,
      required: true,
    },
  },
  watch: {
    carouselList() {
      //确保swiper 不能new多次
      if (this.swiper) return;
      this.$nextTick(() => {
        this.initSwiper();
      });
    },
  },

  methods: {
    initSwiper() {
      // 使用 this.$refs.swiper 取代 .swiper-container
      // 使用 this.$refs.swiper 才能保证轮播图组件使用的自己的swiper
      this.swiper = new Swiper(this.$refs.swiper, {
        loop: true, // 循环模式选项
        autoplay: {
          // 自动轮播
          delay: 2000, // 轮播间隔时间
          disableOnInteraction: false, // 当用户点击下一页时，仍会开启自动轮播
        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    },
  },

  mounted() {
    if (!this.carouselList.length) return;
    this.initSwiper();
  },
};
</script>

<style lang="less" scoped>
</style>
