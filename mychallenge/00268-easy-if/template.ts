type If<C extends boolean, T, F> = C extends true ? T : F;

// js version
function If(condition: boolean, trueValue: any, falseValue: any) {
    return condition ? trueValue : falseValue;
}

