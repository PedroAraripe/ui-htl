<template>
  <div class="wrapper-top-bar bg-w-1">
    <v-form>
      <v-container>
        <SearchHotel
          class="w-lg-50 mx-auto"
          @click="openForm"
          @contextmenu="openForm"
        />
      </v-container>
    </v-form>
    <ModalBase
      v-model="showDialog"
      @submit="handleSubmit"
      @clear="clearFilters"
      submit-text="Buscar"
      clear-text="Limpar filtro"
    >
      <SearchForm v-model="formData" />
    </ModalBase>
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import SearchHotel from './SearchHotel.vue';
import SearchForm from './SearchForm.vue';
import ModalBase from '@/components/ModalBase.vue';
import { useRouter } from 'vue-router';
import { formatDateISO } from "../composables/dateFormatters";
import { type IHotelSearchFilter } from "@/types/IHotelSearchFilter";
import { searchFiltersQueryComp } from '@/composables/routeQueries';
import { watch } from 'vue';


const router = useRouter();

const showDialog: Ref<Boolean> =  ref(false);

const formData: Ref<IHotelSearchFilter> =  ref({});

const searchFilter = searchFiltersQueryComp();

watch(searchFilter.value, (newValue) => {
  formData.value = newValue;
}, {deep: true});

const openForm = (e: any) => {
  e.preventDefault();
  showDialog.value = true;
};

const handleSubmit = () => {
  const {
    checkIn,
    checkOut,
  } = formData.value;

  router.push({
    name: "home",
    query: {
      ...formData.value,
      checkIn: formatDateISO(checkIn),
      checkOut: formatDateISO(checkOut),
    }
  })
};

const clearFilters = () => {
  formData.value = {};

  handleSubmit();
};

</script>

<style lang="scss" scoped>
.wrapper-top-bar {
  position: fixed;
  z-index: 2;
  width: 100%;
  top: 0;
}
</style>