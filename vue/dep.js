function remove(arr, item) {
    if (arr.length) {
        const index = arr.indexOf(item);
        if (index > -1) {
            return arr.splice(index, 1);
        }
    }
}



class Dep {
    constructor() {
        this.subs = [];
    };
    addSub(sub) {
        this.subs.push(sub);
    };
    remove(sub) {
        this.remove(this.subs, sub);
    };
    depend() {
        console.log('depend');
        
        if (window.target) {
            console.log(window.target)
            this.addSub(window.target)
        }
    };
    notify() {
        console.log('notify')
        const subs = this.subs.slice();
        for (let i = 0, len = subs.length; i < len; i++) {
            subs[i].update();
        }
    }

}