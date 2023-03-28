// 一眼递归
type TupleToNestedObject1<T extends unknown[], U> = T extends [infer A, ...infer B] ?
    A extends string ?
    B["length"] extends 0
    ? Record<A, U>
    : Record<A, TupleToNestedObject1<B, U>>
    : {}
    : U

type TupleToNestedObject<T extends string[], U> =
    T["length"] extends 0
    ? U
    : T["length"] extends 1
    ? Record<T[0], U>
    : T extends [infer A extends string, ...infer B extends string[]] ?
    Record<A, TupleToNestedObject<B, U>>
    : never

// js version
function tupleToNestedObject1(tuple: string[], res: any) {
    return tuple.reverse().reduce((acc, key, index) => {
        if (index === 0) {
            return { key: res };
        }
        return { [key]: acc };
    }, {} as Record<string, any>);
}