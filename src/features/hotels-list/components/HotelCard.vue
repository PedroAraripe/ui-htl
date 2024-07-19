<template>
  <div>
    <HotelSlider
      :border-radius-none="borderRadiusNone"
      :item-id="hotel.id"
      :previews="hotel.previews"
    />

    <div class="aside">
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
    
  </div>
</template>

<!-- currentOpen: Boolean,
monthToOpen: Number,
price: 206 -->

<script lang="ts" setup>
import { defineProps, type PropType } from "vue";
import {type IHotelCardPreview} from "../types/HotelCard";
import HotelSlider from "@/components/HotelSlider.vue"

defineProps({
  borderRadiusNone: {
    required: false,
    default: false,
    type: Boolean
  },
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

.aside {
  & * {
    line-height: 1.1rem !important;
  }
}
</style>