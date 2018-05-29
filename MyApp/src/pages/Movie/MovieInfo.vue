<template>
  <div class="movie-info">
    <div class="overall">
      <div class="desc">
        <h2 class="title">{{movieDetail.title}}</h2>
        <span class="tag">{{tags}}</span>
        <span class="original-title">原名: {{movieDetail.original_title}}</span>
        <span class="pubdate">上映时间: {{pubdate}}</span>
        <span class="duration">片长: {{durations}}</span>
      </div>
      <div class="rank">
        <span class="origin">豆瓣评分</span>
        <span class="rating" v-if="rating">{{normalizeScore()}}</span>
        <star :size="24" :score="movieDetail.rating.average" :needNullStar="needNullStar"></star>
        <span class="num" v-if="rating">{{movieDetail.ratings_count}}</span>
      </div>
    </div>
    <div class="operate">
      <div class="want-watch"
        @click="saveWantedMovie"
        :class="{'wanted': isWanted(movieDetail.id)}"
        v-text="wantedText">
      </div>
      <div class="has-watched"
        @click="saveWatchedMovie"
        :class="{'watched': isWatched(movieDetail.id)}">
        <img src="./avatar.jpg" alt="" v-show="hasWatched" width="25" height="25">
        {{watchedText}}
      </div>
    </div>
    <div class="summary">
      <h2 class="title">剧情简介</h2>
      <p class="content">&nbsp;&nbsp;&nbsp;&nbsp;{{movieDetail.summary}}</p>
    </div>
    <scroll class="casts" :scrollX="this.scrollX" :eventPassthrough="this.eventPassthrough" ref="scroll">
      <div class="casts-content" ref="content">
        <h2 class="title">影人</h2>
        <div class="cast-item"  v-for="item in allCasts" @click="selectCelebrity(item.id,$event)">
          <img v-lazy="replaceUrl(item.avatars.large)" width="90" height="120">
          <h3 class="item-title">{{item.name}}</h3>
          <span v-if="item.isDirector">导演</span>
        </div>
        <div class="no-result" v-if="!allCasts.length">
          暂无影人信息
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '../../components/Scroll'
export default {
  
}
</script>

