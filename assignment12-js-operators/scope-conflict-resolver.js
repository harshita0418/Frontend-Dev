let bonus = 5000;

function calculateSalary() {
    const salary = 40000;
    const isPermanent = true;
    
    let totalSalary;
    
    if (isPermanent) {
        totalSalary = salary + bonus;
        console.log(`Employee is permanent. Total Salary: $${totalSalary}`);
    } else {
        totalSalary = salary;
        console.log(`Employee is not permanent. Total Salary: $${totalSalary}`);
    }
    
    return totalSalary;
}

console.log("=== Scope Conflict Resolver ===");
console.log(`Global Bonus: $${bonus}`);
calculateSalary();

console.log("\nChanging isPermanent to false:");
function calculateSalaryNonPermanent() {
    const salary = 40000;
    const isPermanent = false;
    
    let totalSalary;
    
    if (isPermanent) {
        totalSalary = salary + bonus;
        console.log(`Employee is permanent. Total Salary: $${totalSalary}`);
    } else {
        totalSalary = salary;
        console.log(`Employee is not permanent. Total Salary: $${totalSalary}`);
    }
    
    return totalSalary;
}

calculateSalaryNonPermanent();
console.log(`Global bonus remains: $${bonus}`);
