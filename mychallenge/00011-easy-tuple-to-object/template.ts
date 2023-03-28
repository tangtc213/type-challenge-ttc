type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [P in T[number]]: P
}

// js version
function TupleToObject(arr: any[]) {
    let result: Record<string, any> = {};
    for (let i = 0; i < arr.length; i++) {
        result[arr[i]] = arr[i];
    }
    return result;
}
