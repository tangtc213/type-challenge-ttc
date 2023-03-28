// 第一种解法
type Diff1<O, O1> = {
    [K in keyof O | keyof O1 as K extends keyof O ? K extends keyof O1 ? never : K : K]: K extends keyof O ? O[K] : K extends keyof O1 ? O1[K] : never
}

// 第二种解法引入辅助类型 T = O & O1
type Diff<O, O1, T = O & O1> = {
    [K in keyof Omit<T, keyof O1> | keyof Omit<T, keyof O>]: T[K]
}

// js version
function Diff1(obj1: Record<string, any> = {}, obj2: Record<string, any> = {}) {
    let result: Record<string, any> = {};
    let helpObj: Record<string, any> = Object.assign({}, obj1, obj2);
    for (let key in helpObj) {
        if (!(obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key))) {
            result[key] = helpObj[key];
        }
    }
    return result;
}
