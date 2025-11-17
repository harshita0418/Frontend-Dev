const currentSalary = 50000;
const annualIncrementRate = 8;

const salaryProjection = [];

let salary = currentSalary;

for (let year = 1; year <= 5; year++) {
    salary = salary * (1 + annualIncrementRate / 100);
    salaryProjection.push({
        Year: year,
        Salary: `$${Math.round(salary)}`
    });
}

console.log("=== 5-Year Salary Projection ===");
console.table(salaryProjection);
