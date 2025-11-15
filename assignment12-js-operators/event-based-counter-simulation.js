let count = 0;

function increment() {
    count++;
    console.log(`Count increased: ${count}`);
    
    function showScope() {
        console.log(`  [Inner function] Current count: ${count}`);
    }
    
    showScope();
}

function decrement() {
    count--;
    console.log(`Count decreased: ${count}`);
    
    function showScope() {
        console.log(`  [Inner function] Current count: ${count}`);
    }
    
    showScope();
}

console.log("=== Event-Based Counter Simulation ===");
console.log(`Initial Count: ${count}`);

console.log("\nSimulating clicks:");
increment();
increment();
increment();
decrement();
increment();
decrement();
decrement();

console.log(`\nFinal Count: ${count}`);
