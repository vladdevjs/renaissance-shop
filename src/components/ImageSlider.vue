<template>
  <div
    class="image-slider"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
  >
    <div class="main-image">
      <img :src="images[currentImageIndex]" :alt="altText" class="main-image__img" />
    </div>
    <div class="thumbnails">
      <button class="thumbnails__button" @click="prevImage" @keydown.left="prevImage" title="Назад">
        ←
      </button>

      <div class="thumbnails__list">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          :alt="'Preview ' + index"
          class="thumbnails__item"
          :class="{ active: index === currentImageIndex }"
          @click="setImage(index)"
        />
      </div>

      <button
        class="thumbnails__button"
        @click="nextImage"
        @keydown.right="nextImage"
        title="Вперёд"
      >
        →
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ImageSlider',
  props: {
    images: {
      type: Array as PropType<string[]>,
      required: true,
    },
    altText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      currentImageIndex: 0,
      touchStartX: 0,
      touchEndX: 0,
    };
  },
  methods: {
    prevImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex -= 1;
      } else {
        this.currentImageIndex = this.images.length - 1;
      }
    },
    nextImage() {
      if (this.currentImageIndex < this.images.length - 1) {
        this.currentImageIndex += 1;
      } else {
        this.currentImageIndex = 0;
      }
    },
    setImage(index: number) {
      this.currentImageIndex = index;
    },
    onTouchStart(event: TouchEvent) {
      this.touchStartX = event.changedTouches[0].screenX;
    },
    onTouchMove(event: TouchEvent) {
      this.touchEndX = event.changedTouches[0].screenX;
    },
    onTouchEnd() {
      const threshold = 50;
      if (this.touchStartX - this.touchEndX > threshold) {
        this.nextImage();
      }

      if (this.touchEndX - this.touchStartX > threshold) {
        this.prevImage();
      }
    },
  },
});
</script>

<style lang="sass" scoped>
.image-slider
  .main-image
    display: flex
    justify-content: center
    margin-bottom: 20px
    &__img
      max-width: 100%
      height: auto
      object-fit: contain

.thumbnails
  display: flex
  justify-content: center
  align-items: center
  &__button
    background: transparent
    border: none
    font-size: 24px
    padding: 10px
    cursor: pointer
  &__list
    display: flex
    gap: 10px
  &__item
    width: 50px
    height: 50px
    object-fit: cover
    cursor: pointer
    opacity: 0.6
    transition: opacity 0.3s
    &:hover
      opacity: 1
    &.active
      border: 2px solid #42b983
</style>
