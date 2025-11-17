"use strict";

console.log("=== Original Code Analysis ===\n");

console.log("Hoisting Explanation:");
console.log("1. var score is hoisted but initialized as undefined");
console.log("2. function announce() is fully hoisted");
console.log("3. let status is NOT hoisted (temporal dead zone)");
console.log("4. function startGame() is fully hoisted\n");

console.log("=== Fixed Version ===\n");

var score = 50;
console.log(score);

function announce() {
    console.log("Game started");
}
announce();

let status = "ready";

function startGame() {
    console.log(status);
}
startGame();

console.log("\n=== Arrow Function Version ===\n");

const announceArrow = () => {
    console.log("Game started");
};

const startGameArrow = () => {
    console.log(status);
};

announceArrow();
startGameArrow();

console.log("\nArrow functions are NOT hoisted like regular functions");
