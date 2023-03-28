// type Includes<T extends readonly any[], U> = U extends T[number] ? true : false;
import { Equal } from "@type-challenges/utils";
export type Includes<T extends readonly any[], U> = T extends [infer Head, ...infer Tail] ? Equal<Head, U> extends true ? true : Includes<Tail, U> : false;

// js version 1
function Includes1<T extends any[], U>(t: T, u: U): boolean {
    return t.includes(u);
}

// js version 2
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