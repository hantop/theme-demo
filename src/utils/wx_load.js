export function wxDownload() {
    let obj = localStorage.source_app;
    // -- xybt微信界面直接前往应用宝市场下载 安卓ios通用--
    // var a = document.createElement('a')
    switch (obj) {
        case '':
            location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.wzdai.xybt";
            break;
        case 'xybt':
            location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.wzdai.xybt";
            break;
        case 'sxdai':
            location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.xybt.sxdai";
            break;
        default:
            location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.wzdai.xybt";
            break;
    }
}
