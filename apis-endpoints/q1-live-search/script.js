$(document).ready(function() {
    const API_URL = 'http://localhost:3001/products';
    let debounceTimer;

    $('#searchInput').on('keyup', function() {
        clearTimeout(debounceTimer);
        const searchQuery = $(this).val().trim();
        
        if (searchQuery.length === 0) {
            $('#resultsContainer').html('<p class="no-results">Type to search products</p>');
            $('#loadingIndicator').removeClass('active');
            return;
        }

        $('#loadingIndicator').addClass('active');

        debounceTimer = setTimeout(function() {
            performSearch(searchQuery);
        }, 500);
    });

    function performSearch(query) {
        $.ajax({
            url: API_URL,
            method: 'GET',
            data: { q: query },
            dataType: 'json',
            success: function(products) {
                $('#loadingIndicator').removeClass('active');
                
                if (products.length === 0) {
                    $('#resultsContainer').html('<p class="no-results">No products found</p>');
                    return;
                }

                let html = '';
                products.forEach(product => {
                    html += `
                        <div class="product-card">
                            <img src="${product.image}" alt="${product.name}" class="product-image">
                            <div class="product-info">
                                <div class="product-name">${product.name}</div>
                                <div class="product-price">$${product.price.toFixed(2)}</div>
                            </div>
                        </div>
                    `;
                });

                $('#resultsContainer').html(html);
            },
            error: function() {
                $('#loadingIndicator').removeClass('active');
                $('#resultsContainer').html('<p class="no-results">Error loading products</p>');
            }
        });
    }
});
