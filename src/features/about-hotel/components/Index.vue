<template>
  <div>
    Aqui é o sobre do hotel {{ hotel }}
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import type { IHotelCardPreview } from '@/types/IHotelComponents';

defineProps({
  hotel: {
    type: Object as PropType<IHotelCardPreview>,
    required: true,
  },
})
</script>