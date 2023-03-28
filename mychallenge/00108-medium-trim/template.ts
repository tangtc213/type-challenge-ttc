type Trim<S extends string> = S extends `${' ' | '\t' | '\n'}${infer R}` ? Trim<R> : S extends `${infer L}${' ' | '\t' | '\n'}` ? Trim<L> : S


// js version
function Trim1(str: string) {
    return str.replace(/^\s+|\s+$/g, '');
}   
