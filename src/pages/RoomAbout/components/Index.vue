<template>
  <RoomAboutLayout>
    <template v-if="currentHotel" v-slot:room-preview>
      <HotelSlider
        :item-id="currentRoomId"
        :previews="currentHotel.previews"
        border-radius-none
      />

      <h2>{{ currentHotel.title }}</h2>
    </template>
  </RoomAboutLayout>  
</template>

<script lang="ts" setup>
import RoomAboutLayout from '@/layouts/RoomAboutLayout.vue';
import HotelSlider from "@/components/HotelSlider.vue";
import { computed, type Ref, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { findById } from "../api";
import { type IHotelCardPreview } from '@/types/IHotelComponents';

const route = useRoute();
const currentRoomId = computed(() => +route.params.id);

const currentHotel: Ref<IHotelCardPreview | undefined> = ref(undefined);

onMounted(async () => {
  try {
    const hotel = await findById(currentRoomId.value);
    currentHotel.value = hotel;
  } catch (error) {
    console.error("Failed to fetch the current hotel:", error);
  }
});
</script>
