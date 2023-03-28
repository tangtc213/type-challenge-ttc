type Push<T extends unknown[], U> = [...T, U]


// js version
function Push<T extends any[], U>(t: T, u: U) {
    return [...t, u];
}
