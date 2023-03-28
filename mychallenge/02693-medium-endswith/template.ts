type EndsWith<T extends string, U extends string> = T extends `${infer R}${U}` ? true : false


// js version
function EndsWith1(str: string, suffix: string) {
    return str.endsWith(suffix);
}
