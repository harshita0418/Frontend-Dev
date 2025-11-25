const USERS_API = 'http://localhost:3004/users';
const ORDERS_API = 'http://localhost:3004/orders';
const PRODUCTS_API = 'http://localhost:3004/products';

document.addEventListener('DOMContentLoaded', function() {
    loadDashboardData();
});

function loadDashboardData() {
    Promise.all([
        fetch(USERS_API).then(r => r.json()),
        fetch(ORDERS_API).then(r => r.json()),
        fetch(PRODUCTS_API).then(r => r.json())
    ])
    .then(([users, orders, products]) => {
        updateDashboard(users.length, orders.length, products.length);
        document.getElementById('warningAlert').classList.add('hidden');
    })
    .catch(error => {
        console.error('Error loading data:', error);
        document.getElementById('warningAlert').classList.remove('hidden');
        loadPartialData();
    });
}

function updateDashboard(userCount, orderCount, productCount) {
    updateCard('user', userCount);
    updateCard('order', orderCount);
    updateCard('product', productCount);
}

function updateCard(type, count) {
    const skeleton = document.getElementById(`${type}Skeleton`);
    const content = document.getElementById(`${type}Content`);

    skeleton.classList.add('hidden');
    content.classList.remove('hidden');
    document.getElementById(`${type}Count`).textContent = count;
}

function loadPartialData() {
    fetch(USERS_API)
        .then(r => r.json())
        .then(users => updateCard('user', users.length))
        .catch(() => updateCard('user', 0));

    fetch(ORDERS_API)
        .then(r => r.json())
        .then(orders => updateCard('order', orders.length))
        .catch(() => updateCard('order', 0));

    fetch(PRODUCTS_API)
        .then(r => r.json())
        .then(products => updateCard('product', products.length))
        .catch(() => updateCard('product', 0));
}
