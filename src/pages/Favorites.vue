<template>
  <SearchPageLayout>
    <template v-slot:aside>
      <TopBar />
    </template>
    
    <template v-slot:sort-by>
      <SortHotelsBy />
    </template>
    
    <template v-slot:main>
      <HotelsList :hotels="hotels" />
    </template>
    
    <template v-slot:nav-bottom-mobile>
      <NavBottomMobile />
    </template>

    <template v-slot:footer>
      <FooterBase />
    </template>
  </SearchPageLayout>  
</template>

<script lang="ts" setup>
import SearchPageLayout  from '@/layouts/SearchPageLayout.vue';
import { TopBar } from '@/features/top-bar';
import { FooterBase } from '@/features/footer-base';
import { HotelsList } from '@/features/hotels-list';
import { NavBottomMobile } from '@/features/nav-bottom-mobile';
import SortHotelsBy from '@/components/SortHotelsBy.vue';


import { useFavoritesStore } from '../stores/favorites';
import { computed, watch } from 'vue';

const hotelsListStore = useFavoritesStore();
const hotels = computed(() => hotelsListStore.list);

import { searchFiltersQueryComp } from "@/composables/routeQueries";
const searchFilter = searchFiltersQueryComp();

watch(
  () => searchFilter.value,
  hotelsListStore.findAll,
  {
    immediate: true,
    deep: true
  }
);
</script>
