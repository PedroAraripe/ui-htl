<template>
  <div class="wrapper-row-search">
    <v-text-field
      class="search-preview"
      v-model="searchPreview"
      :counter="10"
      label="Para onde?"
      hide-details
      required
    >
      <template v-slot:append-inner>
        <SearchIcon class="me-3 me-lg-5" />
      </template>
    </v-text-field>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, type Ref, watch } from "vue";
import { useRoute } from "vue-router";
import { formatDateReadable } from "../composables/dateFormatters";
import { searchFiltersQueryComp } from '@/composables/routeQueries';
import SearchIcon from '@/components/buttons/SearchIcon.vue';

const route = useRoute();

const searchPreview: Ref<string> = ref("");

const searchFiltersQuery = searchFiltersQueryComp();

const currentSearch = computed(() => {
  const {
    checkIn,
    checkOut,
    location,
    guests,
    rooms,
  } = route.query;

  const queryCleaned = {
    location,
    guests: guests? `${guests} hóspedes` : null,
    rooms: rooms? `${rooms} quartos` : null,
    checkIn: checkIn? formatDateReadable(checkIn): null, 
    checkOut: checkOut? formatDateReadable(checkOut): null, 
  };

  return Object.values(queryCleaned).filter(c => c).join(", ");
});

watch(() => searchFiltersQuery.value, (newValue) => {
  if(newValue) {
    searchPreview.value = currentSearch.value;
  }
}, { immediate: true })
</script>

<style lang="scss" scoped>
.wrapper-row-search {
  position: relative;

  &:hover, & *:hover {
    cursor: pointer !important;
  }

  .search-preview {
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
    border: 1px solid #0000001c;
  
    :deep(input) {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  
    :deep(.v-field__outline) {
      display: none !important;
    }

  }

  .icon {
    position: absolute !important;
    right: 0;
  }
}
</style>