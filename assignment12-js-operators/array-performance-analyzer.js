const scores = [];
for (let i = 0; i < 8; i++) {
    scores.push(Math.floor(Math.random() * 71) + 30);
}

console.log("=== Array Performance Analyzer ===");
console.log(`Student Scores: ${scores.join(', ')}`);

const highest = Math.max(...scores);
const lowest = Math.min(...scores);
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
const passed = scores.filter(score => score >= 50).length;

console.log(`\nPerformance Summary:`);
console.log(`Highest Score: ${highest}`);
console.log(`Lowest Score: ${lowest}`);
console.log(`Average Score: ${average.toFixed(2)}`);
console.log(`Students Passed (≥50): ${passed} out of ${scores.length}`);
