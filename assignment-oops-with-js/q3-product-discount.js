function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
    return this.price - (this.price * percent / 100);
};

function applyDiscounts() {
    const output = document.getElementById('output');
    const p1 = new Product('Laptop', 50000);
    const p2 = new Product('Phone', 30000);
    const p3 = new Product('Tablet', 20000);
    
    let result = 'Product Discounts:\n';
    result += p1.name + ': Rs.' + p1.price + ' - 10% = Rs.' + p1.applyDiscount(10).toFixed(2) + '\n';
    result += p2.name + ': Rs.' + p2.price + ' - 15% = Rs.' + p2.applyDiscount(15).toFixed(2) + '\n';
    result += p3.name + ': Rs.' + p3.price + ' - 20% = Rs.' + p3.applyDiscount(20).toFixed(2);
    
    output.textContent = result;
}
