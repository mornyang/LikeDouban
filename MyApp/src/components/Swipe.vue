<template>
  <div class="swiper-container" :class="swipeid">
    <div class="swiper-wrapper">
      <slot name="swiper-con"></slot>
    </div>
    <!-- 分页器 -->
    <div :class="{'swiper-pagination':pagination}"></div>
  </div>
</template>
<script>
import '../assets/lib/swiper/js/swiper.js'
export default {
  props: {
    swipeid: {
      type: String,
      default: ''
    },
    effect: {
      type: String,
      default: 'slide'
    },
    loop: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    pagination: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Number,
      default: 5000
    },
    paginationType: {
      type: String,
      default: 'bullets'
    }
  },
  mounted () {
    var That = this
    // eslint-disable-next-line
    new Swiper('.' + That.swipeid, {
      // 循环
      loop: That.loop,
      // 分页器
      pagination: '.swiper-pagination',
      // 分页类型
      paginationType: That.paginationType,
      // 自动播放
      autoplay: That.autoplay,
      // 方向
      direction: That.direction,
      // 特效
      effect: That.effect, // slide,fade,coverflow,cube
      // 用户操作swiper之后，是否禁止autoplay
      autoplayDisableOnInteraction: false
    })
  }
}
</script>
<style>
  @import '../assets/lib/swiper/css/swiper.css';
  .swiper-pagination-bullet-active {
    background: #fff;
  }
</style>
