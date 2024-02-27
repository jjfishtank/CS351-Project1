const productContainer = document.getElementById("productContainer");

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("col", "mb-5");
  card.innerHTML = `
    <div class="card h-100">
      <img class="card-img-top" src="${product.imageURL}" alt="${product.name} Thumbnail">
      <div class="card-body p-4">
        <div class="text-center">
          <h5 class="fw-bolder">${product.name}</h5>
          $${product.price.toFixed(2)}
        </div>
      </div>
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
          <a class="btn btn-outline-dark mt-auto" href="Products/product${product.id}.html">View product</a>
        </div>
      </div>
    </div>
  `;
  productContainer.appendChild(card);
});
