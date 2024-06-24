<template>
  <div>
    <HotelCard
      v-for="hotel of mockedHotels"
      :key="hotel.id"
      class="px-4 py-5"
      :hotel="hotel"
    />
  </div>
</template>

<script lang="ts" setup>
import HotelCard from "./HotelCard.vue";
import type IHotelCardPreview from "../types/HotelCard";

const mockedHotels: IHotelCardPreview[] = [
  {
    id: 1,
    title: "Venha de aventurar no divertida mente 2",
    receiver: "Joy",
    isOpenReserve: false,
    previews: ["./mock/image.png", "./mock/image.png"]
  },
  {
    id: 2,
    title: "Venha de aventurar no divertida mente 2",
    receiver: "Joy",
    isOpenReserve: false,
    previews: ["./mock/image.png", "./mock/image.png"]
  },
  {
    id: 3,
    title: "Venha de aventurar no divertida mente 2",
    receiver: "Joy",
    isOpenReserve: false,
    previews: ["./mock/image.png", "./mock/image.png"]
  },
  {
    id: 4,
    title: "Venha de aventurar no divertida mente 2",
    receiver: "Joy",
    isOpenReserve: false,
    previews: ["./mock/image.png", "./mock/image.png"]
  },
]
</script>