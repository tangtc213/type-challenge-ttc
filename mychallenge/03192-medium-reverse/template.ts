// 一眼递归
type Reverse<T extends unknown[]> = T extends [] ? [] : T extends [infer U, ...infer V] ? [...Reverse<V>, U] : never