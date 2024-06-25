<template>
  <v-carousel
    :show-arrows="false"
    class="wrapper-carousel-slider rounded-lg overflow-hidden"
    height="auto"
  >
    <v-carousel-item
      v-for="image of previews"
      :key="image.id"
      :src="image.url"
      cover
      aspect-ratio="1.3"
      hide-delimiter-background
      draggable
    ></v-carousel-item>
  </v-carousel>
</template>

<script lang="ts" setup>
import { type IPreview } from "../types/HotelCard";
import { defineProps, type PropType } from "vue";

defineProps({
  previews: {
    type: Object as PropType<IPreview[]>,
  }
})
</script>

<style lang="scss" scoped>
.wrapper-carousel-slider {
  :deep(.v-carousel__controls) {
    $size: 7px;
    
    background: none !important;

    & > * {
      width: $size;
      height: $size;
      background: white;
      margin: calc($size/2);

      &:not(.v-btn--active) {
        $size: calc($size - 1px);

        width: $size;
        height: $size;

        opacity: 0.5;
      }
    }
  }
}
</style>