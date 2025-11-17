"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("=== Employee Bonus Calculator ===\n");

for (let i = 0; i < employees.length; i++) {
    try {
        const employee = employees[i];
        
        const salary = Number(employee.salary);
        const years = Number(employee.years);
        
        if (isNaN(salary) || isNaN(years)) {
            throw new Error("Invalid salary or years data");
        }
        
        let bonus;
        if (years > 3) {
            bonus = salary * 0.1;
        } else {
            bonus = salary * 0.05;
        }
        
        const total = salary + bonus;
        
        console.log(`Employee: ${employee.name}`);
        console.log(`Salary: $${salary}`);
        console.log(`Years of Service: ${years}`);
        console.log(`Bonus: $${bonus.toFixed(2)}`);
        console.log(`Total Compensation: $${total.toFixed(2)}\n`);
        
    } catch (error) {
        console.error(`Error processing employee: ${error.message}\n`);
    }
}
