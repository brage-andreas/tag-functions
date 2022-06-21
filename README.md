<div align="center">
	<img src="https://i.imgur.com/LVKkeEH.png" alt="Tag Functions Logo" />
	<br />
	<br />
</div>

# Install

`npm i @drango/tag-functions`

# About

Why would you want a tag?

Normally a function works like this:

```ts
const greet = (name: string) => `Hello, ${name}`;

greet("Kevin"); // Works 👍
greet`Kevin`; // Errors 👎
```

But using `createTag`, the same function will also work as a tag with minimum effort:

```ts
import createTag from "@drango/tag-functions";

const greetFn = (name: string) => `Hello, ${name}`;
const greet = createTag(greetFn);

greet("Kevin"); // Works 👍
greet`Kevin`; // Works 👍
```
