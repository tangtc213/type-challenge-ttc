// 一个取巧的方法，通过递归的方式，不断的往数组里面添加元素，直到数组的长度等于传入的数字
// 通过不了所有的测试用例，因为递归的层级太深了，会报错
type MinusOne<T extends number, Arr extends number[] = []> = Arr['length'] extends T ?
    Arr extends [infer L, ...infer R] ? R['length'] : never
    : MinusOne<T, [...Arr, T]>

type typeA = MinusOne<1>
type typeB = MinusOne<55>