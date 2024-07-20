<template>
  <v-container>
    <div class="opacity-0 mb-15">
      oh my god thats not clean but i need to sleep
    </div>

    <v-row>
      <v-col
        v-for="hotel of mockedHotels"
        :key="hotel.id" lg="2" cols="12"
      >
        <HotelCard :hotel="hotel" />
      </v-col>
    </v-row>

    <div class="opacity-0 mb-20">
      oh my god thats not clean but i need to sleep
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import { computed, watch } from "vue";

import HotelCard from "./HotelCard.vue";

import { useHotelsListStore } from '../stores';
import { searchFiltersQueryComp } from "@/composables/routeQueries";

const searchFilter = searchFiltersQueryComp();

const hotelsListStore = useHotelsListStore();
const mockedHotels = computed(() => hotelsListStore.hotelList);

watch(() => searchFilter.value, hotelsListStore.findBySearchFilters, { immediate: true, deep: true })
</script>