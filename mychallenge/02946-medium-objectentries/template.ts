type ObjectEntries<T, A extends keyof T = keyof T> =
    A extends keyof T ? [A, T[A] extends undefined | infer P ? P : undefined] : never

// js version
function objectEntries1(obj: Record<string, any>) {
    return Object.entries(obj) as [string, any][];
}
