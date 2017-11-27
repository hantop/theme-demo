import api from '../api/api.js'
function android_load(){

    let obj = localStorage.source_app
    let tag = localStorage.source_tag
    var dft_apk = "";
    var tag_apk = "";
    if (obj == 'xybt') { // 信用白条
        dft_apk = "http://qbres.wzdai.com/apk/" + obj + "-latest.apk";
        tag_apk = "http://qbres.wzdai.com/apk/" + obj + "-" + tag + ".apk";
    } else if (obj == 'hbqb') { // 汇邦钱包
        dft_apk = "http://qbres.wzdai.com/hbqb_apk/" + obj + "-latest.apk";
        tag_apk = "http://qbres.wzdai.com/hbqb_apk/" + obj + "-" + tag + ".apk";
    } else if (obj == 'wzdai_loan') { // 温州贷借款
        dft_apk = "http://qbres.wzdai.com/wzdai_apk/" + obj + "-latest.apk";
        tag_apk = "http://qbres.wzdai.com/wzdai_apk/" + obj + "-" + tag + ".apk";
    } else if (obj == 'xybt_fund') { // 信用白条公积金版
        dft_apk = "http://qbres.wzdai.com/xybt_fund_apk/" + obj + "-latest.apk";
        tag_apk = "http://qbres.wzdai.com/xybt_fund_apk/" + obj + "-" + tag + ".apk";
    } else if (obj == 'xybt_fuli') { // 信用白条福利版
        dft_apk = "http://qbres.wzdai.com/xybt_fuli_apk/" + obj + "-latest.apk";
        tag_apk = "http://qbres.wzdai.com/xybt_fuli_apk/" + obj + "-" + tag + ".apk";
    } else if (obj == 'sxdai') { // 随心贷
        dft_apk = "http://qbres.wzdai.com/sxdai_apk/" + obj + "-latest.apk";
        tag_apk = "http://qbres.wzdai.com/sxdai_apk/" + obj + "-" + tag + ".apk";
    } else if (obj == 'xybt_xjbtfuli') {  //现金白条
        dft_apk = "http://qbres.wzdai.com/apk_xjbt_fuli/" + obj + "-latest.apk";
        tag_apk = "http://qbres.wzdai.com/apk_xjbt_fuli/" + obj + "-" + tag + ".apk";
    } else if (obj == 'xybt_professional') {  //信用白条专业版
        dft_apk = "http://qbres.wzdai.com/xybt_professional_apk/" + obj + "-latest.apk"
        tag_apk = "http://qbres.wzdai.com/xybt_professional_apk/" + obj + "-" + tag + ".apk";
    } else if (obj == 'kxjie') { //开心借
        dft_apk = "http://qbres.wzdai.com/apk_kxj/" + obj + "-latest.apk"
        tag_apk = "http://qbres.wzdai.com/apk_kxj/" + obj + "-" + tag + ".apk";
    } else if (obj == 'xybtXwbank') { //新网银行
        dft_apk = "http://qbres.wzdai.com/xybt_xwbank_apk/" + obj + "-latest.apk";
        tag_apk = "http://qbres.wzdai.com/xybt_xwbank_apk/" + obj + "-" + tag + ".apk";
    }
    //统计
    api.channel_stats('head',tag_apk).then(res=>{
        location.href = tag_apk
    },err=>{
        location.href = dft_apk
    })
}
export default android_load