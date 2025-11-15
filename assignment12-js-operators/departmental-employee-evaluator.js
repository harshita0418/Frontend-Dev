const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

console.log("=== Departmental Employee Evaluator ===");

for (let i = 0; i < departments.length; i++) {
    const departmentName = departments[i][0];
    const score = departments[i][1];
    
    let performance;
    
    if (score >= 90) {
        performance = "Excellent";
    } else if (score >= 75 && score <= 89) {
        performance = "Good";
    } else if (score >= 60 && score <= 74) {
        performance = "Average";
    } else {
        performance = "Needs Improvement";
    }
    
    console.log(`${departmentName}: ${score} - ${performance}`);
}

const avgScore = departments.reduce((sum, dept) => sum + dept[1], 0) / departments.length;
console.log(`\nAverage Score Across Departments: ${avgScore.toFixed(2)}`);

const topDepartment = departments.reduce((max, dept) => dept[1] > max[1] ? dept : max);
console.log(`Top Performing Department: ${topDepartment[0]} (${topDepartment[1]})`);
