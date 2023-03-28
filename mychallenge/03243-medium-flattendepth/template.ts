// case 实例过深的问题没能解决
type FlattenDepth<T extends any[], D extends number = 1> = D extends 0
    ? T
    : T extends []
    ? []
    : T extends [infer U, ...infer V]
    ? U extends any[]
    ? [...FlattenDepth<U, MinusOne<D>>, ...FlattenDepth<V, D>]
    : [U, ...FlattenDepth<V, D>]
    : never

// js version
function FlattenDepth1<T extends any[], D extends number = 1>(t: T, d: D): any[] {
    if (d === 0) {
        return t;
    }
    return t.reduce((acc, item) => {
        if (Array.isArray(item)) {
            return [...acc, ...FlattenDepth1(item, d - 1)];
        }
        return [...acc, item];
    }, [])
}
