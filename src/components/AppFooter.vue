<template>
  <div class="footer">
    <div class="container footer__content">
      <AppMenu :links="links" />
      <div class="footer__contacts">
        <div class="footer__contact">
          <PhoneIcon /> <a href="tel:+78125555555" class="footer__link">+7 (812) 555-55-55</a>
        </div>
        <div class="footer__contact">
          <LocationIcon /><a
            href="https://yandex.ru/maps/-/CHAk7R-R"
            target="_blank"
            class="footer__link"
          >
            г. Санкт-Петербург, ул. Ефимова, 3</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AppMenu from './AppMenu.vue';
import links from '../data/links';
import PhoneIcon from './icons/PhoneIcon.vue';
import LocationIcon from './icons/LocationIcon.vue';

export default {
  components: {
    AppMenu,
    PhoneIcon,
    LocationIcon,
  },
  data() {
    return {
      links,
    };
  },
};
</script>

<style lang="sass" scoped>
@import '.././assets/styles/variables.sass'
.footer
  background-color: $footer-color
  &__content
    display: flex
    justify-content: space-between
    align-items: center
  &__contacts
    display: flex
    align-items: center
    gap: 50px
  &__contact
    display: flex
    align-items: center
    gap: 8px
  &__link
    color: $base-text-color
    text-decoration: none
    font-size: 14px
@media screen and (max-width: 1130px)
  .footer
    &__content
      flex-direction: column
      gap: 0
    &__contacts
      flex-direction: column
      gap: 6px
      margin-top: 20px
      order: -1
</style>
