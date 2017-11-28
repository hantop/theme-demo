export function isWx() {
    let u = navigator.userAgent;
    let isWx = u.match(/MicroMessenger/);
    if (isWx) {
        return true
    } else {
        return false
    }
}