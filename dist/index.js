export default function createTag(fn) {
    function tagFn(string, ...keys) {
        const stringArray = typeof string === "string" ? [string] : string;
        const joinedStringArray = stringArray.map((str, i) => `${str}${keys[i] ?? ""}`);
        return fn(joinedStringArray.join(""));
    }
    return tagFn;
}
