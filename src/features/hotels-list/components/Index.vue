<template>
  <v-row v-if="hotels.length">
    <v-col
      v-for="hotel of hotels"
      :key="hotel.id" :lg="colSize" cols="12"
    >
      <HotelCard :hotel="hotel" />
    </v-col>
  </v-row>
  <v-row v-else>
    <v-col cols="12" class="my-10 text-h5">
      <div class="mb-4">
        Não foram encontrados hóteis correspondentes para a sua busca
      </div>
      <router-link :to="{name: 'home'}" class="text-body-2">
        <button class="btn-red-1">
          Retornar ao início
        </button>
      </router-link>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { type PropType } from "vue";

import HotelCard from "./HotelCard.vue";

import type { IHotelCardPreview } from "@/types/IHotelComponents";

defineProps({
  colSize: {
    type: Number,
    required: false,
    default: 2
  },
  hotels: {
    type: Object as PropType<IHotelCardPreview[]>,
    required: false,
    default: [],
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/style/themes.scss";
</style>