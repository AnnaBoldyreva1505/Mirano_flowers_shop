class Store {
  constructor() {
    this.observers = [];
    this.products = [];
    this.categories = new Set();
  }

  subscribe(observerFunction) {
    this.observers.push(observerFunction);
  }

  notifyObservers() {
    // console.log(this)
    this.observers.forEach((observer) => observer());
  }

  getProducts() {
    return this.products;
  }
  getCategories() {
    return this.categories;
  }

  setProducts(newProducts) {
    this.products = newProducts;
    this.updateCategories(newProducts);
    this.notifyObservers();
  }

  updateCategories(products) {
    this.categories.clear();

    products.forEach((product) => {
      if (product.categories) {
        product.categories.forEach((category) => {
          this.categories.add(category);
        });
      }
    });

    this.notifyObservers();
  }
}

export const store = new Store();
