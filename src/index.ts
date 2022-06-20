export function createTag<T>(fn: (string: string) => T): {
	(string: string): T;
	(string: ReadonlyArray<string>, ...keys: ReadonlyArray<unknown>): T;
} {
	function tagFn(string: string): T;
	function tagFn(string: ReadonlyArray<string>, ...keys: ReadonlyArray<unknown>): T;
	function tagFn(string: ReadonlyArray<string> | string, ...keys: ReadonlyArray<unknown>): T {
		const stringArray = typeof string === "string" ? [string] : string;
		const joinedStringArray = stringArray.map((str, i) => `${str}${keys[i] ?? ""}`);

		return fn(joinedStringArray.join(""));
	}

	return tagFn;
}
