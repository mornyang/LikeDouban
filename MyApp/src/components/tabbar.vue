<template>
  <div class="m-tabbar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ['value'],
  mounted () {
    this.value = this.$route.matched[0].name
  }
}
</script>
<style lang="less">
@import "../assets/less/var.less";
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
            color: @tabbarActiveColor;
        }
    }
}
</style>
