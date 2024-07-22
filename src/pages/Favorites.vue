<template>
  <FavoritesPageLayout>
    <template v-slot:aside>
      <TopBar />
    </template>
    
    <template v-slot:sort-by>
      <SortHotelsBy />
    </template>
    
    <template v-slot:main>
      <HotelsList
        :hotels="hotels"
        :col-size="4"
      />
    </template>
    
    <template v-slot:nav-bottom-mobile>
      <NavBottomMobile />
    </template>

    <template v-slot:footer>
      <FooterBase />
    </template>
  </FavoritesPageLayout>  
</template>

<script lang="ts" setup>
import FavoritesPageLayout  from '@/layouts/FavoritesPageLayout .vue';
import { TopBar } from '@/features/top-bar';
import { FooterBase } from '@/features/footer-base';
import { HotelsList } from '@/features/hotels-list';
import { NavBottomMobile } from '@/features/nav-bottom-mobile';
import SortHotelsBy from '@/components/SortHotelsBy.vue';


import { useFavoritesStore } from '../stores/favorites';
import { computed } from 'vue';

const hotelsListStore = useFavoritesStore();
const hotels = computed(() => hotelsListStore.list);

hotelsListStore.findAll();
</script>
