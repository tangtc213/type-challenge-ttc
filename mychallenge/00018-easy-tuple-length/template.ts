type Length<T extends readonly unknown[]> = T["length"];

// js version
function Length(arr: any[]) {
    return arr.length;
}
