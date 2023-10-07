export default function isDefined<T>(value:T, msg?:string): asserts value is NonNullable<T> {
    if (value === null || value === undefined)
        throw Error (msg || `Expect ${value} to be defined. ${msg}`)
}
