<template>
  <section class="product-list">
    <div class="container">
      <h1 class="product-list__title">Картины эпохи Возрождения</h1>
      <ul class="product-list__list" v-if="filteredProducts.length">
        <ProductItem
          v-for="product in filteredProducts"
          :key="product.id"
          :item="product"
          :btnState="getButtonState(product.id)"
          @buy="toggleProductInCart(product.id)"
          @select="openModal"
        />
      </ul>
      <p v-else class="product-list__not-found">Ничего не нашлось</p>
      <ProductModal v-if="selectedProduct" :product="selectedProduct" @close="closeModal" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import products from '@/data/products';
import ProductItem from './ProductItem.vue';
import ProductModal from './ProductModal.vue';
import type { Product, ButtonState } from './types';

export default defineComponent({
  name: 'ProductList',
  components: {
    ProductItem,
    ProductModal,
  },
  props: {
    searchQuery: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      products: products as Product[],
      selectedProduct: null as Product | null,
      cartItems: [] as number[],
      loadingState: {} as Record<number, boolean>,
    };
  },
  created() {
    this.loadCartStateFromLocalStorage();
  },
  computed: {
    filteredProducts(): Product[] {
      return this.products.filter((product) =>
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase().trim())
      );
    },
  },
  methods: {
    openModal(product: Product) {
      this.selectedProduct = product;
    },
    closeModal() {
      this.selectedProduct = null;
    },
    toggleProductInCart(productId: number) {
      if (this.isLoading(productId)) return;
      this.setLoadingState(productId, true);
      setTimeout(() => {
        if (this.cartItems.includes(productId)) {
          this.removeFromCart(productId);
        } else {
          this.addToCart(productId);
        }
        this.setLoadingState(productId, false);
      }, 2000);
    },

    addToCart(productId: number) {
      this.cartItems.push(productId);
      this.saveCartStateToLocalStorage();
    },
    removeFromCart(productId: number) {
      this.cartItems = this.cartItems.filter((id) => id !== productId);
      this.saveCartStateToLocalStorage();
    },
    getButtonState(productId: number): ButtonState {
      if (this.isLoading(productId)) return 'loading';
      return this.cartItems.includes(productId) ? 'cart' : 'idle';
    },

    isLoading(productId: number): boolean {
      return this.loadingState[productId] || false;
    },

    setLoadingState(productId: number, state: boolean) {
      this.$set(this.loadingState, productId, state);
    },

    loadCartStateFromLocalStorage() {
      const savedCart = localStorage.getItem('cartItems');
      if (savedCart) {
        this.cartItems = JSON.parse(savedCart);
      }
    },
    saveCartStateToLocalStorage() {
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    },
  },
});
</script>

<style lang="sass" scoped>
.product-list
  max-width: 1216px
  margin: 0 auto
  &__title
    margin: 50px 0 39px
  &__list
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr))
    gap: 32px
    list-style-type: none
    padding: 0
  &__not-found
    text-align: center
    padding-top: 20px
    font-size: 22px
@media screen and (max-width: 1130px)
  .product-list
    &__title
      text-align: center
</style>
