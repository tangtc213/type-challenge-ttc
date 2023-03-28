// type First<T extends any[]> = T[0];
// type First<T extends any[]> = T extends [] ? never : T[0];
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never

// js version
function First(arr: any[]) {
    return arr[0];
}

