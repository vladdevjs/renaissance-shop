<template>
  <div class="search">
    <div class="search__input-wrapper">
      <label for="search">
        <input
          class="search__input"
          type="text"
          id="search"
          v-model="search"
          placeholder="Поиск по названию картины"
          @keydown.enter="updateSearch"
        />
      </label>
      <button class="search__button" @click="updateSearch">Найти</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchItem',
  emits: ['updateSearch'],
  data() {
    return {
      search: '',
    };
  },
  methods: {
    clearSearch() {
      this.search = '';
      this.$emit('updateSearch', '');
    },
    updateSearch() {
      this.$emit('updateSearch', this.search);
    },
  },
  watch: {
    search(newValue) {
      if (newValue === '') this.clearSearch();
    },
  },
});
</script>

<style lang="sass" scoped>
@import '.././assets/styles/variables.sass'
.search
  &__input
    box-sizing: border-box
    height: 100%
    border: 1px solid $border-color
    outline: none
    padding-left: 16px
    width: 300px
    font-family: $font-family
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
  &__clear
    cursor: pointer
    position: absolute
    right: 10px
  &__input-wrapper
    height: 46px
    display: flex
  &__button
    cursor: pointer
    height: 100%
    border: none
    display: inline-block
    font-family: $font-family
    background-color: $btn-color
    color: white
    padding: 0 36px
    &:hover
      background-color: $btn-hover-color
@media screen and (max-width: 767px)
  .search
    &__input-wrapper
      width: 100%
    &__input
      max-width: 200px
</style>
