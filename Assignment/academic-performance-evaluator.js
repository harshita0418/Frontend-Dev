const marks = [78, 85, 92, 65, 88];

let total = 0;
let isDetained = false;

for (let i = 0; i < marks.length; i++) {
    total += marks[i];
    if (marks[i] < 35) {
        isDetained = true;
    }
}

const average = total / marks.length;
const percentage = average;

console.log(`Total Marks: ${total}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);

if (isDetained) {
    console.log("Result: Detained (Subject score below 35)");
} else if (percentage >= 85) {
    console.log("Result: Promoted with Distinction");
} else if (percentage >= 50) {
    console.log("Result: Promoted");
} else {
    console.log("Result: Detained");
}
