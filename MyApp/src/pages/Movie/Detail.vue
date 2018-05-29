<template>
  <div class="detail">
    <div class="detail-header"></div>
    <scroll ref="scroll"
            class="movie-detail"
            :data="movieDetail"
            :probeType="probeType"
            :listenScroll="listenScroll"
            @scroll="scroll">
      <div class="scroll-wraper">
        <div class="scroll-content">
          <div class="bg-img" ref="image">
            <img v-lazy="replaceUrl(movieDetail.images.large)"/>
          </div>
          <movie-info></movie-info>
          <div class="swicher">
            <switcher :switches="switches" :currentIndex="currentIndex" @switch="switchItem"></switcher>
          </div>
          <movie-comment v-show="currentIndex === 0"></movie-comment>
          <movie-review v-show="currentIndex === 1"></movie-review>
        </div>
      </div>
      <loadmore></loadmore>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
import { getMovieDetail } from '../../api/movie-detail'
import MovieInfo from './MovieInfo'
import Scroll from '../../components/Scroll'
export default {
  data () {
    return {
      currentIndex: 0,
      switches: [
        {name: '短评'},
        {name: '影评'}
      ],
      movieDetail: {},
      probeType: 0,
      listenScroll: false
    }
  },
  created() {
    this.probeType = 3 // scroll组件需要实施派发scroll事件，且支持swipe
    this.listenScroll = true // scroll组件监听scroll事件并派发滚动位置
    this._getDetail() // 获取电影详细信息
  },
  methods: {
    _getDetail() {
      if (!this.movie.id) { // 在当前界面刷新回退到主界面
        this.$router.push('/movie-show');
        return;
      }
      getMovieDetail(this.movie.id).then((res) => { // 获取电影详细
        if (!this.$route.params.movieId) { // 防止快速切换报错
          return;
        }
        this.movieDetail = res;
        let me = this;
        // 使用vue-lazyload监听事件，每次进入只触发一次
        this.$Lazyload.$once('loaded', function ({ el, src }) {
          if (src === res.images.large) {
            me.imgHeight = me._getImageHeight();
            setTimeout(() => {
              if (!me.$route.params.movieId) { // 防止路由快速切换报错
                return;
              }
              me.$refs.scroll.refresh(); // scroll组件重新计算高度
            }, 20);
          }
        });
      });
    },
    switchItem (index) {
      this.currentIndex = index
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      });
    },
    replaceUrl(srcUrl) {
      if (srcUrl !== undefined) { // 图片防盗链处理
        return ('https://images.weserv.nl/?url=' + srcUrl.replace(/http\w{0,1}:\/\//, ''))
      }
    },
    _getImageHeight() {
      // 获取电影海报高度,用于fixed栏固定
      return this.$refs.image.clientHeight;
    },
  }
}
</script>

