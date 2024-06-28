<template>
  <div class="wrapper-top-bar bg-w-1">
    <SearchHotel @click="openForm" />
    <ModalBase
      v-model="showDialog"
      @submit="handleSubmit"
      submit-text="Buscar"
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
import type { IFormSearch } from '../types/IFormSearch';
import { useRouter } from 'vue-router';
import { formatDateISO } from "../composables/dateFormatters";

const router = useRouter();

const showDialog: Ref<Boolean> =  ref(false);

const formData: Ref<IFormSearch> =  ref({
  checkIn: null,
  checkOut: null,
  location: null,
  guests: null,
});

const openForm = (e: any) => {
  e.preventDefault();
  showDialog.value = true;
};

const handleSubmit = () => {
  const {
    checkIn,
    checkOut,
    location,
    guests,
  } = formData.value;

  router.push({
    name: "home",
    query: {
      location,
      guests,
      checkIn: formatDateISO(checkIn),
      checkOut: formatDateISO(checkOut),
    }
  })
}
</script>

<style lang="scss" scoped>
.wrapper-top-bar {
  position: fixed;
  z-index: 2;
  width: 100%;
  top: 0;
}
</style>