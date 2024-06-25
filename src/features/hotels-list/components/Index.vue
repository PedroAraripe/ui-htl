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
import HotelCard from "./HotelCard.vue";
import {type IHotelCardPreview} from "../types/HotelCard";

const mockedHotels: IHotelCardPreview[] = [
  {
    id: 1,
    title: "Treine na Mansão X",
    receiver: "Jubilee",
    monthToOpen: "Junho",
    currentOpen: true,
    price: {
      currency: "Real",
      symbol: "R$",
      value: 206
    },
    previews: [
      {
        url: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
        id: 1
      },
      {
        url: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
        id: 2
      },
      {
        url: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
        id: 3
      },
    ]
  },
  {
    id: 2,
    title: "Venha de aventurar no divertida mente 2",
    receiver: "Joy",
    monthToOpen: "Junho",
    currentOpen: true,
    price: {
      currency: "Real",
      symbol: "R$",
      value: 903
    },
    previews: [
      {
        url: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
        id: 1
      },
      {
        url: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
        id: 2
      },
      {
        url: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
        id: 3
      },
    ]
  },
  {
    id: 3,
    title: "Venha de aventurar no divertida mente 2",
    receiver: "Joy",
    currentOpen: false,
    monthToOpen: "Fevereiro",
    previews: [
      {
        url: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
        id: 1
      },
      {
        url: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
        id: 2
      },
      {
        url: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
        id: 3
      },
    ]
  },
  {
    id: 4,
    title: "Venha de aventurar no divertida mente 2",
    receiver: "Joy",
    currentOpen: false,
    monthToOpen: "Fevereiro",
    previews: [
      {
        url: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
        id: 1
      },
      {
        url: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
        id: 2
      },
      {
        url: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
        id: 3
      },
    ]
  },
]
</script>