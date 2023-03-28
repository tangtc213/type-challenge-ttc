type Shift<T extends any[]> = T extends [] ? [] : T extends [infer U, ...infer V] ? V : never
