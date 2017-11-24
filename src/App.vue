<template>
  <div id="app">
   <keep-alive>
     <router-view/>
   </keep-alive>
  </div>
</template>

<script>
import api from './api/api.js'
export default {
  name: 'app',
  created () {
    this._getAllParam()
  },
  methods: {
    _getAllParam () {
        api.getAllParams().then(data=>{
        console.log(data.isfromweichat)
        console.log(data.source)
        localStorage.source_app = data.source.source_app
        localStorage.source_id = data.source.source_id
        localStorage.source_tag = data.source.source_tag
        localStorage.reg_sms_key = data.reg_sms_key;
        localStorage.get_code_url = data.get_code_url;
        localStorage.themes = data.themes;
      })
    }
  }

}
</script>

<style lang='less'>
@import './common/css/common.less';
@import './common/css/rest.less';
@import './common/css/app.less';
</style>


