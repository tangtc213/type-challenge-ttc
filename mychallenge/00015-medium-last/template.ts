type Last<T extends any[]> = T extends [...any[], infer R] ? R : never

// js version
function Last1(arr: any[]) {
    return arr[arr.length - 1];
}
