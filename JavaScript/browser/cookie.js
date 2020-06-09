var cookie = document.cookie;
// console.log(cookie);
// cookie = 'name=张三';
// console.log(cookie);
// 设置 cookie 过期的时间 | 通过 “expires” 字段 | 默认的过期时间是浏览器被关闭
cookie = 'name= Sophie;expires=' + new Date(
  new Date().getTime() + (7 * 24 * 60 * 60 * 1000)  // 7 天后过期
)
console.log(cookie);

// 设置 cookie 作用在哪个目录下
cookie = 'name=Sophie;path=/' // 根目录代表整个网站下都能读取
console.log(cookie);

cookie = 'name=Sophie;path=/less' // 只在 /less 目录下才能读取
console.log(cookie);

// 设置 cookie 作用在哪个域名下
cookie = 'name= Sophie;;domain=a.a.com' // b.a.com ...
console.log(cookie);

// 如果要读取指定的 cookie, 例如 “name” 的值, 那么可以通过正则表达式
console.log(cookie.match(/name=(.*?);/)[1]) // ‘Sophie’
