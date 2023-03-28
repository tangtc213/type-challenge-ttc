/*

第1个答案

// your answers
type Reverse<T extends any[]> = T extends [...infer T, infer Last]
  ? [Last, ...Reverse<T>]
  : [];
type FlipArguments<T extends Function> = 
  T extends (...args: infer Args) => infer ReturnType ? (...args: Reverse<Args>) => ReturnType : never


第2个答案

type Reverse<T extends unknown[]> = T extends [...infer Head, infer Tail]
  ? [Tail, ...Reverse<Head>]
  : T;

type FlipArguments<T extends (...args: any[]) => unknown> = T extends (...args: infer K) => infer U
  ? (...args: Reverse<K>) => U
  : never;


第3个答案

  type Reverse<T extends unknown[]> =
    T extends [infer Head, ...infer Tail]
      ? [...Reverse<Tail>, Head]
      : []
  
  type FlipArguments<T extends (...args: any) => void> =
  T extends (...args: infer Arg) => infer ReturnType
    ? (...arg: Reverse<Arg>) => ReturnType
    : T


第4个答案

// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type A1 = FlipArguments<() => boolean>;
type B1 = () => boolean;
type C1 = Expect<Equal<A1, B1>>;

type A2 = FlipArguments<(foo: string) => number>;
type B2 = (foo: string) => number;
type C2 = Expect<Equal<A2, B2>>;

type A3 = FlipArguments<(
  arg0: string,
  arg1: number,
  arg2: boolean,
) => void>;
type B3 = (
  arg0: boolean,
  arg1: number,
  arg2: string,
) => void;
type C3 = Expect<Equal<A3, B3>>;

type errors = [
  // @ts-expect-error(2344)
  FlipArguments<'string'>,
  // @ts-expect-error(2344)
  FlipArguments<{ key: 'value' }>,
  // @ts-expect-error(2344)
  FlipArguments<['apple', 'banana', 100, { a: 1 }]>,
  // @ts-expect-error(2344)
  FlipArguments<null | undefined>,
];

// ============= Your Code Here =============
type Reverse<T extends unknown[]> =
  T extends [infer Head, ...infer Tail]
  ? [...Reverse<Tail>, Head]
  : []

type FlipArguments<
  T extends (...args: any[]) => any
> =
  T extends (...args: infer A) => infer R
  ? (...args: Reverse<A>) => R
  : never

// ============== Alternatives ==============
type FlipArguments<
  T extends (...args: any[]) => any
> =
  T extends (...args: [...infer A]) => infer R
  ? (...args: Reverse<A>) => R
  : never;

type FlipArguments<T extends (...args: any[]) => any> =
  (...args: Reverse<Parameters<T>>) => ReturnType<T>;

type FlipArguments<
  T extends (...args: any[]) => any,
  Acc extends any[] = []
> =
  T extends (...args: infer A) => infer R
  ? A extends [infer Head, ...infer Tail]
    ? FlipArguments<(...args: Tail) => R, [Head, ...Acc]>
    : (...args: Acc) => R
  : never;



第5个答案

type Reverse<T extends unknown[]> = T extends [...infer Rest, infer Last] 
? [Last, ...Reverse<Rest>]
: T

type FlipArguments<T extends (...args: any) => unknown> = T extends (...args: infer ArgType) => infer Return
? (...args :Reverse<ArgType>) => Return
: never


第6个答案

type Reverse<T extends any[]> = T extends [...infer R, infer L] ? [L, ...Reverse<R>] : [];
type FlipArguments<T extends (...args: any[]) => unknown> = T extends (...args: infer P) => infer R ? (...args: Reverse<P>) => R : T;


第7个答案

type Reverse<T> = T extends [infer F, ...infer R] ? [...Reverse<R>,F] : []; 

type FlipArguments<T extends Function> = T extends (...args: infer Args) => infer Return ? (...args: Reverse<Args>) => Return : never;

第8个答案

// your answers
type Reverse<T> = T extends [infer First, ...infer Rest] ? [...Reverse<Rest>, First] : []; 
type FlipArguments<T> = T extends (...args: infer Args) => infer ReturnType ? (...args: Reverse<Args>) => ReturnType : never;


第9个答案

// your answers
type Reverse<T extends unknown[],R extends unknown[] =  []> = T extends [...infer Pre,infer Last] ? Reverse<Pre,[...R,Last]>:R;
type FlipArguments<T extends (...args: any) => any> = (...args:Reverse<Parameters<T>>)=>ReturnType<T>;


第10个答案

type Reverse<T extends any[]> = T extends [] ? [] : T extends [...infer F, infer R] ? [R, ...Reverse<F>] : T

type FlipArguments<T extends Function> = T extends (...args: infer P) => infer R ? (...args: Reverse<P>) => R : never
*/