"use strict";

async function fetchProducts() {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '<div class="loading">Loading products...</div>';
    
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        
        if (!response.ok) {
            throw new Error('Failed to load products. Please try again.');
        }
        
        const products = await response.json();
        
        productsDiv.innerHTML = '';
        
        products.forEach(product => {
            console.log(`Product: ${product.title}`);
            console.log(`Price: ${product.price}`);
            console.log(`Image: ${product.image}`);
            console.log('---');
            
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <div class="price">${product.price}</div>
                <a href="${product.image}" target="_blank" class="image-url">View Image</a>
            `;
            productsDiv.appendChild(card);
        });
        
    } catch (error) {
        productsDiv.innerHTML = `<div class="error">${error.message}</div>`;
        console.error(error);
    }
}

document.getElementById('fetchProducts').addEventListener('click', fetchProducts);
