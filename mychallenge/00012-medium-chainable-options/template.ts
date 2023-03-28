type Chainable<T = {}> = {
  option<K extends string, V>(key: K extends keyof T ? never : K, value: V): Chainable<
    Omit<T, K> & { [P in K]: V }>
  get(): T
}

// js version
// function Chainable1(obj: Record<string, any>) {
//   return {
//     option(key: string, value: any) {
//       obj[key] = value;
//       return this;
//     },
//     get() {
//       return obj;
//     },
//   };
// }
