const menu = { Burger: 150, Pizza: 250, Pasta: 200, Salad: 100 };

function calculateBill(items) {
    try {
        const prices = items.map(item => {
            if (!menu[item]) throw new Error('Invalid item: ' + item);
            return menu[item];
        });
        return prices.reduce((sum, p) => sum + p, 0);
    } catch (e) {
        throw e;
    }
}

function validOrder() {
    const output = document.getElementById('output');
    try {
        const total = calculateBill(['Burger', 'Pizza']);
        output.textContent = 'Order: Burger, Pizza\nTotal: Rs.' + total;
    } catch (e) {
        output.textContent = 'Error: ' + e.message;
    }
}

function invalidOrder() {
    const output = document.getElementById('output');
    try {
        const total = calculateBill(['Burger', 'InvalidItem']);
        output.textContent = 'Total: Rs.' + total;
    } catch (e) {
        output.textContent = 'Error Caught: ' + e.message;
    }
}
