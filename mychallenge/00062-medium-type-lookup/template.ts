type LookUp<U, T> = U extends { type: T } ? U : never;

// js version
function LookUp1(obj: any, type: string) {
    return obj.find((o: any) => o.type === type);
}