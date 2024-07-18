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
import { computed, watch } from "vue";
import { useRoute } from "vue-router";

import HotelCard from "./HotelCard.vue";

import { useHotelsListStore } from '../stores';

const route = useRoute();
const location = computed(() => route.query);

const hotelsListStore = useHotelsListStore();
const mockedHotels = computed(() => hotelsListStore.hotelList);

watch(() => location.value, hotelsListStore.findBySearchFilters, { immediate: true, deep: true })
</script>