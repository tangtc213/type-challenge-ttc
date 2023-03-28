type Pop<T extends any[]> = T extends [] ? [] : T extends [...infer R, any] ? R : never;


// js version
function Pop1(arr: any[]) {
    return arr.slice(0, -1);
}