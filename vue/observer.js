

function defineReactive(obj, key, val) {
    if (arguments.length === 2) {
        val = obj[key];
    };
    if (typeof val == 'object') {
        new Observer(val);
    };
    const dep = new Dep()
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get() {
            console.log(`获取了对象的${key}属性值==${val}`);
            dep.depend();
            return val
        },
        set(newVal) {
            if (val === newVal) {
                return
            }
            console.log(`设置了对象的${key}属性值::: ${newVal}, 原来的属性值::: ${val}`)
            val = newVal;
            dep.notify();
        }
    })

}
class Observer {
    constructor(value) {
        this.value = value;
        if (Array.isArray(value)) {
        } else {
            this.walk(value);
        }
    }
    walk(obj) {
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i])
        }
    }
}
