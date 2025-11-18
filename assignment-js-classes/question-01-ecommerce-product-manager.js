class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(discountPercent) {
        const discountAmount = this.price * (discountPercent / 100);
        return this.price - discountAmount;
    }

    getDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Price: $${this.price} | Category: ${this.category}`;
    }
}

const products = [
    new Product(1, 'Laptop', 1500, 'Electronics'),
    new Product(2, 'Mouse', 25, 'Electronics'),
    new Product(3, 'Keyboard', 80, 'Electronics'),
    new Product(4, 'Monitor', 450, 'Electronics'),
    new Product(5, 'Headphones', 2500, 'Audio'),
    new Product(6, 'Webcam', 120, 'Electronics'),
    new Product(7, 'Speaker', 3200, 'Audio')
];

function displayProducts() {
    const output = document.getElementById('output');
    let result = 'All Products:\n' + '='.repeat(80) + '\n\n';
    products.forEach(product => {
        result += product.getDetails() + '\n';
    });
    output.textContent = result;
    console.log(products);
}

function filterExpensiveProducts() {
    const output = document.getElementById('output');
    const expensive = products.filter(p => p.price > 1000);
    let result = 'Products with Price > $1000:\n' + '='.repeat(80) + '\n\n';
    expensive.forEach(product => {
        result += product.getDetails() + '\n';
    });
    output.textContent = result;
    console.log(expensive);
}

function applyDiscountDemo() {
    const output = document.getElementById('output');
    let result = 'Products with 10% Discount Applied:\n' + '='.repeat(80) + '\n\n';
    products.forEach(product => {
        const discountedPrice = product.applyDiscount(10);
        result += `${product.name}: Original $${product.price} → Discounted $${discountedPrice.toFixed(2)}\n`;
    });
    output.textContent = result;
}
