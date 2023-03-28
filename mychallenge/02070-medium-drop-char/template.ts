type DropChar<S, C extends string> = S extends `${infer F}${C}${infer R}` ? DropChar<`${F}${R}`, C> : S


// js version
function DropChar1(str: string, char: string) {
    return str.split(char).join('');
}

function DropChar2(str: string, char: string) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== char) {
            result += str[i];
        }
    }
    return result;
}

function DropChar3(str: string, char: string) {
    return [...str].reduce((acc, cur) => {
        if (cur !== char) {
            acc += cur;
        }
        return acc;
    }, '');
}