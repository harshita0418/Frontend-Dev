const x = 16.75;

console.log("=== Math Utility Dashboard ===");
console.log(`Input Number: ${x}`);

const rounded = Math.round(x);
const squareRoot = Math.sqrt(x);
const cubed = Math.pow(x, 3);
const randomNum = Math.floor(Math.random() * 41) + 10;

console.log(`\nResults:`);
console.log(`Rounded Value: ${rounded}`);
console.log(`Square Root: ${squareRoot.toFixed(2)}`);
console.log(`Power (x³): ${cubed.toFixed(2)}`);
console.log(`Random Number (10-50): ${randomNum}`);

console.log(`\nFormatted Summary:`);
console.log(`The number ${x} rounds to ${rounded}, has a square root of ${squareRoot.toFixed(2)}, and cubed equals ${cubed.toFixed(2)}. Random number generated: ${randomNum}`);
