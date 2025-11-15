const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

console.log("=== Dynamic Discount Evaluator ===");
console.log("Cart Items:");
cart.forEach(item => {
    console.log(`  ${item.item} (${item.category}): $${item.price}`);
});

let totalBeforeDiscount = cart.reduce((sum, item) => sum + item.price, 0);
console.log(`\nTotal Before Discount: $${totalBeforeDiscount}`);

let totalAfterDiscount = 0;

for (let item of cart) {
    let itemPrice = item.price;
    
    if (item.category === "electronics") {
        itemPrice = itemPrice * 0.90;
        console.log(`Applied 10% discount on ${item.item}: $${itemPrice.toFixed(2)}`);
    } else if (item.category === "fashion") {
        itemPrice = itemPrice * 0.95;
        console.log(`Applied 5% discount on ${item.item}: $${itemPrice.toFixed(2)}`);
    }
    
    totalAfterDiscount += itemPrice;
}

if (totalBeforeDiscount > 50000) {
    totalAfterDiscount = totalAfterDiscount * 0.95;
    console.log("\nExtra 5% overall discount applied (cart > $50000)");
}

console.log(`\nFinal Total: $${totalAfterDiscount.toFixed(2)}`);
console.log(`Total Savings: $${(totalBeforeDiscount - totalAfterDiscount).toFixed(2)}`);
