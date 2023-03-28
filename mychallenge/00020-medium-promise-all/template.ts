declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<{
    [K in keyof T]: T[K] extends Promise<infer U> ? U : T[K]
}>;

// js version
function PromiseAll1(values: any[]) {
    return new Promise((resolve, reject) => {
        const result: any[] = [];
        let count = 0;
        for (let i = 0; i < values.length; i++) {
            Promise.resolve(values[i]).then(
                (value) => {
                    result[i] = value;
                    count++;
                    if (count === values.length) {
                        resolve(result);
                    }
                },
                (err) => {
                    reject(err);
                }
            );
        }
    });
}

