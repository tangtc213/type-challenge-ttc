type Unshift<T extends unknown[], U> = [U, ...T]

// js version
function Unshift<T extends any[], U>(t: T, u: U) {
    return [u, ...t];
}