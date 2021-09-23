

export function testSearch<T>(object: T, properties: Array<keyof T>, query: string): boolean {
    if (query === "") {
        return true;
    }
    return properties.some((property) => {
        const value = object[property];
        if (typeof value == "string") {
            return value.toString().toString().includes(query.toLocaleLowerCase())
        }
        return false;
    });
}