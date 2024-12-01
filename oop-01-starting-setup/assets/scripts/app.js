class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ElementAttribute {
  constructor(attrName, AttrValue){
    this.name = attrName;
    this.value = AttrValue;
  }
}

class Component{

  constructor(renderHookId){
    this.hookId = renderHookId;
  }
  createRootElement(tag, cssClasses, attributes){
    const rootElement = document.createElement(tag);
    if(cssClasses){
      rootElement.className = cssClasses;
    }
    if(attributes && attributes.length > 0){
      for(const attr of attributes){
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
  document.getElementById(this.hookId).append(rootElement);
  return rootElement;
  }
}

class ShoppingCart extends Component{
  items = [];

  set cartItems(value){
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: /$${this.totalAmount.toFixed(2)}</h2>`;
  }

  get totalAmount(){
    const sum = this.items.reduce((prevValue, curItem)=>{
      return prevValue + curItem.price;
    }, 0);
    return sum;
  }

  constructor(renderHookId){
    super(renderHookId);
  }

  addProduct(product){
    const uptadetItems = [...this.items];
    uptadetItems.push(product);
    this.cartItems = uptadetItems;
  }

  render (){
    const cartEl = this.createRootElement("section", "cart");
    cartEl.innerHTML = `
      <h2>Total: /$${0}</h2>
      <button>Order Now!</button>
    `;
    this.totalOutput = cartEl.querySelector("h2");
  }
}

class ProductItem extends Component{
  constructor(product) {
    this.product = product;
  }

  addToCard(){
   App.addProductToCard(this.product);
  }
  render() {
    const prodEl = this.createRootElement('li', 'product-item');
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
      const addCardButton = prodEl.querySelector("button");
      addCardButton.addEventListener("click", this.addToCard.bind(this));
  }
}

  class ProductList {
    products = [
      new Product(
        'A Pillow',
        'https://cdn.thewirecutter.com/wp-content/media/2023/01/bedpillows-2048px-9987.jpg?auto=webp&quality=75&width=1024',
        'A soft pillow!',
        19.99
      ),
      new Product(
        'A Carpet',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
        'A carpet which you might like - or not.',
        89.99
      )
    ];

    constructor() {}

    render() {
      const prodList = document.createElement('ul');
      prodList.className = 'product-list';
      for (const prod of this.products) {
        const productItem = new ProductItem(prod);
        const prodEl = productItem.render();
        prodList.append(prodEl);
      }
      return prodList;
    }
  }

  class Shop{
    render(){
      const renderHook = document.getElementById('app');

      this.cart = new ShoppingCart("app");
      const cartEl = this.cart.render();
      const productList = new ProductList();
      const prodListEl = productList.render();

      renderHook.append(prodListEl);
    }
  }
  
  class App{
    static init(){
      const shop = new Shop();
      shop.render();
      this.cart = shop.cart;
    }

    static addProductToCard(product){
      this.cart.addProduct(product);
    }
  }
  App.init();
  

