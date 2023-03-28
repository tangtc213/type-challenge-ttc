type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]


// js version
function Concat<T, U>(t: T, u: U): T & U {
    return { ...t, ...u };
}
