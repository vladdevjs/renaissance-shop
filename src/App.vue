<template>
  <div id="app">
    <header>
      <AppHeader @updateSearch="searchQuery = $event" />
    </header>
    <main>
      <ProductList :searchQuery="searchQuery" />
    </main>
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

<script lang="ts">
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import ProductList from './components/ProductList.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    ProductList,
  },
  data() {
    return {
      searchQuery: '',
    };
  },
};
</script>

<style lang="sass" scoped>
@import './assets/styles/variables.sass'
#app
  color: #2c3e50
  margin: 0 auto
  display: flex
  flex-direction: column
  min-height: 100%
main
  flex: 1
</style>
