import http from '../axios.js'

export default {
    //获取所有需要的参数
    getAllParams() {
        return http('post', '/wzd/newh5/web/page/app-reg-two?source_tag=fqgj_02')
    },
    //判断手机号是否注册过
    isRegister(parma) {
        return http('post', '/wzd/frontend/web/xqb-user/reg-get-code?clientType=wap', parma)
    },
    //提交表单
    commitForm(parmaObj) {
        return http('post', '/wzd/frontend/web/xqb-user/register?appMarket=fqgj_02&clientType=wap', parmaObj)
    },
    //运营渠道
    channel_stats(tag_apk) {
        return http('head', tag_apk)
    }
}