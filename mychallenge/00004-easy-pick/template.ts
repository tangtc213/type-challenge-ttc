// extends 在这里表示约束
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

// js version
function MyPick(obj1: Record<string, any>, obj2: Record<string, any>) {
    // your code here
    let result: Record<string, any> = {};
    for (let key in obj1) {
        if (obj2[key] && obj2[key] === obj1[key]) {
            result[key] = obj1[key];
        }
    }
    return result;
}   
