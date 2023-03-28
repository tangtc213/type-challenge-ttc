type Zip<T extends any[], U extends any[]> =
    T extends [] ? [] :
    T extends [infer A, ...infer B] ?
    U extends [] ? [] :
    U extends [infer C, ...infer D]
    ? [[A, C], ...Zip<B, D>]
    : never
    : never

// js version
function Zip1<T extends any[], U extends any[]>(t: T, u: U): any[] {
    if (t.length === 0 || u.length === 0) {
        return [];
    }
    return [[t[0], u[0]], ...Zip1(t.slice(1), u.slice(1))];
}
