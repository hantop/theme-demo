import http from '../axios.js'

export default {
    //获取所有需要的参数
    getAllParams() {
        return http('post', '/wzd/newh5/web/page/app-reg-two?source_tag=fqgj_02')
    },
    //判断手机号是否注册过
    isRegister(parma){
        return http('post','/wzd/frontend/web/xqb-user/reg-get-code?clientType=wap',param)
    },
    //提交表单
    commitForm (parmaObj) {
        console.log('1111')
        return http('post', '/wzd/frontend/web/xqb-user/register?appMarket=fqgj_02&clientType=wap', parmaObj)
    }
}