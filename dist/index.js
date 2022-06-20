export function createTag(fn) {
    function tagFn(string, ...keys) {
        const stringArr = typeof string === "string" ? [string] : string;
        const joinedArr = stringArr.map((str, i) => `${str}${keys[i] ?? ""}`);
        return fn(joinedArr.join(""));
    }
    return tagFn;
}
