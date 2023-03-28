type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}

// js version
function MyReadonly(obj: Record<string, any>) {
    let result: Record<string, any> = {};
    for (let key in obj) {
        Object.defineProperty(result, key, {
            value: obj[key],
            writable: false
        });
    }
    return result;
}
