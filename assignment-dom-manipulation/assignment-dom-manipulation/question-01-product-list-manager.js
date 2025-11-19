const productInput = document.getElementById('productInput');
const addBtn = document.getElementById('addBtn');
const productList = document.getElementById('productList');

addBtn.addEventListener('click', () => {
    const productName = productInput.value.trim();
    if (productName === '') {
        alert('Please enter a product name');
        return;
    }

    const li = document.createElement('li');
    li.className = 'product-item';
    li.innerHTML = `
        <span class="product-name">${productName}</span>
        <div class="product-actions">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    productList.appendChild(li);
    productInput.value = '';
});

productList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        e.target.closest('.product-item').remove();
    }

    if (e.target.classList.contains('edit-btn')) {
        const productItem = e.target.closest('.product-item');
        const productName = productItem.querySelector('.product-name');
        const currentName = productName.textContent;

        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'edit-input';
        input.value = currentName;

        productName.classList.add('editing');
        productName.parentNode.insertBefore(input, productName.nextSibling);
        input.focus();

        function saveEdit() {
            productName.textContent = input.value.trim() || currentName;
            productName.classList.remove('editing');
            input.remove();
        }

        input.addEventListener('blur', saveEdit);
        input.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                saveEdit();
            }
        });
    }
});

document.addEventListener('click', (e) => {
    const editInputs = document.querySelectorAll('.edit-input');
    editInputs.forEach(input => {
        if (!input.contains(e.target) && !e.target.classList.contains('edit-btn')) {
            const productItem = input.closest('.product-item');
            const productName = productItem.querySelector('.product-name');
            productName.textContent = input.value.trim() || productName.textContent;
            productName.classList.remove('editing');
            input.remove();
        }
    });
});
