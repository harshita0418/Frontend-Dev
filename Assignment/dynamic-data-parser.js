"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidData = [];

console.log("=== Dynamic Data Parser ===\n");

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    
    const asNumber = Number(value);
    const asBoolean = Boolean(value);
    const asString = String(value);
    
    console.log(`Original: ${value}`);
    console.log(`Number: ${asNumber}`);
    console.log(`Boolean: ${asBoolean}`);
    console.log(`String: ${asString}`);
    
    if (isNaN(asNumber) || value === " " || value === "100px") {
        invalidData.push(value);
        console.log("Status: INVALID\n");
    } else {
        validNumbers.push(asNumber);
        console.log("Status: VALID\n");
    }
}

console.log("=== Report ===");
console.log("Valid Numbers:", validNumbers);
console.log("Invalid Data:", invalidData);
