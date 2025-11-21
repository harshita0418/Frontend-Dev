const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 50000, stock: 5 },
    { id: 2, name: 'Mouse', category: 'Electronics', price: 500, stock: 2 },
    { id: 3, name: 'Desk', category: 'Furniture', price: 15000, stock: 8 },
    { id: 4, name: 'Chair', category: 'Furniture', price: 5000, stock: 1 }
];

function analyzeInventory() {
    const output = document.getElementById('output');
    
    const lowStock = products.filter(p => p.stock < 3);
    const sorted = products.sort((a, b) => a.price - b.price);
    const totalValue = products.reduce((t, p) => t + (p.price * p.stock), 0);
    
    let result = 'Low Stock:\n';
    lowStock.forEach(p => result += '  ' + p.name + ': ' + p.stock + '\n');
    result += '\nTotal Value: Rs.' + totalValue;
    
    output.textContent = result;
}
