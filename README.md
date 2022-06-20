<div align="center">
	<img src="https://i.imgur.com/LVKkeEH.png" alt="Tag Functions Logo" />
	<br />
	<br />
</div>

Why would you want a tag?

Normally a function works like this:

```ts
const greetFn = (name: string) => `Hello, ${name}`;

greetFn("Kevin"); // Works 👍
greetFn`Kevin`; // Errors 👎
```

But using `createTag`, the same function will also work as a tag with minimum effort:

```ts
const greetFn = (name: string) => `Hello, ${name}`;
const greet = createTag(greetFn);

greet("Kevin"); // Works 👍
greet`Kevin`; // Works 👍
```

This allows a higher flexibility for string-based functions.
