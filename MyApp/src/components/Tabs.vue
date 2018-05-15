<template>
  <div class="tabs">
    <div class="toolbar_btn" @click="function_src(1)">1</div>
    <div class="toolbar_btn" @click="function_src(2)">2</div>
    <div class="toolbar_btn" @click="function_src(3)">3</div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data () {
    return {
      src: 'http://192.168.0.110:8080/dist/fragment1.js'
    }
  }
}
</script>

<style>
.tabs{
  background-color: #EEE;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 750px;
  height: 80px;
}
.toolbar_btn{
  flex: 1;
  text-align: center;
  align-items: center;
  height: 80px;
  justify-content: center;
}
.toolbar_btn:active{
  background-color: #999;
  height: 80px;
}
</style>
