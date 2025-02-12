export function mapToObject<K extends string | number | symbol, T>(map: Map<K, T>): { [key in K]: T } {
    const obj = {} as { [key in K]: T };
    map.forEach((value, key) => {
        obj[key] = value;
    });
    return obj;
}