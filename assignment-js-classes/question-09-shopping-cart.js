class Cart {
    constructor() {
        this.items = [
            { name: 'Laptop', price: 1200, quantity: 1 },
            { name: 'Mouse', price: 25, quantity: 2 },
            { name: 'Keyboard', price: 80, quantity: 1 },
            { name: 'Monitor', price: 350, quantity: 1 },
            { name: 'Headphones', price: 150, quantity: 2 }
        ];
        this.discount = 0;
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    getItemsForDisplay() {
        let result = 'Cart Items:\n' + '='.repeat(60) + '\n\n';
        this.items.forEach(item => {
            const itemTotal = item.price * item.quantity;
            result += `${item.name}: ${item.price} x ${item.quantity} = ${itemTotal}\n`;
        });
        return result;
    }

    applyCoupon(code) {
        const couponRegex = /^(SAVE|DISC)(\d+)$/;
        const match = code.match(couponRegex);

        if (!match) {
            return { valid: false, message: 'Invalid coupon format. Use SAVE20 or DISC10' };
        }

        const discountPercent = parseInt(match[2]);
        this.discount = (this.getTotal() * discountPercent) / 100;

        return {
            valid: true,
            message: `Coupon ${code} applied! Discount: ${this.discount.toFixed(2)} (${discountPercent}%)`
        };
    }

    getFinalTotal() {
        return this.getTotal() - this.discount;
    }
}

const cart = new Cart();
let currentTotal = 0;

function displayCart() {
    const output = document.getElementById('cartOutput');
    output.textContent = cart.getItemsForDisplay();
}

function calculateTotal() {
    const output = document.getElementById('cartOutput');
    currentTotal = cart.getTotal();
    output.textContent = cart.getItemsForDisplay() + `\nSubtotal: ${currentTotal.toFixed(2)}`;
}

function applyCoupon() {
    const couponCode = document.getElementById('couponCode').value.trim().toUpperCase();
    const output = document.getElementById('couponOutput');

    if (!couponCode) {
        output.innerHTML = '<span class="error">Please enter a coupon code</span>';
        return;
    }

    const result = cart.applyCoupon(couponCode);

    if (result.valid) {
        output.innerHTML = `<span class="success">${result.message}</span>`;
        const finalOutput = document.getElementById('finalTotal');
        finalOutput.textContent = `Subtotal: ${currentTotal.toFixed(2)}\nDiscount: -${cart.discount.toFixed(2)}\n${'='.repeat(30)}\nFinal Total: ${cart.getFinalTotal().toFixed(2)}`;
    } else {
        output.innerHTML = `<span class="error">${result.message}</span>`;
    }
}
