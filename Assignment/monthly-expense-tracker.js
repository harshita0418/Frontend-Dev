const expenses = [1500, 800, 5000, 1200, 600];
const categories = ["Food", "Travel", "Rent", "Bills", "Leisure"];

let total = 0;
for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
}

const average = total / expenses.length;
const totalBeforeTax = total;

const taxRate = 0.10;
total *= (1 + taxRate);

console.log("=== Monthly Expense Report ===");
for (let i = 0; i < categories.length; i++) {
    console.log(`${categories[i]}: $${expenses[i]}`);
}
console.log(`\nTotal Before Tax: $${totalBeforeTax.toFixed(2)}`);
console.log(`Average Expense: $${average.toFixed(2)}`);
console.log(`Total After Tax (10%): $${total.toFixed(2)}`);
