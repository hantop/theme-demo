function system() {
    let u = navigator.userAgent
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    let isWx = u.match(/MicroMessenger/);
    if (isiOS) {
        return 'ios'
    }else if (isAndroid) {
        return 'android'
    }
}
export default system

