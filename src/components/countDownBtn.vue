<template>
  <button type="button" @click="send" :disabled="start && time > 0">{{ text }}</button>
</template>

<script>
export default {
  props: {
    second: {
      type: Number,
      default: 60
    }
  },
  data () {
    return {
      time: 60,
      start: false
    }
  },
  methods: {
    send () {
      this.$emit('send',"lll")
      if (this.start) {
        this.start = true
        this.time = this.second
        this.timer()
      }
    },
    timer () {
      if (this.time > 0) {
        this.time = this.time - 1
        setTimeout(this.timer, 1000)
      }
    }
  },
  computed: {
    text () {
      if (this.start && this.time > 0) {
        return '倒计时' + this.time + '秒'
      } else {
        this.start = false
        return '获取验证码'
      }
    }
  }
}
</script>
    