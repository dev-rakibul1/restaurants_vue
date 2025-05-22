import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [{ name: "IPhone 16 pro max", price: 25.5 }],
    products: [],
    cart: [],
    totalAmount: 0,
  }),
  actions: {
    addToCart(cart) {
      this.cart.push(cart);
    },
    addToProductCart(product, quantity = 1) {
      const existing = this.products.find((pro) => pro.id === product.id);

      if (existing) {
        existing.quantity = existing.quantity + 1;
      } else {
        this.products.push({ ...product, quantity });
      }

      this.totalAmount = this.totalAmount + product.price;
    },
    removeFromCart(product) {
      const existing = this.products.find((pro) => pro.id === product.id);
      if (existing && existing.quantity > 1) {
        existing.quantity = existing.quantity - 1;
      } else {
        this.products = this.products.filter((pro) => pro.id !== product.id);
      }
      this.totalAmount = this.totalAmount - product.price;
    },
    removeProductFromCart(product) {
      this.products = this.products.filter((pro) => pro.id !== product.id);
      this.totalAmount = this.totalAmount - product.price * product.quantity;
    },
  },
});
