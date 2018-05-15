<template>
  <div>
    测试
    <m-tabbar v-model="select">
      <m-tabbar-item id='tab1'>
        <img src="../assets/img/ic_tab_home_normal.png" alt="" slot="icon-normal">
        <img src="../assets/img/ic_tab_home_active.png" alt="" slot="icon-active">
        首页
      </m-tabbar-item>
      <m-tabbar-item id='tab2'>
        <img src="../assets/img/ic_tab_subject_normal.png" alt="" slot="icon-normal">
        <img src="../assets/img/ic_tab_subject_active.png" alt="" slot="icon-active">
        书影音
      </m-tabbar-item>
      <m-tabbar-item id='tab3'>
        <img src="../assets/img/ic_tab_status_normal.png" alt="" slot="icon-normal">
        <img src="../assets/img/ic_tab_status_active.png" alt="" slot="icon-active">
        广播
      </m-tabbar-item>
      <m-tabbar-item id='tab4'>
        <img src="../assets/img/ic_tab_group_normal.png" alt="" slot="icon-normal">
        <img src="../assets/img/ic_tab_group_active.png" alt="" slot="icon-active">
        小组
      </m-tabbar-item>
       <m-tabbar-item id='tab5'>
        <img src="../assets/img/ic_tab_profile_normal.png" alt="" slot="icon-normal">
        <img src="../assets/img/ic_tab_profile_active.png" alt="" slot="icon-active">
        我的
      </m-tabbar-item>
    </m-tabbar>
  </div>
</template>

<script>
import mTabbar from '../components/tabbar'
import mTabbarItem from '../components/tabbar-item'
export default {
  name: 'index',
  components: {
    mTabbar,
    mTabbarItem
  },
  data () {
    return {
      select: 'tab1'
    }
  }
}
</script>

<style lang="less">
.m-tabbar{
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
    height: 50px;
    background: #fff;
    border-top: 1px solid #e4e4e4;
    .m-tabbar-item{
      flex: 1;
      text-align: center;
      .m-tabbar-item-icon{
          display: block;
          padding-top: 2px;
          img{
              width: 28px;
              height: 28px;
          }
      }
      .m-tabbar-item-text{
          display: block;
          font-size: 10px;
          color:#949494;
      }
      &.is-active{
          .m-tabbar-item-text{
              color: #42bd56;
          }
      }
  }
}
</style>
