"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

console.log("=== Smart Calculator ===\n");

operations.forEach(operation => {
    try {
        let result;
        
        switch(operation) {
            case "add":
                result = num1 + num2;
                break;
                
            case "subtract":
                result = num1 - num2;
                break;
                
            case "divide":
                if (num2 === 0) {
                    throw new Error("Cannot divide by zero");
                }
                result = num1 / num2;
                break;
                
            case "power":
                result = Math.pow(num1, num2);
                break;
                
            case "root":
                if (num1 < 0) {
                    throw new Error("Cannot calculate root of negative number");
                }
                result = Math.sqrt(num1);
                break;
                
            default:
                throw new Error("InvalidOperationError: Operation not recognized");
        }
        
        console.log(`${operation.toUpperCase()}: ${num1} and ${num2} = ${result}`);
        
    } catch (error) {
        console.error(`${operation.toUpperCase()}: ERROR - ${error.message}`);
    }
});
