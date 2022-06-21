<template>
<div>
    <MiniCart :amount="this.products.length"></MiniCart>
  </div>
</template>

<script>
import MiniCart from './components/MiniCart.vue'


export default {
  name: 'App',
  components: {
    MiniCart
  },
  data() {
    return {
      products: []
    }
  },
  methods: {
    cartListener() {
      window.addEventListener('productToCart', (evt) => {
        this.products.push(evt.detail.product);
        this.pushProductsLocalstorage();
        }),
      window.addEventListener('removeProductFromCart', (evt) => {
        this.products.splice(this.products.findIndex(x => x.id == evt.detail.product.id), 1);
        this.pushProductsLocalstorage();
        })
    },
    getProductsLocalstorage() {
      return JSON.parse(localStorage.getItem("mfe-products"));
    },
    pushProductsLocalstorage() {
      localStorage.setItem("mfe-products", JSON.stringify(this.products));
    }
  },
  beforeMount() {
    this.cartListener();
    if (this.getProductsLocalstorage() != null) {
      this.products = this.getProductsLocalstorage();
    }
  }
}
</script>

<style>
/* .single-spa-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 300px;
} */
</style>
