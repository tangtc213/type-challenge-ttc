// type AppendToObject<T, U extends string | symbol | number, V> = T & { [K in U]: V }
type AppendToObject<T extends Record<string, any>, U extends string | symbol | number, V> = {
    [K in keyof T | U]: K extends keyof T ? T[K] : V
}

// js version
function AppendToObject1(obj: any, key: string, value: any) {
    return Object.assign(obj, { [key]: value });
}