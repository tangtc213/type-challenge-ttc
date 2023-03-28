// 经典的斐波那契数列，从第三项开始，每一项都等于前两项之和
// Ts求和得借助数组长度的类型推断实现
// 这里没法用循环，只能用递归
type Fibonacci<T extends number, Count extends number[] = [], P1 extends number[] = [1], P2 extends number[] = []> =
    P2["length"] extends T
    ? Count["length"]
    : Fibonacci<T, [...P1, ...Count], Count, [...P2, 1]>

// js version
// 第一种实现方式，使用递归
function Fibonacci1<T extends number>(t: T): number {
    if (t === 0) {
        return 0;
    }
    if (t === 1) {
        return 1;
    }
    return Fibonacci1(t - 1) + Fibonacci1(t - 2);
}

// 第二种实现方式，使用循环
function Fibonacci2<T extends number>(t: T): number {
    let result = 0;
    let pre = 0;
    let cur = 1;
    for (let i = 1; i < t; i++) {
        result = pre + cur;
        pre = cur;
        cur = result;
    }
    return result;
}