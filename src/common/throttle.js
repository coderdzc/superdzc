export function throttle(fn, time) {
    let timer = null; //局部变量
    return function (...arr) {
        //function作为一个闭包
        if (timer) clearTimeout(timer); //if（timer） cleartimeout(timer)调用了timer，则timer无法被销毁，所以下一次调用这个函数的时候，就会判定上一次执行的这个变量没有被销毁，就不会重新创建赋值null，而是延用没有被销毁的值
        timer = setTimeout(() => {
            fn.apply(this, arr);
        }, time);
    };
}