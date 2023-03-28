type PickByType<T, U> = {
    [K in keyof T as T[K] extends U ? K : never]: T[K]
}


interface Model {
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
}

type typeR = PickByType<Model, boolean>