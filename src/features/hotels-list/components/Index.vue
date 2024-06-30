<template>
  <v-container>
    <v-row>
      <v-col
        v-for="hotel of mockedHotels"
        :key="hotel.id" lg="3" cols="12"
      >
        <HotelCard :hotel="hotel" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { type Ref, ref } from "vue";
import HotelCard from "./HotelCard.vue";
import { type IHotelCardPreview } from "../types/HotelCard";
import { getHotelsList } from "../api";

const mockedHotels: Ref<IHotelCardPreview[]> = ref([]);
getHotelsList().then((hotels: IHotelCardPreview[]) => mockedHotels.value = hotels);
</script>