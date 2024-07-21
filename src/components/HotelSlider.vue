<template>
  <v-carousel
    :class="{'rounded-lg' : !borderRadiusNone}"
    class="wrapper-carousel-slider overflow-hidden"
    height="auto"
    show-arrows="hover"
    delimiter-icon=""
  >
    <v-carousel-item
      v-for="image of previews"
      :key="image.id"
      :src="image.url"
      cover
      aspect-ratio="1.3"
      hide-delimiter-background
      draggable
      @click="router.push({
        name: 'rooms',
        params: {
          id: itemId
        } 
      })"
    ></v-carousel-item>
  </v-carousel>
</template>

<script lang="ts" setup>
import { type IPreview } from "@/types/IHotelComponents";
import { defineProps, type PropType } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

defineProps({
  previews: {
    required: true,
    type: Object as PropType<IPreview[]>,
  },
  borderRadiusNone: {
    required: false,
    default: false,
    type: Boolean
  },
  itemId: {
    type: Number,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.wrapper-carousel-slider {
   :deep(.v-window__controls) {
    button {
      width: 35px;
      height: 35px;
      opacity: 0.8;
    }
   }

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