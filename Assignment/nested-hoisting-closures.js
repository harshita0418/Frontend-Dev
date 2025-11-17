"use strict";

console.log("=== Original Code ===\n");

function outer() {
    console.log("Outer count:", count);
    var count = 5;
    
    function inner() {
        console.log("Inner count:", count);
        var count = 10;
    }
    
    inner();
}

outer();

console.log("\n=== Explanation ===");
console.log("1. In outer(), count is hoisted but undefined when first logged");
console.log("2. In inner(), count is also hoisted and creates a new scope");
console.log("3. Each function has its own 'count' variable");
console.log("4. Hoisting moves declarations to the top of their scope\n");

console.log("=== Arrow Function Version ===\n");

function outerArrow() {
    console.log("Outer count:", count);
    var count = 5;
    
    const inner = () => {
        console.log("Inner count:", count);
        var count = 10;
    };
    
    inner();
}

outerArrow();

console.log("\nArrow functions behave the same way with hoisting");
console.log("The difference is in 'this' binding, not variable hoisting");
