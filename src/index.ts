export default function createTag<T>(fn: (string: string) => T): {
	(string: string): T;
	(string: ReadonlyArray<string>, ...keys: ReadonlyArray<unknown>): T;
} {
	function tagFn(string: string): T;
	function tagFn(
		string: ReadonlyArray<string>,
		...keys: ReadonlyArray<unknown>
	): T;
	function tagFn(
		string: ReadonlyArray<string> | string,
		...keys: ReadonlyArray<unknown>
	): T {
		const baseArray = typeof string === "string" ? [string] : string;
		const joinableArray = baseArray.map(
			(str, i) => `${str}${keys[i] ?? ""}`
		);

		return fn(joinableArray.join(""));
	}

	return tagFn;
}
