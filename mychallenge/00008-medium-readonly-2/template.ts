type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [P in keyof T as P extends K ? P : never]: T[P];
} & {
        [P in keyof T as P extends K ? never : P]: T[P];
    }

// // 第二种写法
// type MyReadonly2<T, K extends keyof T = keyof T> = {
//     readonly [P in K]: T[P];
// } & {
//         [P in Exclude<keyof T, K>]: T[P];
//     }

// js version
function MyReadonly21(obj: Record<string, any>, keys: any[]) {
    return Object.keys(obj).reduce((acc: Record<string, any>, key) => {
        if (keys.includes(key)) {
            Object.defineProperty(acc, key, {
                value: obj[key],
                writable: false,
            });
        } else {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
}
