type ReplaceAll<S extends string, From extends string, To extends string> = From extends '' ? S : S extends `${infer L}${From}${infer R}` ? `${L}${To}${ReplaceAll<R, From, To>}` : S 


// js version
function ReplaceAll1(str: string, from: string, to: string) {
    return str.replace(new RegExp(from, 'g'), to);
}
