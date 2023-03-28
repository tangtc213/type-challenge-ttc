type RequiredByKeys<T, K extends keyof T = keyof T> = Copy<{
    [P in keyof T as P extends K ? P : never]-?: T[P]
} & Omit<T, K>>

