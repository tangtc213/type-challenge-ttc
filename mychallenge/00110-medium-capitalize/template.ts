type MyCapitalize<S extends string> = S extends `${infer L}${infer R}` ? `${Uppercase<L>}${R}` : S 


// js version
function MyCapitalize1(str: string) {
    return str[0].toUpperCase() + str.slice(1);
}