<template>
  <div class="header">
    <div class="container">
      <div class="header__content">
        <AppMenu :links="links" />
        <SearchItem @updateSearch="handleSearch" />
      </div>
    </div>
    <hr class="header__line" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppMenu from './AppMenu.vue';
import SearchItem from './SearchItem.vue';
import links from '../data/links';

export default defineComponent({
  name: 'AppHeader',
  components: {
    AppMenu,
    SearchItem,
  },
  data() {
    return {
      links,
    };
  },
  methods: {
    handleSearch(search: string) {
      this.$emit('updateSearch', search);
    },
  },
});
</script>

<style lang="sass" scoped>
@import '.././assets/styles/variables.sass'
.header
  &__content
    display: flex
    justify-content: space-between
    gap: 20px
    align-items: center
    margin-left: 7.8%
    @media screen and (max-width: 1130px)
      margin-left: 0
      flex-direction: column
      margin-bottom: 20px
      gap: 0
  &__line
    margin: 0
    height: 1px
    width: 100%
    background-color: $border-color
    border: none
</style>
