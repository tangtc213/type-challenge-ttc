type MyExclude<T, U> = T extends U ? never : T;


// js version
function MyExclude<T, U>(arr: any[], keys : any[]) {
    return arr.filter((item) => keys.includes(item));
}
