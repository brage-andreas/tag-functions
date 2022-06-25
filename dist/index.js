export default function createTag(fn) {
    function tagFn(string, ...keys) {
        const baseArray = typeof string === "string" ? [string] : string;
        const joinableArray = baseArray.map((str, i) => `${str}${keys[i] ?? ""}`);
        return fn(joinableArray.join(""));
    }
    return tagFn;
}
