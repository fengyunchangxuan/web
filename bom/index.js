// var height = window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
// var width = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
// console.log(height);
// console.log(width);
// console.log(screen.height);
// console.log(screen.width)
// console.log(window.location);

// console.log(navigator);

// document.cookie = 'userName=张三;expires=Sun, 31 Dec 2020 12:00:00 UTC; path=/';
// var cookie = document.cookie;
// console.log(cookie)

/**
 * 设置cookie
 * @param {string} cname 名称
 * @param {string} cvalue 值
 * @param {number} exdays 过期时间
 */
function setCookie(cname, cvalue, exdays) {
    var date = new Date();
    date.setTime(date.getTime() + (exdays + 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
};
/**
 * 获取cookie的值
 * @param {string} cname 名称
 */
function getCookie(cname) {
    var name = cname + '=';
    var decodeCookie = decodeURIComponent(document.cookie);
    console.log(decodeCookie);
    var cookies = decodeCookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        while (cookie.charAt[0] == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length)
        }
        return ''
    }
}
setCookie('name', '张三', 7);
let name = getCookie('name');
console.log(name);
