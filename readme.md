# 类型体操解题思路总结

#### 一图流
![image](https://github.com/tangtc213/type-challenge-ttc/blob/main/source/typp-change%E5%AE%9E%E7%BA%BF%E6%80%9D%E8%B7%AF%E6%80%BB%E7%BB%93.png)

#### 根据题目归纳解题规律

#### pick
**从类型 `T` 中选择出属性 `K`，构造成一个新的类型**。
三个part
1、需要遍历T的属性
2、需要有个判断K是否是T的属性
3、返回的是一个类型
使用类比的步骤
```js
	// js version
function MyPick(obj1: Record<string, any>, obj2: Record<string, any>) {
    // your code here
    let result: Record<string, any> = {};
    for (let key in obj1) {
        if (obj2[key] && obj2[key] === obj1[key]) {
            result[key] = obj1[key];
        }
    }
    return result;
}   
```
1 ts中遍历元组的值
[P in K]
2 K extends keyofT 进行约束
3 直接返回一个对象 {} 同js
```ts
	type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}
```

#### Readonly
该 `Readonly` 会接收一个 _泛型参数_，并返回一个完全一样的类型，只是所有属性都会被 `readonly` 所修饰。
也就是不可以再对该对象的属性赋值
2 个隐藏条件
1、readonly修饰符的使用
2、遍历
```js
	// js version
function MyReadonly(obj: Record<string, any>) {
    let result: Record<string, any> = {};
    for (let key in obj) {
        Object.defineProperty(result, key, {
            value: obj[key],
            writable: false
        });
    }
    return result;
}
```
1 对与ts 直接使用readonly修饰符即可
```ts
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}
```


#### 元组转换为对象
传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。
2 个做题前提
1、元组是什么
2、元组的遍历
```js
// js version
function TupleToObject(arr: any[]) {
    let result: Record<string, any> = {};
    for (let i = 0; i < arr.length; i++) {
        result[arr[i]] = arr[i];
    }
    return result;
}

```
1 数组和元组的差别 
```ts
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type t = typeof tuple
```
2  遍历数组`T[number]`
```ts
type TupleToObject<T extends readonly any[]> = {
    [P in T[number]]: P
}
```


#### FirstArray
实现一个通用`First<T>`，它接受一个数组`T`并返回它的第一个元素的类型。
2个隐藏条件
1、如何返回数组第一项
2、空数组怎么办
推出还需要另一个条件---- 如何实现条件判断 (判断出空数组)
```ts
type First<T extends any[]> = T[0];
```
发现这么写通不过测试用例
方法一、先判断是否空数组
```ts
type First<T extends any[]> = T extends [] ? never : T[0];
```
方法二 array.length === 0 ?
```ts
 type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
```
方法三 使用解构配合变量
```ts
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never
```

#### tuple length

创建一个通用的`Length`，接受一个`readonly`的数组，返回这个数组的长度。
两个隐藏条件
1、判断这个数组是数组
2、readonly
```js
// js version
function Length(arr: any[]) {
    return arr.length;
}

```
1 使用类型约束extends 2 使用readonly关键词
```ts
type Length<T extends readonly unknown[]> = T["length"];
```

#### Awaited
假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。
三个隐藏条件
1、如何描述一个Promise对象
2、Promise具有链式调用的特性、返回的类型还是一个Promise怎么办
这个题目无法用js逻辑来类比
1 描述一个Promise对象ts里自带了Promise类型
`Promise<T>` 但是我们发现测试case中存在有.then方法的也需要获取.then 方法的类型
那么就用拓展类型`PromiseLike<T>`作为约束
2 如果获取的这个类型还是Promise类型那么就进行一次递归调用
```ts
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U extends PromiseLike<any> ? MyAwaited<U> : U : never;
```


#### Includes
在类型系统里实现 JavaScript 的 `Array.includes` 方法，这个类型接受两个参数，返回的类型要么是 `true` 要么是 `false`。
首先直接用js类比
```js
// js version 1
function Includes1<T extends any[], U>(t: T, u: U): boolean {
    return t.includes(u);
}

```
显然我们无法直接用includes方法
```js
function Includes2<T extends any[], U>(t: T, u: U): boolean {
    function _Includes2(t: any[], u: any): boolean {
        const [head, ...tail] = t;
        if (head === u) {
            return true;
        }
        return tail.length > 0 ? _Includes2(tail, u) : false;
    }

    return _Includes2(t, u);
}
```
使用递归的方案完成判断
这样才有类似的ts解决方案
```ts
// type Includes<T extends readonly any[], U> = U extends T[number] ? true : false;
import { Equal } from "@type-challenges/utils";
export type Includes<T extends readonly any[], U> = T extends [infer Head, ...infer Tail] ? Equal<Head, U> extends true ? true : Includes<Tail, U> : false;
```

#### Readonly 2
实现一个通用`MyReadonly2<T, K>`，它带有两种类型的参数`T`和`K`。

`K`指定应设置为Readonly的`T`的属性集。如果未提供`K`，则应使所有属性都变为只读，就像普通的`Readonly<T>`一样。

隐藏条件
1、需要判断当K不存在的情形
js版本不需要考虑这个
```js
// js version
function MyReadonly21(obj: Record<string, any>, keys: any[]) {
    return Object.keys(obj).reduce((acc: Record<string, any>, key) => {
        if (keys.includes(key)) {
            Object.defineProperty(acc, key, {
                value: obj[key],
                writable: false,
            });
        } else {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
}
```
ts 版本
```ts
type MyReadonly2<T, K extends keyof T> = {
    readonly [P in keyof T as P extends K ? P : never]: T[P];
} & {
        [P in keyof T as P extends K ? never : P]: T[P];
    }
```
发现过不了一个case `  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,`
这是没有K的情况
发现ts的类型也可以像函数入参一样赋予一个默认值
得到
```ts
type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [P in keyof T as P extends K ? P : never]: T[P];
} & {
        [P in keyof T as P extends K ? never : P]: T[P];
    }
```