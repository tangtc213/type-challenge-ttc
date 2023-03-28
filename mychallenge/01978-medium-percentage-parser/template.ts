// 遇到判断就用extends，遇到循环就用in
type preSign = '-' | '+'
type PercentageParser<A extends string, S = ''> = A extends `${infer P extends preSign}${infer R}` ? PercentageParser<R, P> : A extends `${infer M}%` ? [S, M, '%'] : [S, A, '']


// js version
// 标准情况下
function PercentageParser1(str: string) {
    let sign = '';
    let num = '';
    let percent = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '-' || str[i] === '+') {
            sign = str[i];
        } else if (str[i] === '%') {
            percent = str[i];
        } else {
            num += str[i];
        }
    }
    return [sign, num, percent];
}

