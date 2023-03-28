type OmitByType<T, U> = {
    [P in keyof T as T[P] extends U ? never : P]: T[P]
}


// js version
function omitByType1(obj: Record<string, any>, type: keyof Record<string, any>) {
    return Object.keys(obj).reduce((acc, key) => {
        if (typeof obj[key] !== type) {
            acc[key] = obj[key];
        }
        return acc;
    }, {} as Record<string, any>);
}