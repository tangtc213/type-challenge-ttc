type Copy<T> = {
    [P in keyof T]: T[P]
}
type PartialByKeys<T extends Record<string, any>, K extends keyof T = keyof T> = Copy<{
    [P in keyof T as P extends K ? P : never]?: T[P]
} & Omit<T, K>>
