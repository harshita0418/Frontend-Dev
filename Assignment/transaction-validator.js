"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

console.log("=== Transaction Validator ===\n");

for (let i = 0; i < transactions.length; i++) {
    try {
        const transaction = transactions[i];
        
        if (transaction === null) {
            throw new Error("Null transaction entry");
        }
        
        if (!transaction.hasOwnProperty('id')) {
            throw new Error("Missing transaction ID");
        }
        
        if (!transaction.hasOwnProperty('amount')) {
            throw new Error("Missing transaction amount");
        }
        
        if (transaction.amount < 0) {
            throw new Error("Negative amount not allowed");
        }
        
        validTransactions.push(transaction);
        console.log(`Transaction ${transaction.id}: VALID - Amount: $${transaction.amount}`);
        
    } catch (error) {
        invalidTransactions.push({ index: i, error: error.message });
        console.error(`Transaction at index ${i}: INVALID - ${error.message}`);
    }
}

console.log("\n=== Final Report ===");
console.log(`Valid Transactions: ${validTransactions.length}`);
console.log(`Invalid Transactions: ${invalidTransactions.length}`);
console.log("Valid:", validTransactions);
console.log("Invalid:", invalidTransactions);
