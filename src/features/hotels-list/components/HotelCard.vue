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

        <RatingStar
          v-if="hotel.ratings >= 4.95"
          :rating="hotel.ratings"
          class="rating-star"
        />

        <FavoriteHearth
          class="favorite-hearth"
          :hotel="hotel"
        />
      </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import { defineProps, type PropType } from "vue";
import type { IHotelCardPreview } from '@/types/IHotelComponents';
import HotelSlider from "@/components/HotelSlider.vue"
import FavoriteHearth from "@/features/favorite-hotels/components/FavoriteHearth.vue"
import RatingStar from "./RatingStar.vue";

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
  left: -0.5rem;
}

.favorite-hearth {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.aside {
  & * {
    line-height: 1.1rem !important;
  }
}
</style>