<template>
  <div>
    <HotelCard
      v-for="hotel of mockedHotels"
      :key="hotel.id"
      class="px-6 py-5"
      :hotel="hotel"
    />
  </div>
</template>

<script lang="ts" setup>
import { type Ref, ref } from "vue";
import HotelCard from "./HotelCard.vue";
import { IHotelCardPreview } from "../types/HotelCard";
import { getHotelsList } from "../api";

const mockedHotels: Ref<IHotelCardPreview[]> = ref([]);
getHotelsList().then((hotels: IHotelCardPreview[]) => mockedHotels.value = hotels);
</script>