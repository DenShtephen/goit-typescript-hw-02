// Варіант 1 рішення

let some: unknown;
some = "Text";
let str: string;

if (typeof some === "string") {
  str = some as string;
}

// Варіант 2 (але у ньому я не впевнений)

// let some:unknown;
// some = 'Text';
// let str: unknown;
// str = some;
