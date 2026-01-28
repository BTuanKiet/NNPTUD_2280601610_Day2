const API_URL = "https://api.escuelajs.co/api/v1/products";

fetch(API_URL)
  .then(response => response.json()) // JSON → object
  .then(products => {
    renderProducts(products);
  })
  .catch(error => console.error("Lỗi:", error));

function renderProducts(products) {
  const container = document.getElementById("productList");
  container.innerHTML = "";

  products.forEach(product => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td class="product-id">${product.id}</td>
      <td><img src="${product.images[0]}" alt="${product.title}" class="product-image"></td>
      <td class="product-title">${product.title}</td>
      <td class="product-price">$${product.price}</td>
      <td class="product-desc">${product.description}</td>
      <td class="product-category">${product.category.name}</td>
    `;

    container.appendChild(row);
  });
}
