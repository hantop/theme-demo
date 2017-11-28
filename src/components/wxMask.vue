<template>
  <div class="wxMask" v-show="showWx">
  </div>
</template>
<script>
  export default {
    name:'wxMask',
    props:{
      showWx:Boolean,
      default:false
    }
  }
</script>

<style lang="less">
.wxMask{
  width: 100%;
  height: 100%;
  background:url("../image/wx_download.png") no-repeat 0 0/contain;
  position: relative;
  z-index: 101;
}
</style>

