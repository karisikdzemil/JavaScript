class Product {
  title = "DEFAULT";
  imageUrl;
  description;
  price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

console.log(new Product());

const productList = {
  products: [
    new Product(
      "A Pillow",
      "https://linensociety.com/cdn/shop/products/heirloom-pillow_14294b09-8232-4d5d-a305-022b802669ab_1400x.jpg?v=1584402804",
      19.99,
      "A soft pillow!"
    ),
    new Product(
        "A Carpet",
        "https://images.jdmagicbox.com/quickquotes/images_main/-92mbg0w7.jpg",
        89.99,
        "A carpet which you might like - or not."
      )
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
        <div>
        <img src="${prod.imageUrl}" alt="${prod.title}">
        <div class="product-item__content">
        <h2>${prod.title}</h2>
        <h3>${prod.price}</h3>
        <p>$${prod.description}</p>
        <button>Add to Cart</button>
        </div>
         </div>
        `;
      prodList.append(prodEl);
    }

    renderHook.append(prodList);
  },
};
productList.render();
