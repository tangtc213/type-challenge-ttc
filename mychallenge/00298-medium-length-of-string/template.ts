// type LengthOfString<S extends string> = [...S]['length']
type LengthOfString<S extends string, A extends any[] = []> = S extends `${infer L}${infer R}` ? LengthOfString<R, [...A, 1]> : A['length']

//js version
function LengthOfString1(str: string) {
    return str.length;
}

//js version2 递归版本
function LengthOfString2(str: string, arr: any[] = []) : number {
    return str ? LengthOfString2(str.slice(1), [...arr, 1]) : arr.length;
}
