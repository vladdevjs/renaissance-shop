<template>
  <button
    class="buy-button"
    @click.stop="$emit('buy')"
    :class="`buy-button--${btnState}`"
    :disabled="btnState === 'loading'"
  >
    <span><component :is="buttonIcon" class="buy-button__icon" /></span>
    <span>{{ buttonText }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { ButtonState } from './types';
import CheckmarkIcon from './icons/CheckmarkIcon.vue';
import CartIcon from './icons/CartIcon.vue';
import LoadingIcon from './icons/LoadingIcon.vue';

const stateMap: Record<ButtonState, { text: string; icon: any }> = {
  idle: {
    text: 'Купить',
    icon: CartIcon,
  },
  loading: {
    text: 'Загрузка',
    icon: LoadingIcon,
  },
  cart: {
    text: 'В корзине',
    icon: CheckmarkIcon,
  },
};

export default defineComponent({
  name: 'BuyButton',
  props: {
    btnState: {
      type: String as PropType<ButtonState>,
      default: 'idle',
    },
  },
  computed: {
    buttonText(): string {
      return stateMap[this.btnState].text;
    },
    buttonIcon(): string {
      return stateMap[this.btnState].icon;
    },
  },
});
</script>

<style lang="sass" scoped>
@import '.././assets/styles/variables.sass'
.buy-button
  cursor: pointer
  min-height: 100%
  border: none
  display: block
  font-family: $font-family
  background-color: $btn-color
  color: white
  padding: 0 8px
  width: 118px
  overflow: hidden
  display: flex
  justify-content: center
  align-items: center
  gap: 4px
  &:hover
    background-color: $btn-hover-color
  &__icon
    height: 20px
    width: 20px
  &--loading
    background-color: #C1B4B1
  &--cart
    background-color: #5B3A32
</style>
