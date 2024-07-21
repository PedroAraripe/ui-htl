<template>
  <SearchPageLayout>
    <template v-slot:aside>
      <TopBar />
    </template>
    
    <template v-slot:main>
      <HotelsList />
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
import SearchPageLayout from '@/layouts/SearchPageLayout.vue';
import { TopBar } from '@/features/top-bar';
import { FooterBase } from '@/features/footer-base';
import { HotelsList } from '@/features/hotels-list';
import { NavBottomMobile } from '@/features/nav-bottom-mobile';
</script>
