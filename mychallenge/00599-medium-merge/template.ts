// 用遍历联合类型的方法，将两个类型合并为一个类型
type Merge<F, S> = {
    [K in keyof F | keyof S]: K extends keyof F ? K extends keyof S ? S[K] : F[K] : K extends keyof S ? S[K] : never
}
