// case 没有考虑到返回值是另一个函数的情况，就不进行递归了
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// js version
function MyReturnType1(fn: (...args: any[]) => any) {
    return fn();
}