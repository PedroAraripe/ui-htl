<template>
  <v-container>
    <v-select
      class="sort-hotels-by w-lg-20"
      v-model="sortBy"
      :items="sorts"
      label="Ordenar por:"
      return-object
    ></v-select>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const sorts = ref([
  {
    title: "Preço",
    value: "price"
  },
  {
    title: "Avaliações",
    value: "ratings"
  },
]);

const sortBy = ref(sorts.value[0])

const pushRouteQuerySort = (sort: string) => {
  router.push({
    query: {
      ...route.query,
      sortBy: sort
    }
  })
}

watch(sortBy, (newValue) => {
  pushRouteQuerySort(newValue.value);
})

</script>

<style lang="scss" scoped>
@import "../assets/style/themes.scss";

.sort-hotels-by {
  @media (min-width: 1024px) {
    width: 10rem;
  }

  :deep(.v-input__details),
  :deep(.v-field__outline)
  {
    display: none;
  }

  :deep(.v-field__append-inner)
  {
    color: $theme-red-3;
    font-size: 1.5rem;
  }
}
</style>