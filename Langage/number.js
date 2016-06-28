
console.log(typeof 3);
console.log(typeof 3.14);

// Infinity
console.log(typeof (3 / 0));
console.log(3 / 0);
console.log(isFinite(3 / 0));
console.log(Number.isFinite(3 / 0)); // ES6

// NaN (Not a Number)
console.log(typeof Math.sqrt(-1));
console.log(Math.sqrt(-1));
console.log(parseInt('abc'));
console.log(Number(undefined));
console.log(isNaN(Math.sqrt(-1)));
console.log(Number.isNaN(Math.sqrt(-1))); // ES6