<template>
  <div class="wrapper-hotel-card px-4 py-5">
    <!-- :src="getPhoto(hotel.previews[0])" -->
    <img
      src="./mock/image.png"
      alt="hotel image"
      width="500"
      height="500"
      class="rounded-lg"
    >
    
    <div class="font-weight-bold mt-2">
      {{hotel.title}}
    </div>
  
    <div class="text-grey">
      Anfitriã(o): {{hotel.receiver}}
    </div>
  
    <div class="font-weight-bold">
      Reserva {{hotel.isOpenReserve ? "encerrada" : "disponível"}}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, type PropType } from "vue";
import type IHotelCardPreview from "../types/HotelCard";

defineProps({
  hotel: {
    type: Object as PropType<IHotelCardPreview>,
    required: true,
  },
});

const getPhoto = (path: string) => require(path);
</script>

<style lang="scss" scoped>
.wrapper-hotel-card {
  max-width: 100vw;
  overflow: hidden;
}
</style>