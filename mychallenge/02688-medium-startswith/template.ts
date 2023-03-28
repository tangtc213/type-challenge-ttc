type StartsWith<T extends string, U extends string> = T extends `${U}${infer R}` ? true : false


// js version
function StartsWith1(str: string, prefix: string) {
    return str.startsWith(prefix);
}
