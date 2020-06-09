var add = (function () {
    var counter = 0;
    return function () {
        return counter += 1;
    }
})();
console.log(add)
add();
add();
add();
console.log(add())