// ts没有提供直接的方法，但是可以通过递归的方式来实现
type StringToUnion<T extends string> = T extends `${infer F}${infer R}` ? F | StringToUnion<R> : never


// js version
function StringToUnion1(str: string) {
    return str.split('').reduce((prev, cur) => {
        return prev + '|' + cur;
    });
}
