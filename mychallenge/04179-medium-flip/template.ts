// Flip 就是将值和键反转
// 中间用强制类型转换，将值转换为字符串
type Flip<T extends Record<string, any>> = {
    [K in keyof T as T[K] extends string | number | symbol ? T[K] : `${T[K]}`]: K
}

// js version
function Flip1<T extends Record<string, any>>(t: T): any {
    let result: any = {};
    Object.entries(t).forEach(([key, value]) => {
        result[value.toString()] = key;
    });
    return result;
}
