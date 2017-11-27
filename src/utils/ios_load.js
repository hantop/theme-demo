function ios_load() {
    let obj = localStorage.source_app
    var download_url = "";
    if (obj == 'xybt') {
        download_url = "http://itunes.apple.com/app/id1221186366?mt=8"; // 信用白条 TODO clark id1221186366
    } else if (obj == 'hbqb') {
        download_url = "http://itunes.apple.com/app/id1221186366?mt=8"; // 汇邦钱包 TODO clark id1221186366
    } else if (obj == 'wzdai_loan') {
        download_url = "http://itunes.apple.com/app/id1239756949"; // 温州贷借款
    } else if (obj == 'xybt_fund') {
        download_url = "http://itunes.apple.com/app/id1248726833?mt=8"; // 信用白条公积金版
    } else if (obj == 'xybt_fuli') {
        download_url = "http://itunes.apple.com/app/id1235438496?mt=8"; // 信用白条福利版
    } else if (obj == 'sxdai') {
        download_url = "http://itunes.apple.com/app/id1251292028?mt=8"; // 随心贷
    } else if (obj == 'xybt_xjbtfuli') {
        download_url = "http://itunes.apple.com/app/id1264533569?mt=8"; //现金白条
    } else if (obj == 'xybt_professional') {
        download_url = "http://itunes.apple.com/app/id1264536816?mt=8"; //信用白条专业版
    } else if (obj == 'kxjie') {
        download_url = "http://itunes.apple.com/app/id1278230923?mt=8";//开心借
    } else if (obj == 'xybtXwbank') {
        download_url = "http://itunes.apple.com/app/id1221186366?mt=8"; // 新网银行(IOS下载主包)
    }
   
    location.href = download_url
}
export default ios_load