<template>
  <div class="modal" @click.self="closeModal" @keydown.esc="closeModal" tabindex="0">
    <div class="modal__content">
      <div class="modal__header">
        <h2>{{ product.title }}</h2>
        <button @click="closeModal" class="modal__close">Закрыть</button>
      </div>
      <p>{{ product.description }}</p>
      <ImageSlider :images="[product.img].concat(product.images)" :altText="product.title" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ImageSlider from './ImageSlider.vue';
import type { Product } from './types';

export default defineComponent({
  name: 'ProductModal',
  components: {
    ImageSlider,
  },
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
      this.unblockScroll();
    },
    blockScroll() {
      document.body.style.overflow = 'hidden';
    },
    unblockScroll() {
      document.body.style.overflow = '';
    },
  },
  mounted() {
    this.blockScroll();
  },
  beforeUnmount() {
    this.unblockScroll();
  },
});
</script>

<style lang="sass" scoped>
@import '.././assets/styles/variables.sass'
.modal
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  display: flex
  align-items: center
  justify-content: center
  background-color: rgba(0, 0, 0, 0.5)
  z-index: 1000
  outline: none
  &__header
    display: flex
    justify-content: space-between
    align-items: center
  &__content
    background: white
    padding: 20px
    max-width: 600px
    width: 90%
  &__close
    cursor: pointer
    height: 40px
    border: none
    display: inline-block
    font-family: $font-family
    background-color: $btn-color
    color: white
    padding: 0 36px
    &:hover
      background-color: $btn-hover-color
@media screen and (max-width: 767px)
  .modal
    &__header
      flex-direction: column
    &__close
      align-self: flex-end
      order: -1
</style>
