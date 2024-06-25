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
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/0dc93cbc-8753-426d-b48d-6ae45bb1e3fd.jpeg?im_w=720&im_q=highq",
        id: 1
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/f4cbe542-3ce0-4c6f-a8f1-d2120c1b2420.jpeg?im_w=720&im_q=highq",
        id: 2
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/ced15ffe-0ab5-48cf-a189-dbdeaaf04387.jpeg?im_w=720&im_q=highq",
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
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/f4cbe542-3ce0-4c6f-a8f1-d2120c1b2420.jpeg?im_w=720&im_q=highq",
        id: 1
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/0dc93cbc-8753-426d-b48d-6ae45bb1e3fd.jpeg?im_w=720&im_q=highq",
        id: 2
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/ced15ffe-0ab5-48cf-a189-dbdeaaf04387.jpeg?im_w=720&im_q=highq",
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
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/ced15ffe-0ab5-48cf-a189-dbdeaaf04387.jpeg?im_w=720&im_q=highq",
        id: 1
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/f4cbe542-3ce0-4c6f-a8f1-d2120c1b2420.jpeg?im_w=720&im_q=highq",
        id: 2
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/0dc93cbc-8753-426d-b48d-6ae45bb1e3fd.jpeg?im_w=720&im_q=highq",
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
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/0dc93cbc-8753-426d-b48d-6ae45bb1e3fd.jpeg?im_w=720&im_q=highq",
        id: 1
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/f4cbe542-3ce0-4c6f-a8f1-d2120c1b2420.jpeg?im_w=720&im_q=highq",
        id: 2
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/ced15ffe-0ab5-48cf-a189-dbdeaaf04387.jpeg?im_w=720&im_q=highq",
        id: 3
      },
    ]
  },
]
</script>