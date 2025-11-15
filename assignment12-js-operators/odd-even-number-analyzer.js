const numbers = [];
for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

console.log("=== Odd-Even Number Analyzer ===");

const results = [];

for (let num of numbers) {
    let result;
    
    if (num % 3 === 0 && num % 5 === 0) {
        result = "FizzBuzz";
    } else if (num % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }
    
    results.push({ number: num, classification: result });
}

console.log("\nNumber Classifications:");
results.forEach(item => {
    console.log(`${item.number}: ${item.classification}`);
});

const evenCount = results.filter(item => item.classification === "Even").length;
const oddCount = results.filter(item => item.classification === "Odd").length;
const fizzBuzzCount = results.filter(item => item.classification === "FizzBuzz").length;

console.log(`\nSummary:`);
console.log(`Even: ${evenCount}`);
console.log(`Odd: ${oddCount}`);
console.log(`FizzBuzz: ${fizzBuzzCount}`);
