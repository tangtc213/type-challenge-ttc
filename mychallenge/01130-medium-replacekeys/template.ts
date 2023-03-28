// 多次extends判断
type ReplaceKeys<U, T, Y> = {
    [K in keyof U]: K extends T ? K extends keyof Y ? Y[K] : never : U[K]
}

// js version
function ReplaceKeys1(obj: Record<string, any>, keys: string[], value: Record<string, any>) {
    let result: Record<string, any> = {};
    for (let key in obj) {
        if (keys.includes(key)) {
            result[key] = value[key];
        } else {
            result[key] = obj[key];
        }
    }
    return result;
}
