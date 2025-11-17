console.log("=== Without Strict Mode ===\n");

function demoNonStrict(a, b) {
    total = 10;
    console.log("Duplicate parameters allowed");
    console.log("Undeclared variable 'total' created globally");
    console.log("Delete on variable allowed");
    return total;
}

demoNonStrict(5, 10);

console.log("\n=== With Strict Mode ===\n");

"use strict";

function demoStrict(a, b) {
    let total = 10;
    console.log("Parameters must be unique");
    console.log("Variables must be declared");
    console.log("Cannot delete variables");
    return total;
}

demoStrict(5, 10);

console.log("\n=== ES6 Correct Version ===\n");

const demo = (param1, param2) => {
    const total = param1 + param2;
    console.log(`Sum: ${total}`);
    return total;
};

demo(5, 10);

console.log("\nStrict mode prevents:");
console.log("1. Duplicate parameter names");
console.log("2. Undeclared variables");
console.log("3. Deleting variables");
console.log("4. Using reserved keywords");
