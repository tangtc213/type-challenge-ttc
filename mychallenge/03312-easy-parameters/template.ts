type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer R) => void ? R : never;
