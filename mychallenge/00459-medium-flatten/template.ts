type Flatten<T extends any[]> = T extends [infer F, ...infer R] ? F extends any[] ? [...Flatten<F>, ...Flatten<R>] : [F, ...Flatten<R>] : []

// js version
function Flatten1(arr: any[]) {
    return arr.flat(Infinity);
}

// js version2 递归版本
function Flatten2(arr: any[], result: any[] = []): any[] {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            Flatten2(arr[i], result);
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

// js version3
// function Flatten3(arr: any[]) {
//     return arr.reduce((prev, cur) => prev.concat(Array.isArray(cur) ? Flatten3(cur) : [cur]), []);
// }
