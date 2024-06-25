<template>
  <v-carousel show-arrows="hover">
    <v-carousel-item
      v-for="image of previews"
      :key="image.id"
      :src="image.url"
      cover
      selected-class="rounded-lg overflow-hidden"
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