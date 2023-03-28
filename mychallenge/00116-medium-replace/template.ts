type Replace<S extends string, From extends string, To extends string> = From extends '' ? S : S extends `${infer L}${From}${infer R}` ? `${L}${To}${R}` : S


// js version
function Replace1(str: string, from: string, to: string) {
    return str.replace(new RegExp(from, 'g'), to);
}   
