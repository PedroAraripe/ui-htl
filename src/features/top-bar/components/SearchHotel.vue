<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            class="search-preview"
            v-model="searchPreview"
            :counter="10"
            label="Para onde?"
            hide-details
            required
          ></v-text-field>
          </v-col>
        </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts" setup>
import { computed, ref, type Ref, watch } from "vue";
import { useRoute } from "vue-router";
import { formatDateReadable } from "../composables/dateFormatters";

const route = useRoute();

const searchPreview: Ref<string> = ref("");

const currentSearch = computed(() => {
  const {
    checkIn,
    checkOut,
    location,
    guests,
  } = route.query;

  const queryCleaned = {
    location,
    guests: guests? `${guests} hóspedes` : null,
    checkIn: checkIn? formatDateReadable(checkIn): null, 
    checkOut: checkOut? formatDateReadable(checkOut): null, 
  };

  return Object.values(queryCleaned).filter(c => c).join(", ");
});

watch(() => currentSearch.value, (newValue) => {
  if(newValue) {
    searchPreview.value = newValue;
  }
}, { immediate: true })
</script>

<style lang="scss" scoped>
.search-preview :deep(input) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>