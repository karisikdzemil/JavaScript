class Product{
 title = "DEFAULT";
 imageUrl;
 description;
 price;
}

console.log(new Product());

const productList = {
   products: [
    // new Product()
    {
        title: "A Pillow",
        imageUrl: "https://linensociety.com/cdn/shop/products/heirloom-pillow_14294b09-8232-4d5d-a305-022b802669ab_1400x.jpg?v=1584402804",
        price: 19.99,
        description: "A soft pillow!"
    },
    {
        title: "A Carpet",
        imageUrl: "https://images.jdmagicbox.com/quickquotes/images_main/-92mbg0w7.jpg",
        price: 89.99,
        description: "A carpet which you might like - or not."
    },
   ],
   render(){
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for(prod of this.products){
        const prodEl = document.createElement("li");
        prodEl.className = "product-item";
        prodEl.innerHTML = `
        <div>
        <img src="${prod.imageUrl}" alt="${prod.title}">
        <div class="product-item__content">
        <h2>${prod.title}</h2>
        <h3>\$${prod.price}</h3>
        <p>${prod.description}</p>
        <button>Add to Cart</button>
        </div>
         </div>
        `;
        prodList.append(prodEl);
    }

    renderHook.append(prodList);
   }
}
productList.render();