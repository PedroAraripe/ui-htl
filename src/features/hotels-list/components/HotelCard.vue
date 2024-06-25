<template>
  <div class="wrapper-hotel-card px-6 py-5">
    <HotelSlider :previews="hotel.previews" />
      <!-- <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
      ></v-carousel-item>
    </v-carousel> -->
    <!-- <img
      src="./mock/image.png"
      alt="hotel image"
      width="500"
      height="500"
      class="rounded-lg"
    > -->
    
    <div class="mt-3 font-medium">
      {{hotel.title}}
    </div>
  
    <div class="my-1 text-grey-darken-2 receiver">
      Anfitriã(o): {{hotel.receiver}}
    </div>
  
    <div>
      <div v-if="!hotel.currentOpen" class="font-medium">
        Reserva encerrada
      </div>

      <div v-else-if="hotel.price" class="space-x-1">
        <span>
          <span class="font-medium">{{ hotel.price.symbol }}</span>
          <span class="font-medium">{{ hotel.price.value }}</span>
        </span>
        <span>por hóspede</span>
      </div>

      <div class="font-medium" v-else>
        Abre em {{ hotel.monthToOpen }}
      </div>
    </div>
  </div>
</template>

<!-- currentOpen: Boolean,
monthToOpen: Number,
price: 206 -->

<script lang="ts" setup>
import { defineProps, type PropType } from "vue";
import {type IHotelCardPreview} from "../types/HotelCard";
import HotelSlider from "./HotelSlider.vue"

defineProps({
  hotel: {
    type: Object as PropType<IHotelCardPreview>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.wrapper-hotel-card {
  max-width: 100vw;
  overflow: hidden;

  font-size: 0.95rem;  

  img {
    aspect-ratio: 1 / 0.95;
    object-fit: cover;
  }

  .receiver {
    line-height: 1rem;
  }
}
</style>