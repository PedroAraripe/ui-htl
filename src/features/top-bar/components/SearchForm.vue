<template>
  <v-form class="wrapper-search-form" :class="{'remove-padding' : removePadding}">
    <v-container>
      <v-expansion-panels>
        <v-expansion-panel>
          <template v-slot:title>
            <div class="align-center flex justify-space-between w-100">
              <div>
                Onde:
              </div>
              
              <div class="font-weight-medium">
                {{ formQuery.location }}
              </div>
            </div>
          </template>
          <template v-slot:text>
            <v-select
              v-model="formQuery.location"
              label="Selecione uma localidade"
              :items="['Fortaleza - CE', 'Curitiba - PR']"
            />
          </template>
        </v-expansion-panel>
        
        <v-expansion-panel class="remove-padding">
          <template v-slot:title>
              <div class="align-center flex justify-space-between w-100">
                <div>
                  Check-in:
                </div>
                
                <div class="font-weight-medium">
                  {{ formatDatePreview(formQuery.checkIn) }}
                </div>
              </div>
          </template>
          <template v-slot:text>
            <v-date-picker
              v-model="formQuery.checkIn"
              range
              scrollable
              no-title
            />
          </template>
        </v-expansion-panel>
        
        <v-expansion-panel class="remove-padding">
          <template v-slot:title>
              <div class="align-center flex justify-space-between w-100">
                <div>
                  Check-out:
                </div>
                
                <div class="font-weight-medium">
                  {{ formatDatePreview(formQuery.checkOut) }}
                </div>
              </div>
          </template>
          <template v-slot:text>
            <v-date-picker
              v-model="formQuery.checkOut"
              range
              scrollable
              no-title
          />
          </template>
        </v-expansion-panel>
        
        <v-expansion-panel>
          <template v-slot:title>
              <div class="align-center flex justify-space-between w-100">
                <div>
                  Hóspedes:
                </div>
                
                <div class="font-weight-medium">
                  {{ formQuery.guests }}
                </div>
              </div>
          </template>
          <template v-slot:text>
            <v-slider
              v-model="formQuery.guests"
              :max="30"
              :min="1"
              :step="1"
            />
          </template>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </v-form>
</template>

<script lang="ts" setup>
import { type Ref, ref, watch } from "vue";
import { type IFormSearch } from "../types/IFormSearch";
import { formatDatePreview } from "../composables/dateFormatters";

const emit = defineEmits(["update:modelValue"]);

defineProps({
  removePadding: {
    type: Boolean,
    default: false,
    required: false,
  }
});

const formQuery: Ref<IFormSearch> = ref({
  checkIn: null,
  checkOut: null,
  location: null,
  guests: null,
});

watch(formQuery.value, (newValue) => {
  emit("update:modelValue", newValue)
}, {deep: true})
</script>

<style lang="scss" scoped>
.wrapper-search-form .remove-padding :deep(.v-expansion-panel-text__wrapper){
  padding: 0 !important;
}
</style>