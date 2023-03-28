// 配合上面的reverse方法,easy
type FlipArguments<T extends (...args: any[]) => any> = T extends (...args: infer R) => infer P ? (...args: Reverse<R>) => P : never;

// js version
function flipArguments1(fn: (...args: any[]) => any) {
    return (...args: any[]) => fn(...args.reverse());
}

