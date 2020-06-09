
// let req = new XMLHttpRequest();

// req.onreadystatechange = function () {
//   console.log(req)
//   if (req.readyState == 4) {
//     if (req.status == 200) {
//       console.log(JSON.parse(req.responseText))
//     } else {
//       console.log(req.status)
//     }
//   }
// }
// get
// req.open('get','http://api.tianapi.com/huanbao/index?key=996d4b7930a1d5c87c741d5d60484287&num=10');
// req.send();

//post
// req.open('post','http://api.tianapi.com/huanbao/index');
// req.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
// req.send('key=996d4b7930a1d5c87c741d5d60484287&num=50')

// 同源策略
// 浏览器对 XMLHttpRequest 对象的 HTTP 请求，是有范围限制的，这项规定被称为 同源策略。总共有 3条 限制。

// 1. 域名相同 在 www.jmjc.tech 的页面下请求 jmjc.tech 服务器的内容，是不允许的。

// 2. 协议相同 https 和 http 也是两个不同的范围区域。

// 3. 端口相同 默认是 80 端口。

// 跨域
// 由于浏览器为了安全规定了 同源策略，绕过同源策略的限制，通常有以下几种办法。

// 1. flash

// 2. 在同源域名假设一个代理服务器

// 3. cors

// 4. jsonp
// CORS
// CORS 是一种 白名单机制，CORS 的请求成功与否取决于服务器是否同意当前域的请求，通过在服务器设置允许当前域名请求做到 跨域访问。

// 在服务器的响应头部标示 Access-Control-Allow-Origin：当前域名 or * 。



/**
 * 回调函数方式调用ajax
 * @param {string} url 地址
 * @param {function} callback 回调函数
 */
function HTTP(url, callback) {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(this);
    }
  }
  xhttp.open('get', url, true);
  xhttp.send();
}
HTTP('http://api.tianapi.com/huanbao/index?key=996d4b7930a1d5c87c741d5d60484287&num=10', res => {
  console.log(JSON.parse(res.responseText));
  console.log(res.getAllResponseHeaders())
})
