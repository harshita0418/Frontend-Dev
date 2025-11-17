console.log("=== Type Conversion ===\n");

const values = ["50", "hello", false, null, "100px"];

values.forEach(value => {
    console.log(`Original: ${value} (${typeof value})`);
    console.log(`Number: ${Number(value)}`);
    console.log(`Boolean: ${Boolean(value)}`);
    console.log(`String: ${String(value)}`);
    console.log("---");
});
