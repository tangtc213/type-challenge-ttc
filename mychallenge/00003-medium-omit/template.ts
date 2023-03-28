type MyOmit<T, K extends keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P];
}

// js version
function MyOmit1(obj: Record<string, any>, keys: any[]) {
    return Object.keys(obj).reduce((acc: Record<string, any>, key) => {
        if (!keys.includes(key)) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
}
