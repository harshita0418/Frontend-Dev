"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const validEntries = [];
const errors = [];

console.log("=== JSON Audit ===\n");

for (let i = 0; i < rawData.length; i++) {
    try {
        const parsed = JSON.parse(rawData[i]);
        
        if (!parsed.hasOwnProperty('user') || !parsed.hasOwnProperty('age')) {
            throw new Error("Missing required keys: user or age");
        }
        
        parsed.age = Number(parsed.age);
        
        if (parsed.age < 18) {
            console.log(`Line ${i + 1}: User ${parsed.user} is under 18 - Filtered out`);
            continue;
        }
        
        validEntries.push(parsed);
        console.log(`Line ${i + 1}: VALID - ${JSON.stringify(parsed)}`);
        
    } catch (error) {
        errors.push({ line: i + 1, error: error.message, data: rawData[i] });
        console.error(`Line ${i + 1}: ERROR - ${error.message}`);
    }
}

console.log("\n=== Final Report ===");
console.log("Valid Entries:", validEntries);
console.log("Errors:", errors);
console.log(`Total Valid: ${validEntries.length}`);
console.log(`Total Errors: ${errors.length}`);
