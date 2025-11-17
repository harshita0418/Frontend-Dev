console.log("=== String to Number Conversion ===\n");

const str = "45.67";

const converted = parseFloat(str);

console.log(`Original String: "${str}"`);
console.log(`Converted Number: ${converted}`);
console.log(`Is Valid Number: ${!isNaN(converted)}`);
console.log(`Type: ${typeof converted}`);
