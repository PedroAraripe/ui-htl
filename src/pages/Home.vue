<template>
  <SearchPage>
    <template v-slot:aside>
      <TopBar />
    </template>
    
    <template v-slot:main>
      <HotelsList />
    </template>
  </SearchPage>  
</template>

<script lang="ts" setup>
import SearchPage from '@/layouts/SearchPage.vue';
import { TopBar } from '@/features/top-bar';
import { HotelsList } from '@/features/hotels-list';
</script>
