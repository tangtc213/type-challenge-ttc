// 一眼递归
type DeepReadonly<T> = {
    readonly [P in keyof T]: keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>;
}


// js version
// 对于函数的处理，需要单独处理
function DeepReadonly1(obj: Record<string, any>) {
    return Object.keys(obj).reduce((acc: Record<string, any>, key) => {
        if (typeof obj[key] === 'object' && obj[key] instanceof Function === false) {
            acc[key] = DeepReadonly1(obj[key]);
        } else {
            Object.defineProperty(acc, key, {
                value: obj[key],
                writable: false,
            });
        }
        return acc;
    }, {});
}
