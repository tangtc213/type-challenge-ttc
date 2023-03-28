type TrimLeft<S extends string> = S extends `${' ' | '\t' | '\n'}${infer R}` ? TrimLeft<R> : S

// js version
function TrimLeft1(str: string) {
    return str.replace(/^\s+/, '');
}