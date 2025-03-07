export function mapToObject<K extends string | number | symbol, T>(map: Map<K, T>): { [key in K]: T } {
    const obj = {} as { [key in K]: T };
    // map.forEach((value, key) => {
    //     obj[key] = value;
    // });
    const entries = [...map.entries()];
    for (let i = entries.length - 1; i >= 0; i--) {
        obj[entries[i][0]] = entries[i][1];
    }
    return obj;
}