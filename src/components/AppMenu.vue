<template>
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu__item" v-for="(link, idx) in links" :key="idx">
        <a :href="link.url" class="menu__link">{{ link.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { Link } from './types';

export default defineComponent({
  name: 'AppMenu',
  props: {
    links: {
      type: Array as PropType<Link[]>,
      required: true,
    },
  },
});
</script>

<style lang="sass" scoped>
@import '.././assets/styles/variables.sass'
.menu
  &__list
    list-style-type: none
    padding: 0
    display: flex
    gap: 49px
  &__item
    display: inline-block
    margin: 0
    padding: 22px 0
    font-size: 14px
  &__link
    color: $base-text-color
    text-decoration: none
    transition: .3s
    position: relative
    padding-bottom: 5px
    &:hover
      opacity: .8
@media screen and (max-width: 767px)
  .menu
    &__list
      display: flex
      flex-direction: column
      gap: 0
    &__item
      text-align: center
      padding-bottom: 16px
      padding: 11px 0
</style>
