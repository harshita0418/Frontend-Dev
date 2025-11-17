"use strict";

const rows = 5;

console.log("=== Pyramid Pattern ===\n");

for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}

console.log("\n=== Using var instead of let ===\n");

for (var i = 1; i <= rows; i++) {
    var pattern = "";
    for (var j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}

console.log("\nWith var, variables are function-scoped, not block-scoped");
console.log("This means 'i' and 'pattern' exist outside the loop");
