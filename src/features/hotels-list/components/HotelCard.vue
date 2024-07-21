<template>
  <div class="position-relative">
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
    
      <div class="flex justify-space-between align-center">
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

        <RatingStar class="rating-star" v-if="hotel.ratings >= 4" :rating="hotel.ratings" />
      </div>
    </div>
    
  </div>
</template>

<!-- currentOpen: Boolean,
monthToOpen: Number,
price: 206 -->

<script lang="ts" setup>
import { defineProps, type PropType } from "vue";
import type { IHotelCardPreview } from '@/types/IHotelComponents';
import HotelSlider from "@/components/HotelSlider.vue"
import RatingStar from "@/components/RatingStar.vue"

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
.rating-star {
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
}

.aside {
  & * {
    line-height: 1.1rem !important;
  }
}
</style>