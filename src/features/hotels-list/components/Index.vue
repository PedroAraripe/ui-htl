<template>
  <div class="flex">
    <HotelCard
      v-for="item of [1,2,3,5,6,7,8]"
      :key="item"
    />
  </div>
</template>

<script lang="ts" setup>
import HotelCard from "./HotelCard.vue";
</script>