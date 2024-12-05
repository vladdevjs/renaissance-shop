<template>
  <li
    :class="{ card: true, 'card--sold': item.sold }"
    @click="selectProduct"
    @keydown.enter="selectProduct"
  >
    <img v-if="item.img" :alt="item.title" :src="item.img" class="card__image" />
    <div class="card__info">
      <h2 class="card__title">«{{ item.title }}»</h2>
      <span>{{ item.author }}</span>
      <div v-if="!item.sold" class="card__buy">
        <div class="price">
          <span :class="{ 'card__sale-price': item.sale }">{{ formatPrice(item.price) }}</span>
          <span v-if="item.sale">{{ formatPrice(item.sale) }}</span>
        </div>
        <BuyButton :btnState="btnState" @buy="buy" />
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import formatPrice from '@/helpers/formatPrice';
import BuyButton from './BuyButton.vue';
import type { Product, ButtonState } from './types';

export default defineComponent({
  name: 'ProductItem',
  components: {
    BuyButton,
  },
  props: {
    item: {
      type: Object as PropType<Product>,
      default: () => ({}),
    },
    btnState: {
      type: String as PropType<ButtonState>,
      default: 'idle',
    },
  },
  methods: {
    selectProduct() {
      if (this.item.sold) return;
      this.$emit('select', this.item);
    },
    buy() {
      this.$emit('buy', this.item.id);
    },
    formatPrice,
  },
});
</script>

<style lang="sass" scoped>
@import '.././assets/styles/variables.sass'
.card
  padding: 0
  cursor: pointer
  border: 1px solid #E1E1E1
  &__title
    margin: 0
    padding: 0
    font-size: 18px
    font-weight: 400
    line-height: 150%
  &--sold
    opacity: 0.5
    cursor: not-allowed
  &__image
    display: block
    max-width: 100%
    height: auto
    object-fit: contain
  &__info
    padding: 24px
    display: flex
    flex-direction: column
    gap: 8px
  &__sale-price
    text-decoration: line-through
    color: $inactive-color
  &__buy
    display: flex
    justify-content: space-between
    margin-top: 15px
.price
  display: flex
  flex-direction: column
  justify-content: center
  line-height: 150%
  font-size: 16px
  height: 48px
</style>
