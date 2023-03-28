// 实质是需要一个可以判断是否是False的类型
type False = 0 | '' | false | [] | null | undefined | Record<string, never>
type AnyOf1<T extends readonly any[]> = T[number] extends False ? false : true

// 第二种考虑用递归的方式来解决
type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer R] ? F extends False ? AnyOf<R> : true : false

// js version
function isFalse(item: any): item is False {
    return item === 0 || item === '' || item === false || (Array.isArray(item) && item.length === 0) || item === null || item === undefined || (typeof item === 'object' && Object.keys(item).length === 0);
}

// 非递归版本
function AnyOf1(arr: any[]) {
    return arr.some(item => !isFalse(item));
}

// 递归版本
function AnyOf2(arr: any[]): boolean {
    if (arr.length === 0) {
        return false;
    }
    if (!isFalse(arr[0])) {
        return true;
    }
    return AnyOf2(arr.slice(1));
}